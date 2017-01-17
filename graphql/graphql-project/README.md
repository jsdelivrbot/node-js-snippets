`yarn init -f`

`yarn add graphql`

`yarn add babel-cli babel-core babel-preset-es2015 --dev`

## in package.json

    "babel": {
        "presets": ["es2015"]
    }

## run graphql cli

`./node_modules/.bin/babel-node index.js`

    ➜  graphql-project ./node_modules/.bin/babel-node index.js
    Client request: { hello }
    Server Anser:  { hello: 'world' }
