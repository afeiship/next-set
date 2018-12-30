(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxMapMap = nx.mapMap || require('next-map-map');

  var NxSet = nx.declare('nx.Set', {
    methods: {
      init: function(inItems) {
        this.map = this._genMap(inItems);
      },
      has: function(inValue) {
        return inValue in this.map;
      },
      add: function(inValue) {
        this.map[inValue] = inValue;
      },
      delete: function(inValue) {
        if (this.has(inValue)) {
          delete this.map[inValue];
          return true;
        }
        return false;
      },
      clear: function() {
        this.map = {};
      },
      _genMap: function(inItems) {
        return nxMapMap(inItems, function(_, value) {
          return {
            key: value,
            value: value
          };
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSet;
  }
})();
