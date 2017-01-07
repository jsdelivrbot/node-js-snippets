let o = { a: 1, b: 2, c: 10 }
let o2 = Object.assign({}, o, { c: 3 })
console.log(o, o2)
// { a: 1, b: 2, c: 10 } { a: 1, b: 2, c: 3 }

let o3 = { ...o, c: 3 }
console.log(o, o3)
// { a: 1, b: 2 } { a: 1, b: 2, c: 3 }

// ES7
let a = { a: 1, b: 2 }
let b = { b: 3, c: 3 }
console.log({...a, ...b, c: 4, ...{x: 10, y: 12}})
// {a: 1, b: 3, c: 4, x: 10, y: 12}

// ES6
let x = [1, 2, 3]
let y = [3, 4, 5]
console.log([...x, ...y, 10, x.slice(2)])
// [1, 2, 3, 3, 4, 5, 10, [3]]
