const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../index');

test('greet returns message', () => {
  assert.strictEqual(greet('CI'), 'Hello CI from app-2');
});

test('farewell returns message', () => {
  const { farewell } = require('../index');
  assert.strictEqual(farewell('CI'), 'Bye CI from app-2');
});
