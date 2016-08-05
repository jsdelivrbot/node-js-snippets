'use strict'
function foo(input){
  var i = input;
  function bar(){
    console.log(i); // undefined
    if(input%2 === 0){
      var i = 10;
      // do something with i
    }
  }
  console.log(i); // 5
  bar();
}

foo(5);