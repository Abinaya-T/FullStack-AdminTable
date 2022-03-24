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
const users = [{
    id: '1',
    firstName: 'Tony',
    lastName: 'Stark'
},
{
    id: '2',
    firstName: 'Bruce',
    lastName: 'Banner'
}]

const getPolicies = () => {
    return Promise.resolve(policies)
}

const getCustomers = () => {
    return Promise.resolve(users)
}

const getPolicyById = ({ Id }) => {
    return Promise.resolve(policy.findAll(p => p.policyNumber === Id));
}

const getCustomerById = ({ customerId }) => {
    return Promise.resolve(customer.findAll(c => c.id === customerId));
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