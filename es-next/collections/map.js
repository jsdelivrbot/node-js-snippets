const map = new Map()
map.set('twitter', 'kimsk')
map.set('gmail', 'karlkim@gmail.com')
console.log(map.size, map.get('twitter'))

// object as a key
let obj = { a: 1 }
map.set(obj, '{ a: 1 }')
console.log(map.get(obj))

// function as a key
let fn = x => x * x
map.set(fn, { x: 2, result: 4 })
for (let entry of map) {
  console.log(entry[0], typeof entry[0])
  if (entry[0] instanceof Function) {
    console.log(entry[0](entry[1].x) === entry[1].result)
  }
}
