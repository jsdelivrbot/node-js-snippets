#!/bin/bash
npm init --force

npm install babel-loader babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-0 webpack --save-dev

npm install react react-dom --save

npm install babel-cli nodemon --save-dev


echo "module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module:{
    loaders: [
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
};" > webpack.config.js

mkdir js
touch ./js/app.js
