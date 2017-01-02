console.log(require.cache)
var imp = require('./import')
console.log(require.cache)
var add = require('./export') // get from require.cache
console.log(require.cache)
var test = require('./export-2').test
var ok = require('./export-2').ok
console.log(test, ok)
console.log(add(10, 10))
