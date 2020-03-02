const { createTestClient } = require("apollo-server-testing");
const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("../src/schema");
const staffAPI = require("../src/datasources/staff");
const resolvers = require("../src/resolvers");

test("fetches single staff member", async () => {
  // create a test server to test against the production typeDefs, resolvers, and dataSources.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      staffAPI: new staffAPI()
    }),
    context: () => ({ id: 1 })
  });

  // mock the dataSource's underlying fetch methods
  staffAPI.get = jest.fn(() => [mockLaunchResponse]);

  // use the test server to create a query function
  const { query } = createTestClient(server);

  // create the static query to get a staff member
  const staffQuery = gql`
    {
      staffMember(id: 1) {
        id
        firstName
        lastName
        detail
        timelyId
        preferredName
      }
    }
  `;

  // run query against the server and snapshot the output
  const response = await query({ query: staffQuery, variables: { id: 1 } });
  expect(response).toMatchSnapshot();
});
