import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
var app = express();
app.use(express.static(__dirname));
app.use('/graphql', graphqlHTTP(() => ({
  schema: schema,
  pretty: true
})));
app.listen(8080);
console.log('Started on http://localhost:8080/');
