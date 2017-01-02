var babel = require('babel-core')
var options = {
  'presets': [
    'es2015',
    'stage-0'
  ]
}

var result = babel.transform('(x) => x * x', options)
console.log(Object.keys(result))
console.log(result.code)
console.log(result.ast)
