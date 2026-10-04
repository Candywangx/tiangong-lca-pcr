import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { Readable } from 'node:stream';
import test from 'node:test';
import { nativePublisherFetch } from './product-publish-io.ts';

test('native Node fetch streams the exact upload bytes with its documented duplex option', async t => {
  const pieces = [Buffer.from('sealed-'), Buffer.from('stream-'), Buffer.from('bytes')];
  let received: Buffer | undefined;
  const server = createServer(async (request, response) => {
    const chunks: Buffer[] = [];
    for await (const chunk of request) { assert.ok(Buffer.isBuffer(chunk)); chunks.push(chunk); }
    received = Buffer.concat(chunks);
    assert.equal(request.method, 'POST');
    response.writeHead(201, { 'content-type': 'application/json' }); response.end('{"accepted":true}');
  });
  t.after(() => new Promise<void>((resolve, reject) => { server.closeAllConnections(); server.close(error => error ? reject(error) : resolve()); }));
  await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
  const address = server.address(); assert.ok(address && typeof address !== 'string');
  const response = await nativePublisherFetch(`http://127.0.0.1:${address.port}/upload`, {
    method: 'POST', body: Readable.from(pieces), duplex: 'half', redirect: 'error', signal: AbortSignal.timeout(5000),
  });
  assert.equal(response.status, 201); assert.deepEqual(await response.json(), { accepted: true });
  assert.deepEqual(received, Buffer.concat(pieces));
});
