var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-set');

describe('next-treemap', function () {
  it('next-set initial nx.Set && add', function () {
    var s1 = new nx.Set([1,2,3]);
    s1.add(1);

    assert.equal(s1.size, 3);
    assert.deepEqual(s1.toArray(), [2,3,1]);
  });
});
