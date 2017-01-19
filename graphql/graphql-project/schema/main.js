import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql'

const QuoteType = new GraphQLObjectType({
  name: 'Quote',
  fields: {
    id: {
      type: GraphQLString,
      resolve: obj => obj._id
    },
    text: {
      type: GraphQLString
    },
    author: { type: GraphQLString }
  }
})

const queryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    allQuotes: {
      type: new GraphQLList(QuoteType),
      description: 'A list of the quotes in the db',
      resolve: (_, args, { db }) => db.collection('quotes').find().toArray()
    }
  }
})

const mySchema = new GraphQLSchema({
  query: queryType
})

export default mySchema
