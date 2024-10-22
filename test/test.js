const assert = require('assert');
const helloWorld = require('../src/index');

describe('helloWorld', function() {
  it('should return "Hello, world! Next version 1.0.2"', function() {
    assert.strictEqual(helloWorld(), 'Hello, world! Next version 1.0.2');
  });
});
