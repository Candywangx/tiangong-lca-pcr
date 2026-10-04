#!/usr/bin/env node
/** External-tool fixture only. Real command/state/journal implementations are never mocked. */
import { appendFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createServer } from 'node:http';
import { createInterface } from 'node:readline';
import path from 'node:path';

type RecordValue = Record<string, unknown>;
function isRecord(value: unknown): value is RecordValue { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function record(value: unknown): RecordValue { if (!isRecord(value)) throw new Error('Invalid fixture request'); return value; }
const args = process.argv.slice(2);
const mode = process.env.PCR_ENTRYPOINT_MODE ?? 'normal';
const log = process.env.PCR_ENTRYPOINT_LOG;
function audit(value: RecordValue): void { if (log) appendFileSync(log, `${JSON.stringify({ ...value, pid: process.pid, cwd: process.cwd() })}\n`); }
audit({ kind: 'invocation', args });

function response(line: string): string | null {
  const wire = record(JSON.parse(line) as unknown);
  if (!Object.hasOwn(wire, 'id')) return null;
  audit({ kind: 'request', method: wire.method });
  if (mode === 'app-server-error') return JSON.stringify({ id: wire.id, error: { code: -32000, message: 'Fixture visible service refused request' } });
  const result = wire.method === 'initialize' ? { userAgent: 'owned-entrypoint-fixture/1' }
    : wire.method === 'thread/list' ? { data: [], nextCursor: null }
    : wire.method === 'project/list' ? { data: mode === 'no-project' ? [] : [{ id: 'fixture-project', roots: [{ path: process.env.PCR_ENTRYPOINT_PROJECT }] }], nextCursor: null }
    : {};
  return JSON.stringify({ id: wire.id, result });
}

function websocketFrame(text: string): Buffer {
  const payload = Buffer.from(text);
  const header = Buffer.alloc(payload.length < 126 ? 2 : 4); header[0] = 0x81;
  if (header.length === 2) header[1] = payload.length;
  else { header[1] = 126; header.writeUInt16BE(payload.length, 2); }
  return Buffer.concat([header, payload]);
}
function websocketServer(endpoint: string): void {
  const url = new URL(endpoint);
  const server = createServer((request, response) => { response.writeHead(request.url === '/readyz' ? 200 : 404); response.end(); });
  server.on('upgrade', (request, socket) => {
    const key = request.headers['sec-websocket-key']; if (typeof key !== 'string') { socket.destroy(); return; }
    const accept = createHash('sha1').update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');
    socket.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${accept}\r\n\r\n`);
    let pending = Buffer.alloc(0);
    socket.on('data', (chunk: Buffer) => {
      pending = Buffer.concat([pending, chunk]);
      while (pending.length >= 2) {
        const opcode = (pending[0] ?? 0) & 15; const masked = ((pending[1] ?? 0) & 128) !== 0;
        let length = (pending[1] ?? 0) & 127; let offset = 2;
        if (length === 126) { if (pending.length < 4) return; length = pending.readUInt16BE(2); offset = 4; }
        if (length === 127) { if (pending.length < 10) return; const wide = pending.readBigUInt64BE(2); if (wide > 1_000_000n) { socket.destroy(); return; } length = Number(wide); offset = 10; }
        if (pending.length < offset + (masked ? 4 : 0) + length) return;
        const mask = masked ? pending.subarray(offset, offset + 4) : null; offset += masked ? 4 : 0;
        const payload = Buffer.from(pending.subarray(offset, offset + length));
        pending = pending.subarray(offset + length);
        if (mask) for (let i = 0; i < payload.length; i += 1) payload[i] = (payload[i] ?? 0) ^ (mask[i % 4] ?? 0);
        if (opcode === 8) { socket.end(Buffer.from([0x88, 0])); return; }
        if (opcode !== 1) continue;
        const result = response(payload.toString('utf8')); if (result) socket.write(websocketFrame(result));
      }
    });
    socket.on('error', () => socket.destroy());
  });
  server.listen(Number(url.port), url.hostname);
  process.on('SIGTERM', () => { server.close(); process.exit(0); });
}

if (args[0] === 'enable') {
  if (mode === 'corepack-error') process.exit(9);
  const directory = args[args.indexOf('--install-directory') + 1]; if (!directory) throw new Error('Missing shim path');
  mkdirSync(directory, { recursive: true });
  writeFileSync(path.join(directory, 'pnpm'), '#!/bin/sh\nexit 0\n', { mode: 0o755 });
} else if (args[0] === 'pnpm' || args[0] === '--help') {
  process.stdout.write('fixture tool available\n');
} else if (args[0] === '--version') {
  if (mode === 'version-error') process.exit(7);
  process.stdout.write('owned fixture 1.0\n');
} else if (args[0] === 'auth') {
  process.stdout.write(JSON.stringify({ status: mode === 'auth-error' ? 'failed' : 'passed' }));
} else if (args[0] === 'flow') {
  const id = args[args.indexOf('--id') + 1];
  process.stdout.write(JSON.stringify({ state_code: 100, flow: { flowDataSet: { flowInformation: { dataSetInformation: { 'common:UUID': id } } } } }));
} else if (args.includes('--input')) {
  process.stdout.write(JSON.stringify({ data: [{ id: '12345678-1234-4234-8234-123456789abc' }] }));
} else if (args[0] === 'app-server' && args.includes('--help')) {
  process.stdout.write('app-server --listen ws://localhost\n');
} else if (args[0] === 'app-server') {
  const endpoint = args[args.indexOf('--listen') + 1];
  if (args.includes('--listen') && endpoint) websocketServer(endpoint);
  else { const input = createInterface({ input: process.stdin }); input.on('line', line => { const result = response(line); if (result) process.stdout.write(result + '\n'); }); }
} else throw new Error('Unexpected fixture tool invocation');
