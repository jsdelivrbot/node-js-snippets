let o = { a: 1, b: 2};
let o2 = Object.assign({}, o, { c: 3 });

console.log(o, o2);

let o3 = { ...o, c: 3 };

console.log(o, o3);
