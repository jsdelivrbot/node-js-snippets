import assert from 'assert'

import fs from 'fs'
import path from 'path'

import { graphql } from 'graphql'
import graphqlHTTP from 'express-graphql'
import { introspectionQuery } from 'graphql/utilities'

import express from 'express'
const app = express()

import { MongoClient } from 'mongodb'
const MONGO_URL = 'mongodb://localhost:27017/test'

import mySchema from './schema/main'

graphql(mySchema, introspectionQuery)
  .then(result => {
    fs.writeFileSync(path.join(__dirname, 'cache/schema.json'),
    JSON.stringify(result, null, 2))
    console.log('Generated cached schema.json file')
  }).catch(console.error)

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

