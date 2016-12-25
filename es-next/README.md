[ECMAScript 6 compatibility table](https://kangax.github.io/compat-table/es6/)


`npm init`

`npm install babel-core babel-preset-es2015 babel-preset-stage-0 babel-cli nodemon --save-dev`

### In `package.json`

```json
"babel": {
    "presets": ["es2015", "stage-0"]
  }
```

`./node_modules/.bin/babel-node ./<folder>/main.js`
