const { GraphQLDateTime } = require('graphql-iso-date') 
const policies = [{
    customer: '1',
    insuranceType: 'Health',
    status: 'Active',
    policyNumber: '123',
    crearedAt: '2022-03-24'
},
{
    customer: '2',
    insuranceType: 'Liability',
    status: 'Active',
    policyNumber: '113',
    crearedAt: '2022-03-24'
}]


const getPolicies = () => {
    return Promise.resolve(policies)
}


const getPolicyById = ({ Id }) => {
    return Promise.resolve(policy.findAll(p => p.policyNumber === Id));
}

const getCustomerById = ({ customerId }) => {
    return Promise.resolve(customer.findAll(c => c.id === customerId));
  }

const resolvers = {
    Date: GraphQLDateTime,
    Query: {
      allPolicies: async () => getPolicies,
      allCustomers: async (parent, args, context) => {
          return context.prisma.customer.findMany()
      },
      policy: async(_, { policyNumber }) => getPolicyById({Id: policyNumber}),
      customer: async(_, { id }) => getCustomerById({customerId: id})
        }
  } ;

  module.exports = resolvers