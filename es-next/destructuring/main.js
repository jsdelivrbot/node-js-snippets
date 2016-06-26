let o = { a: 1, b: 2, c: {}};

const f = ({a = 0, b = 0, c = {x: 1}} = {}) => {
  console.log(a,b,c);
};

// = {} at worst, we have an empty object.

f(o);
f({});
f();
f({a:10, d:20});

/*
1 2 {}
0 0 { x: 1 }
0 0 { x: 1 }
10 0 { x: 1 }
*/