var add = require('./util.js');
console.log(add(4,5));

require(['./util-async.js'], function(addAsync){
  console.log(addAsync(1,2));
})


var css = require('style!css!./my.css');
console.log(css);

var $ = require('jquery');

setTimeout(function(){
  $('#h1Txt').css('color', 'red');
}, 10000);