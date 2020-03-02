const {ApolloServer} = require('apollo-server');
const typeDefs       = require('./schema');
const staffAPI       = require('./datasources/staff');
const resolvers      = require('./resolvers');

const server = new ApolloServer({
  typeDefs, resolvers, dataSources: () => ({
    staffAPI: new staffAPI()
  })
});

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
