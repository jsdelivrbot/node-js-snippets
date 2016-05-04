module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module:{
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