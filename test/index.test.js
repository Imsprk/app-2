const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../index');

test('greet returns message', () => {
  assert.strictEqual(greet('CI'), 'Hello CI from app-2');
});
