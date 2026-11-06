import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('formats seconds', () => {
  assert.equal(api.formatIsoDuration(65), 'PT1M5S');
});
test('formats hours', () => {
  assert.equal(api.formatIsoDuration(3600), 'PT1H');
});
test('formats day duration', () => {
  assert.equal(api.formatIsoDuration(86400), 'P1D');
});
test('formats mixed duration', () => {
  assert.equal(api.formatIsoDuration(90061), 'P1DT1H1M1S');
});
test('formats zero', () => {
  assert.equal(api.formatIsoDuration(0), 'PT0S');
});
test('rejects fraction', () => {
  assert.throws(() => api.formatIsoDuration(1.5), RangeError);
});
