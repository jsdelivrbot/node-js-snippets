module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/main-compiled.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'stage-0']
          }
      }
    ]
  }
};
