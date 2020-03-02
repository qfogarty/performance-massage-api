const {gql} = require('apollo-server');

const typeDefs = gql`
  type StaffMember {
    id: ID!
    firstName: String!
    lastName: String!
    preferredName: String
    dateJoined: String
    detail: String
    photo: String
    timelyId: Int
  }
  type Query {
    staffMembers: [StaffMember]
    staffMember(id: ID): StaffMember
  }
`;

module.exports = typeDefs;
