const { gql } = require("apollo-server");

const typeDefs = gql`

  scalar Date

  type Query {
    getPolicies(filter: String): [Policy!]!
    allCustomers: [Customer]!
    policy(policyNumber: String!): Policy
    customer(id: ID!): Customer
  }

  type Customer {
    id: ID!
    firstName: String
    lastName: String
    dateOfBirth: Date
  }

  type Policy {
    customer: Customer!
    provider: String
    insuranceType: String
    status: String
    policyNumber: String!
    startDate: Date
    endDate: Date
    createdAt: Date!
  }

  enum InsuranceType {
    LIABILITY
    HEALTH
    HOUSEHOLD
  }

  enum PolicyStatus {
    ACTIVE
    PENDING
    CANCELLED
    DROPPEDOUT
  }

`;

module.exports = typeDefs;
