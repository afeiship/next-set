(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var _ ;
  _ = nx.remove || require('next-remove');

  var NxSet = nx.declare('nx.Set', {
    properties:{
      size: {
        get: function(){
          return this.elements.length;
        }
      }
    },
    methods:{
      init: function(inArray){
        this.elements = inArray || [];
      },
      add: function(inValue){
        if( this.has(inValue) ){
          this.remove(inValue);
        }
        this.elements.push(inValue);
      },
      remove: function(inValue){
        return nx.remove(this.elements, [ inValue ] );
      },
      clear: function(){
        this.elements = [];
      },
      has: function(inValue){
        for (var index = 0; index < this.elements.length; index++) {
          var element = this.elements[index];
          if( inValue === element ){
            return true;
          }
        }
        return false;
      },
      toArray: function(){
        return this.elements;
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSet;
  }

}());
