let wm = new WeakMap();

let o1 = {}, o2 = { key: 1};
wm.set(o1, 1);
wm.set(o2, 1);

console.log(wm.has(o1));
console.log(wm.has(o2));
console.log(wm.has({}));
