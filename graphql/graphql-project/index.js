import assert from 'assert'
import { graphql } from 'graphql'
import graphqlHTTP from 'express-graphql'

import express from 'express'
const app = express()

import { MongoClient } from 'mongodb'
const MONGO_URL = 'mongodb://localhost:27017/test'

import mySchema from './schema/main'

app.use(express.static('public'))

MongoClient.connect(MONGO_URL, (err, db) => {
  assert.equal(null, err)
  console.log('Connected to MongoDB server')

  app.use('/graphql', graphqlHTTP({
    schema: mySchema,
    context: { db },
    graphiql: true
  }))

  app.listen(3000, () => {
    console.log('Running express.js on port 3000')
  })
})

