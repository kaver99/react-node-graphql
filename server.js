const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Express-GraphQL Server is running. http://${HOST}:${PORT}`);
})
