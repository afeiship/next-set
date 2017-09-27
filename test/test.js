var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-set');

describe('next-treemap', function () {

  it('next-set initial', function () {
    var s1 = new nx.Set([1,2,1]);

    assert.equal(s1.size, 2);
    assert.deepEqual(s1.toArray(), [1,2]);
  });


  it('next-set add', function () {
    var s1 = new nx.Set([1,2,1]);
    s1.add(5);
    s1.add(6);

    assert.equal(s1.size, 4);
    assert.deepEqual(s1.toArray(), [1,2,5,6]);
  });


});
