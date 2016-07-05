(function () {
  function foo(a) {
    var b = a + 10;
    function bar() {
      console.log(b, global.b);
      var b = 10; // b is hoisted and shadows b in outerscope foo
      console.log(b);
    }

    bar();
  }
  b = 1; // global b
  foo(10);
})();

// modify lexical scope using eval (not work in strict mode)
// eval and Function are bad for performance
(function () {
  function foo(str, bValue, a, cheat) {
    if(cheat){
      eval(str + bValue);
    }
    console.log(a, b);
  }

  var b = 2;

  foo("var b = ", 10, 1, true); // 1, 10
  foo("var b = ", 0, 1, false); // 1, 2
})();

(function foo(txt){
  console.log(txt);
})('foo');
// foo() is not in global scope

(function tryCatch(){
  try{
    undefined();
  }
  catch (err){
    var a = 9;
    console.log(err, a);
  }

  console.log(a); // a exists!!
  //console.log(err);
})();