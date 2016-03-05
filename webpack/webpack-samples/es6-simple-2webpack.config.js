module.exports = {
  entry: './src/counter.js',
  output: {
    filename: './dist/counter-compiled.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
          }
      }
    ]
  }
};
