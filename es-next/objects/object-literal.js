let obj = {
  square (x) {
    return x * x
  }
}
console.log(obj.square(2)) // 4

const x = 10
const y = 20
const o = {
  x,
  y,
  ['test' + x]: x * 100,
  get xy () {
    return [this.x, this.y]
  },
  set xy (xy) {
    this.x = xy / 3
    this.y = xy * 2 / 3
  }
}
console.log(o, o.xy)
// { x: 10, y: 20, test10: 1000, xy: [Getter/Setter] } [ 10, 20 ]

o.xy = 90
console.log(o.x, o.y, o.xy)
// 30 60 [ 30, 60 ]
