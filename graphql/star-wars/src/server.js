import express from 'express';
import graphqlHTTP from 'express-graphql';
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLUnionType,
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

var app = express();
app.use(express.static(__dirname));
app.use('/graphql', graphqlHTTP(() => ({
  schema: schema,
  pretty: true
})));
app.listen(8080);
console.log('Started on http://localhost:8080/');

// data, userType, and schema from http://graphql.org/docs/getting-started/
var data = {
  1: {
    "id": 1,
    "name": "Dan"
  },
  2: {
    "id": 2,
    "name": "Lee"
  },
  3: {
    "id": 3,
    "name": "Nick"
  }
};

/*

type User {
   id: int
   name: string
}

*/

var userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  }
});

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
      user: {
        type: userType,
        args: {
            id: { type: GraphQLInt }
        },
        resolve: function (_, args) {
          return data[args.id];
        }
      }
  }
});

var schema = new GraphQLSchema({
  query: queryType
});
