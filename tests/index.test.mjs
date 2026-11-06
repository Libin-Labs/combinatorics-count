import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('returns edge values', () => {
  assert.equal(api.choose(5, 0), 1n);
  assert.equal(api.choose(5, 5), 1n);
});
test('computes small coefficient', () => {
  assert.equal(api.choose(5, 2), 10n);
});
test('computes poker hand count', () => {
  assert.equal(api.choose(52, 5), 2598960n);
});
test('uses symmetry', () => {
  assert.equal(api.choose(20, 3), api.choose(20, 17));
});
test('returns zero when k exceeds n', () => {
  assert.equal(api.choose(3, 4), 0n);
});
test('rejects negative n', () => {
  assert.throws(() => api.choose(-1, 0), RangeError);
});
