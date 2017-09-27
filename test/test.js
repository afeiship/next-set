var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-set');

describe('next-treemap', function () {

  it('next-set initial', function () {
    var s1 = new nx.Set([1,2,1]);

    assert.equal(s1.size, 2);
    assert.deepEqual(s1.toArray(), [1,2]);
  });

  it('next-set has', function () {
    var s1 = new nx.Set([1,2,1]);

    assert.equal(s1.has(1), true);
    assert.equal(s1.has(2), true);
    assert.equal(s1.has(3), false);
  });


  it('next-set add', function () {
    var s1 = new nx.Set([1,2,1]);
    s1.add(5);
    s1.add(6);

    assert.equal(s1.size, 4);
    assert.deepEqual(s1.toArray(), [1,2,5,6]);
  });

  it('next-set addAll', function () {
    var s1 = new nx.Set([1,2,3]);
    s1.addAll([2,3,4]);

    assert.equal(s1.size, 4);
    assert.deepEqual(s1.toArray(), [1,2,3,4]);
  });



  it('next-set remove', function () {
    var s1 = new nx.Set([1,2,3,2]);
    s1.remove(2);

    assert.equal(s1.size, 2);
    assert.deepEqual(s1.toArray(), [1,3]);
  });


  it('next-set removeAll', function () {
    var s1 = new nx.Set([1,2,3,2]);

    s1.removeAll([1,2]);
    assert.equal(s1.size, 1);
    assert.deepEqual(s1.toArray(), [ 3 ]);
  });


});
