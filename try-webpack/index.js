var add = require('./util.js');
console.log(add(4,5));

require(['./util-async.js'], function(addAsync){
  console.log(addAsync(1,2));
})