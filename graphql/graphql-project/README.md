`yarn init -f`

`yarn add graphql`

`yarn add babel-cli babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 --dev`

## React

`yarn add react react-dom`

## in package.json

    "babel": {
        "presets": ["es2015"]
    }

## run graphql cli

`./node_modules/.bin/babel-node index.js`

    ➜  graphql-project ./node_modules/.bin/babel-node index.js
    Client request: { hello }
    Server Anser:  { hello: 'world' }


## graphiQL samples

#### query
    query A($showHello: Boolean!, $count:Int!) {
        hello @include (if:$showHello)
        diceRoll(count:$count)
        usersCount
    }

#### query variables
    {
        "showHello": true,
        "count": 10
    }

#### Introspective

    query TypeFields {
        __type(name: "RootQuery") {
            fields {
            name
            type {
                kind

            }
            args {
                name
                description
                defaultValue
            }
            }
        }
    }

#### Schema Query

    query IntrospectiveQuery {
        __schema {
            queryType { name }
            mutationType { name }
            directives {
            name
            description
            args {
                ...InputValue
            }
            }
        }
    }

    fragment InputValue on __InputValue {
        name
        description
    }
