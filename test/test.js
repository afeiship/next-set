var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-set');

describe('next-treemap', function () {

  it('next-set initial', function () {
    var s1 = new nx.Set([1,2,1]);

    assert.equal(s1.length, 2);
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

    assert.equal(s1.length, 4);
    assert.deepEqual(s1.toArray(), [1,2,5,6]);
  });

  it('next-set addAll', function () {
    var s1 = new nx.Set([1,2,3]);
    s1.addAll([2,3,4]);

    assert.equal(s1.length, 4);
    assert.deepEqual(s1.toArray(), [1,2,3,4]);
  });

  it('next-set remove', function () {
    var s1 = new nx.Set([1,2,3,2]);
    s1.remove(2);

    assert.equal(s1.length, 2);
    assert.deepEqual(s1.toArray(), [1,3]);
  });


  it('next-set removeAll', function () {
    var s1 = new nx.Set([1,2,3,2]);

    s1.removeAll([1,2]);
    assert.equal(s1.length, 1);
    assert.deepEqual(s1.toArray(), [ 3 ]);
  });


  it('next-set union', function () {
    var a1 = [1,2,3];
    var a2 = [2,4,5];
    var sU = new nx.Set(a1.concat(a2));
    var res = sU.toArray();
    assert.equal(res.length, 5);
    assert.deepEqual(res, [1,2,3,4,5]);
  });


  it('next-set intersect ', function () {
    var a1 = new nx.Set([1,2,3,2,1]);
    var a2 = new nx.Set([2,4,5,1]);
    var res = new nx.Set(
      a1.toArray().filter(item=>{
        return a2.has(item);
      })
    );
    var res2 = res.toArray();

    assert.equal(res2.length, 2);
    assert.deepEqual(res2, [1,2]);
  });


  it('next-set difference [A-B = A - (AxB)]', function () {
    var a1 = new nx.Set([1,2,3,4]);
    var a2 = new nx.Set([2,3,4,5,6]);
    var res1 = new nx.Set(
      a1.toArray().filter(item => {
        return !a2.has(item);
      })
    );
    var res2 = res1.toArray();
    assert.equal(res2.length, 1);
    assert.deepEqual(res2, [1]);
  });


});
