const GraphQL = require('graphql');
const axios = require('axios');
const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = GraphQL;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    age: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    id: { type: GraphQLString }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(response => response.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});