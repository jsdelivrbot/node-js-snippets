import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql'

// This is perfect for Quote react component
const QuoteType = new GraphQLObjectType({
  name: 'Quote',
  fields: {
    id: {
      type: GraphQLString,
      resolve: obj => obj._id
    },
    text: {
      type: GraphQLString,
      resolve: obj => obj.text // this line can be omitted (same name)
    },
    author: {
      type: GraphQLString
    }
  }
})

const QuotesLibraryType = new GraphQLObjectType({
  name: 'QuotesLibrary',
  fields: {
    allQuotes: {
      type: new GraphQLList(QuoteType),
      description: 'A list of thr quotes in the database',
      resolve: (_, args, { db }) => db.collection('quotes').find().toArray()
    }
  }
})

const quotesLibrary = {}

const queryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    quotesLibrary: {
      type: QuotesLibraryType,
      description: 'The Quotes Library',
      resolve: () => quotesLibrary
    }
  }
})

const mySchema = new GraphQLSchema({
  query: queryType
})

export default mySchema
