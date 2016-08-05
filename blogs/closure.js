var x = 10;
var f1 = f(x);
x = 11;
var f2 = f(x);


function f(s){
  return function(t){
    // s is fixed and x is referenced
    console.log('s:',s, ' t: ', t, ' x: ', x);
  };
}

f1(1);
f2(1);
x = 12; // closure change
f1(1);