const { GraphQLDateTime } = require("graphql-iso-date");

const getPolicyById = ({ Id }) => {
  return Promise.resolve(policy.findAll((p) => p.policyNumber === Id));
};

const getCustomerById = ({ customerId }) => {
  return Promise.resolve(customer.findAll((c) => c.id === customerId));
};

const getPolicies = async (parent, args, context) => {
  const where = args.filter
    ? {
        OR: [
          { insuranceType: { contains: args.filter } },
          { status: { contains: args.filter } },
        ],
      }
    : {};
  const policies = await context.prisma.policy.findMany({
    where,
  });

  return policies;
};

const resolvers = {
  Date: GraphQLDateTime,
  Query: {
    getPolicies,
    allCustomers: async (parent, args, context) => {
      return context.prisma.customer.findMany();
    },
    policy: async (_, { policyNumber }) => getPolicyById({ Id: policyNumber }),
    customer: async (_, { id }) => getCustomerById({ customerId: id }),
  },
};

module.exports = resolvers;
