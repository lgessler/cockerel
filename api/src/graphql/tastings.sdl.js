export const schema = gql`
  type Tasting {
    id: Int!
    createdAt: DateTime!
    author: User!
    authorId: Int!
    recipe: Recipe!
    recipeId: Int!
    mixer: Mixer!
    mixerId: Int!
    decistars: Int!
    comments: String
  }

  type Query {
    tastings: [Tasting!]! @requireAuth
    tasting(id: Int!): Tasting @requireAuth
  }

  input CreateTastingInput {
    authorId: Int!
    recipeId: Int!
    mixerId: Int!
    decistars: Int!
    comments: String
  }

  input UpdateTastingInput {
    authorId: Int
    recipeId: Int
    mixerId: Int
    decistars: Int
    comments: String
  }

  type Mutation {
    createTasting(input: CreateTastingInput!): Tasting! @requireAuth
    updateTasting(id: Int!, input: UpdateTastingInput!): Tasting! @requireAuth
    deleteTasting(id: Int!): Tasting! @requireAuth
  }
`
