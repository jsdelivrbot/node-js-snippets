module.exports = {
  entry: './test/test.js',
  target: 'node',
  output: {
    path: '.',
    filename: 'test.bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '.'),
          path.join(__dirname, './test')
        ],
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}