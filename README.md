### yarn
    yarn init -f

### ES2015
    yarn add babel-cli babel-core babel-loader babel-preset-es2015 --dev

### Stage 0
    babel-preset-stage-0 --dev

### React
    babel-preset-react --dev
    react react-dom
## in package.json

    "babel": {
        "presets": ["es2015", "stage-0", "react"]
    }

### use babel-node

    ./node_modules/.bin/babel-node --presets es2015,stage-0

### webpack.config.json

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
              presets: ['react', 'es2015', 'stage-0']
            }
          }
        ]
      }
    };