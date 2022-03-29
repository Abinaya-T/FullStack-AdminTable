const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");
const typeDefs = require("./schema/type-defs");
const resolvers = require("./schema/resolvers");

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

module.exports = server;