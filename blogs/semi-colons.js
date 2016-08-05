var fun = function(input){
  input = input || 0
  return input
} // no semi-colons

(function(){
  var var12345 = 10
  var var23456 = 10
  var var34567
  var34567 =  var12345 + var23456
  console.log(var34567)
  return var34567
})

console.log(fun()); // actual 20, expect 0

// ./node_modules/.bin/babel semi-colons.js
// ./node_modules/.bin/uglifyjs  semi-colons.js -m -c