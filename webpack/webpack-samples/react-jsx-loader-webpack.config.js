module.exports = {
  entry: '../main.js',
  output: {
    filename: '../build/bundle.js'
  },
  module: {
    loaders: [
      {
        //tell webpack to use jsx-loader for all *.jsx files
        test: /\.js$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      }
    ]
  }
};