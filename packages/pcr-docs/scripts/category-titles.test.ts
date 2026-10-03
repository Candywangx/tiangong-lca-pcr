import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { parseYaml } from '../../pcr-core/src/yaml-lite.ts';
import { unknownField } from '../../pcr-core/src/types.ts';
import { categoryTitle } from './category-titles.ts';

test('every material catalog category has a Chinese presentation label', () => {
  const filename = path.resolve(import.meta.dirname, '../../../library/indexes/pcr-index.yaml');
  const records = unknownField(parseYaml(readFileSync(filename, 'utf8')), 'pcrs');
  assert.ok(Array.isArray(records) && records.length > 0, 'The actual material catalog must be present.');
  const categories = new Set<string>();
  for (const record of records) {
    const location = unknownField(record, 'path');
    assert.ok(typeof location === 'string');
    const [, , domain, subdomain] = location.split('/');
    assert.ok(domain && subdomain);
    categories.add(domain); categories.add(subdomain);
  }
  for (const category of categories) {
    assert.match(categoryTitle(category, 'zh-CN'), /\p{Script=Han}/u, `Missing Chinese catalog label: ${category}`);
    assert.ok(categoryTitle(category, 'en-US').length > 0);
  }
});
