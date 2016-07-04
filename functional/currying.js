let curryable = function(a){
  return function(b){
    return function(c){
      console.log(a,b,c);
    }
  }
};

curryable(1)(2)(3);

var a10b20 = curryable(10)(20);

a10b20(30);
a10b20(40);

let isNumber = function(v, i){
  return i===v;
};

let isNumber2 = function(v){
  return function(i){ return i===v; }
};

var nums = [1,2,3,4,5,6];
var num = nums.filter(x => isNumber(5, x));
var num2 = nums.filter(isNumber2(5));

console.log(num);
console.log(num2);