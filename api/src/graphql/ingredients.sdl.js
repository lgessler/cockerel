export const schema = gql`
  type Ingredient {
    id: Int!
    author: User!
    authorId: Int!
    name: String!
    url: String
    description: String
    categories: [IngredientCategory]!
    recipes: [Recipe]!
  }

  type Query {
    ingredients: [Ingredient!]! @requireAuth
    ingredient(id: Int!): Ingredient @requireAuth
  }

  input CreateIngredientInput {
    authorId: Int!
    name: String!
    url: String
    description: String
  }

  input UpdateIngredientInput {
    authorId: Int
    name: String
    url: String
    description: String
  }

  type Mutation {
    createIngredient(input: CreateIngredientInput!): Ingredient! @requireAuth
    updateIngredient(id: Int!, input: UpdateIngredientInput!): Ingredient!
      @requireAuth
    deleteIngredient(id: Int!): Ingredient! @requireAuth
  }
`
