const { createTestClient } = require("apollo-server-testing");
const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("../src/schema/type-defs")
const resolvers = require("../src/schema/resolvers")

var context = { getPolicies: {
    customer: {
      id: "1",
      firstName: "Tony",
      lastName: "Stark"
    },
    status: "Active",
    policyNumber: "100",
    provider: "Bajaj",
    insuranceType: "Liability",
    startDate: "2022-02-21T00:00:00.000Z",
    endDate: "2024-02-21T00:00:00.000Z"
  } }


test('read a list of all policies', async () => {

    const server = new ApolloServer({typeDefs, resolvers, context: () => (context)})
    console.log(server)
    const { query } = createTestClient(server);

    const GET_POLICIES = gql`
  {
    getPolicies {
        policyNumber
        status
    }
  }
  `;

  const response = await query({ query: GET_POLICIES });
  console.log(response)
  expect(response.data.getPolicies).toHaveProperty('policyNumber')
  expect(response.data.getPolicies).toHaveProperty('status')
  expect(response.data.getPolicies).toEqual([{ policyNumber: '100', status:'Active' }]);

});

