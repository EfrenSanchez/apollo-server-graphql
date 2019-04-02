// Scalar types represent the leaves of an operation and always resolve to concrete data. 
// - Int: Signed 32‐bit integer
// - Float: Signed double-precision floating-point value
// - String: UTF‐8 character sequence
// - Boolean: true or false
// - ID (serialized as String): A unique identifier, often used to refetch an object or as the key for a cache.


gql`
  # ---- Object type ----
  type Book {
    title: String
    author: String
  }

  # ---- Query type ----
  type Query {
    books: [Book]
  }

  # ---- Mutation type ----
  type Mutation {
    addBook(title: String, author: String): Book
  }

  # ---- Response type ----
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type UpdateBookMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    book: Book
  }

  # ---- Input Type ----
  # type Mutation {
  #   createPost(title: String, body: String, mediaUrls: [String]): Post
  # }

  type Mutation {
    createPost(post: PostAndMediaInput): Post
  }
  
  input PostAndMediaInput {
    title: String
    body: String
    mediaUrls: [String]
  }
`;

