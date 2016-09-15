// without semicolon, fun is executed (iffy)
// with the value in parenthesis

var fun = function(input){
  input = input || 0
  return input
} // no semicolon

(function(){
  var var12345 = 10
  var var23456 = 10
  var var34567
  var34567 =  var12345 + var23456
  return var34567
})

console.log(fun()); // actual 20, expect 0

var fun2 = function(x){
  return x;
}
(9)

console.log(fun2); // 20
console.log(fun2()); // ERROR: fun2 is not a function

a = 10 + 1
(5 + 2) // ERROR: 1 is not a function


// How babel and uglifyjs works
// ./node_modules/.bin/babel semicolons.js
// ./node_modules/.bin/uglifyjs  semicolons.js -m -c