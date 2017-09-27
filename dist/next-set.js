(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var _;
  _ = nx.remove || require('next-remove');
  _ = nx.unique || require('next-unique');

  var NxSet = nx.declare('nx.Set', {
    properties: {
      size: {
        get: function () {
          return this.elements.length;
        }
      }
    },
    methods: {
      init: function (inArray) {
        this.elements = nx.unique(inArray) || [];
      },
      add: function (inValue) {
        if (this.has(inValue)) {
          this.remove(inValue);
        }
        this.elements.push(inValue);
      },
      addAll: function (inItems) {
        var result = this.elements.concat(inItems);
        this.elements = nx.unique(result);
      },
      remove: function (inValue) {
        return nx.remove(this.elements, [inValue]);
      },
      removeAll: function (inItems) {
        return nx.remove(this.elements, inItems);
      },
      clear: function () {
        this.elements = [];
      },
      has: function (inValue) {
        for (var index = 0; index < this.elements.length; index++) {
          var element = this.elements[index];
          if (inValue === element) {
            return true;
          }
        }
        return false;
      },
      toArray: function () {
        return this.elements;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSet;
  }

}());
