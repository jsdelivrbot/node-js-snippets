import add from './util';

console.log(add(4,5));

require(['./util-async.js'], function(addAsync){
  console.log(addAsync(1,2));
});


var css = require('./my.css');
console.log(css);

import $ from 'jquery';

setTimeout(function(){
  $('#h1Txt').css('color', 'red');
}, 10000);

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById('reactDiv'));