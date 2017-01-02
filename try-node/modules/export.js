console.log('export module loaded')

var z = 10

function add (x, y) {
  return x + y + z
}

module.exports = add
