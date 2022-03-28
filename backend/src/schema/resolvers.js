const { GraphQLDateTime } = require("graphql-iso-date");

// const getPolicyById = ({ Id }) => {
//   return Promise.resolve(policy.findAll((p) => p.policyNumber === Id));
// };

// const getCustomerById = ({ customerId }) => {
//   return Promise.resolve(customer.findAll((c) => c.id === customerId));
// };

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

const Policy =  {
  customer: (parent, args, context) => {
    return context.prisma.customer.findUnique({
      where: {id: parent.CustomerId},
    })
  }
}


const resolvers = {
  Date: GraphQLDateTime,
  Query: {
    getPolicies
  },
  Policy,
}


module.exports = resolvers;
