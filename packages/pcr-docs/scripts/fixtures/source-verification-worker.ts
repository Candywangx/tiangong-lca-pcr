import {setTimeout as delay} from 'node:timers/promises';
import {getHeapStatistics} from 'node:v8';

const scenario = process.env.PCR_VERIFY_POOL_FIXTURE ?? 'valid';
function record(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function send(value: unknown) {
  if (process.send) process.send(value);
}
process.on('message', (message: unknown) => {
  if (!record(message)) throw new Error('Malformed test message');
  if (message.type === 'initialize') {
    if (scenario === 'crash-before-ready') process.exit(9);
    send({type: 'ready', pid: scenario === 'wrong-pid' ? -1 : process.pid,
      heapLimitBytes: scenario === 'huge-heap' ? 8 * 1024 ** 3 : getHeapStatistics().heap_size_limit});
    return;
  }
  if (message.type === 'stop') {
    if (scenario === 'bad-stop') process.exit(6);
    if (scenario === 'late-result') send({type: 'result', index: 0, sourcePath: 'sources/document-0.md'});
    if (scenario === 'late-ready') send({type: 'ready', pid: -1, heapLimitBytes: 1});
    process.disconnect();
    return;
  }
  if (message.type !== 'document' || !Number.isSafeInteger(message.index) || !record(message.source)) {
    throw new Error('Malformed test document');
  }
  const index = Number(message.index);
  const sourcePath = message.source.sourcePath;
  if (scenario === 'crash-on-task') process.exit(8);
  if (scenario === 'missing-ack') { process.disconnect(); return; }
  if (scenario === 'disconnect-alive') { process.disconnect(); setInterval(() => {}, 1000); return; }
  void (async () => {
    await delay(index === 0 ? 60 : 1);
    if (scenario === 'out-of-order-errors') {
      send({type: 'failure', index, sourcePath,
        error: {name: 'Error', message: index === 0 ? 'earliest source error' : 'later source error'}});
      return;
    }
    if (scenario === 'malformed-error') {
      send({type: 'failure', index, sourcePath, error: {name: 'Error', message: 4}});
      return;
    }
    const result = {type: 'result', index: scenario === 'stale-index' ? index + 20 : index,
      sourcePath: scenario === 'wrong-source' ? 'wrong.md' : sourcePath};
    send(result);
    if (scenario === 'duplicate-ack') send(result);
    if (scenario === 'unknown-type') send({type: 'unknown', index, sourcePath});
  })();
});
