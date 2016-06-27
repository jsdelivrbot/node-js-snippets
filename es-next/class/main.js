// ES5 Constructor function
(function(){
  var Parent = function(val){
    this.a = val;
  };

  Parent.prototype.foo = function(){
    console.log(this.a);
  }

  let p = new Parent(10);
  p.foo();

  var Child = function(val1, val2){
    Parent.call(this, val1 + 1);
    this.b = val2;
  }

  Child.prototype = Object.create(Parent.prototype); // or Child.prototype = new Parent();
  Child.prototype.bar = function(){
      console.log(this.a, this.b);
  }

  let c = new Child(10, 'test');
  c.foo();
  c.bar();

})();

// ES2015
(function () {
  class Parent {
    constructor(val) {
      this.a = val;
    }

    foo() {
      console.log(this.a);
    }
  }

  class Child extends Parent {
    constructor(val1, val2) {
      super(val1 + 1);
      this.b = val2;
    }

    bar() {
      console.log(this.a, this.b);
    }
  }

  let p = new Parent(10);
  p.foo();
  let c = new Child(10, 'test');
  c.foo();
  c.bar();
})();