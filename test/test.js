const assert = require('assert');
const helloWorld = require('../src/index');

describe('helloWorld', function() {
  it('should return "Hello, world!"', function() {
    assert.strictEqual(helloWorld(), 'Hello, world!');
  });
});
