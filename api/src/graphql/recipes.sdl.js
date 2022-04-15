export const schema = gql`
  type Recipe {
    id: Int!
    author: User!
    authorId: Int!
    name: String!
    shortDescription: String
    description: String
    steps: String
    ingredients: [Ingredient]!
    Tasting: [Tasting]!
    categories: [RecipeCategory]!
  }

  type Query {
    recipes: [Recipe!]! @requireAuth
    recipe(id: Int!): Recipe @requireAuth
  }

  input CreateRecipeInput {
    authorId: Int!
    name: String!
    shortDescription: String
    description: String
    steps: String
  }

  input UpdateRecipeInput {
    authorId: Int
    name: String
    shortDescription: String
    description: String
    steps: String
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe! @requireAuth
    updateRecipe(id: Int!, input: UpdateRecipeInput!): Recipe! @requireAuth
    deleteRecipe(id: Int!): Recipe! @requireAuth
  }
`
