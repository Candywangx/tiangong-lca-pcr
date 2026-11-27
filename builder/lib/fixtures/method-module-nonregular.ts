import fs from 'node:fs';
import { syncBuiltinESMExports } from 'node:module';
import { spawnSync } from 'node:child_process';
import { readRegularBytes } from '../../../packages/pcr-core/src/method-module.ts';

// Runs only in a bounded child process, with one disposable path owned by the caller.
const filename = process.argv[2], mode = process.argv[3];
if (!filename || !['preexisting', 'replaced'].includes(mode ?? '')) throw new Error('Expected fixture path and mode');
function replaceWithNonregular(): void {
  fs.unlinkSync(filename!);
  if (process.platform === 'win32') fs.mkdirSync(filename!);
  else {
    const fifo = spawnSync('mkfifo', [filename!], { encoding: 'utf8', timeout: 1000 });
    if (fifo.status !== 0) throw new Error(`mkfifo failed: ${fifo.stderr}`);
  }
}
fs.writeFileSync(filename, 'regular source');
const originalOpen = fs.openSync;
let replaced = false;
if (mode === 'preexisting') replaceWithNonregular();
else {
  fs.openSync = (...args: Parameters<typeof fs.openSync>) => {
    if (args[0] === filename && !replaced) { replaced = true; replaceWithNonregular(); }
    return originalOpen(...args);
  };
  syncBuiltinESMExports();
}
try {
  readRegularBytes(filename);
  throw new Error('Unexpected nonregular read success');
} catch (error) {
  if (!(error instanceof Error) || !/not a regular file|EISDIR/.test(error.message)) throw error;
  process.stdout.write(JSON.stringify({ rejected: true, mode, platform: process.platform,
    case: process.platform === 'win32' ? 'nonregular-directory' : 'actual-posix-fifo', replaced }));
} finally {
  fs.openSync = originalOpen;
  syncBuiltinESMExports();
}
