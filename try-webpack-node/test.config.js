var path = require('path');

module.exports = {
  entry: './test/test.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'test.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}