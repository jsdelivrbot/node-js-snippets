var arr = [1,2,3];

// ES5
var foo = function(a,b,c){
  console.log(a,b,c);
}

foo.apply(null, arr);

// ES2015
var bar = function(...rest){
  console.log(rest);
}

bar(...arr);