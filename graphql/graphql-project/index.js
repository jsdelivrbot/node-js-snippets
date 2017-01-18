import { graphql } from 'graphql'

import { MongoClient } from 'mongodb'
import assert from 'assert'

const MONGO_URL = 'mongodb://localhost:27017/test'

import readline from 'readline'

import mySchema from './schema/main'

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

MongoClient.connect(MONGO_URL, (err, db) => {
  assert.equal(null, err)
  console.log('Connected to MongoDB server')

  rli.question('Client request: ', inputQuery => {
    graphql(mySchema, inputQuery, {}, { db }).then(result => {
      console.log('Server Answer: ', result.data)
      db.close(() => rli.close())
    })

    rli.close()
  })
})

