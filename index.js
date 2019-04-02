// The full resolver function signature contains: (parent, args, context, info) and can return an object or Promise. 

// parent(Object that contains the result returned from the resolver on the parent field)
// args
// context(Object shared by all resolvers)
// info

// ---- Resolver map ----

const schema = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    books: [Book]
  }

  type Query {
    author: Author
  }
`;

const resolvers = {
  Query: {
    author(parent, args, context, info) {
      return find(authors, { id: args.id });
    },
  },
  Author: {
    books(author) {
      return filter(books, { author: author.name });
    },
  },
};


// ---- Context argument ----
// example passing authentication scope.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    authScope: getScope(req.headers.authorization)
  })
});

// resolver
(parent, _, context) => {
  if(context.authScope !== ADMIN) throw AuthenticationError('not admin');
   ... 
}


//  ---- Queries with variables ----
Client 
`mutation HomeQuickAddBook($title: String, $author: String = "Anonymous") {
  addBook(title: $title, author: $author) {
    title
  }
}`