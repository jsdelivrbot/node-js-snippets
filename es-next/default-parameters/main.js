// ES5
var foo = function(a, b){
  var a = a || 0;
  var b = b || 'foo';
  console.log(a,b);
};

foo();
foo(10,'bar');

// ES2015
var bar = function(a = 0, b = 'fooo'){
  console.log(a,b);
}

bar();
bar(11,'barr');


