const { GraphQLDateTime } = require('graphql-iso-date') 
const policies = []
const users = []

const getPolicies = () => {
    return Promise.resolve(policies)
}

const getCustomers = () => {
    return Promise.resolve(users)
}

const getPolicyById = ({ Id }) => {
    return Promise.resolve(policy.find(p => p.policyNumber === Id));
}

const getCustomerById = ({ customerId }) => {
    return Promise.resolve(customer.find(c => c.id === customerId));
  }

module.exports = {
    Date: GraphQLDateTime,
    Query: {
      allPolicies: async () => getPolicies,
      allCustomers: async () => getCustomers,
      policy: async(_, { policyNumber }) => getPolicyById({Id: policyNumber}),
      customer: async(_, { id }) => getCustomerById({customerId: id})
        }
  } ;