const { ApolloServer, gql, MockList} = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
    resolved: String
    people: [Person]
  },
  
  type Person {
    name: String
    age: Int
  }
`;

// const resolvers = {
//   Query: {
//     resolved: () => 'Resolved',
//   },
// };

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'Hello',
  Query: () =>({
    people: () => new MockList([0, 12]),
  }),
};

const server = new ApolloServer({
  typeDefs,
  // resolvers,
  mocks
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});