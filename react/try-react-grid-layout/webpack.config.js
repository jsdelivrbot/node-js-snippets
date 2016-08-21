var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new WebpackBuildNotifierPlugin()
  ],
  module:{
    loaders: [
      { test: /\.css$/, loaders: ["style", "css?sourceMap"] },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};