const GraphQL = require('graphql');
const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} = GraphQL;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    age: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    id: { type: GraphQLString }
  }
})