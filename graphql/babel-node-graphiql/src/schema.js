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

import data from './data';

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
  name: 'Querrry',
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

export {schema as default};
