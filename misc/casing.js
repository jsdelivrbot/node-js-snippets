let text = 'Get the best out of Node.js'
let lower = text.toLowerCase()
let upper = text.toUpperCase()

String.prototype.toTitleCase = function () {
  let arr = String.prototype.split.call(this, ' ')
  let arr2 = arr.map(str => `${str[0].toUpperCase()}${str.substr(1)}`)
  return Array.prototype.join.call(arr2, ' ')
}

let title = text.toTitleCase()

console.log(text)
console.log(lower)
console.log(upper)
console.log(title)
