var nx = require('next-js-core2');
var NxSet = require('../src/next-set');

test('NxSet.methods', function() {
  // var s1 = new NxSet([1, 2, 3, 3, 4]);

  var colors = [
    'navy',
    'olive',
    'orange',
    'silver',
    'white',
    'gold',
    'lime',
    'fuchsia',
    'aqua',
    'green',
    'gray',
    'red',
    'blue',
    'pink',
    'purple',
    'yellow',
    'maroon',
    'black',
    'azure',
    'beige',
    'brown',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgrey',
    'darkgreen',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkviolet',
    'indigo',
    'khaki',
    'lightblue',
    'lightcyan',
    'lightgreen',
    'lightgrey',
    'lightpink',
    'lightyellow',
    'magenta',
    'violet'
  ];

  var s1 = new Set(colors);
  console.log(s1);
});
