export const schema = gql`
  type RecipeCategory {
    id: Int!
    name: String!
    recipes: [Recipe]!
  }

  type Query {
    recipeCategories: [RecipeCategory!]! @requireAuth
    recipeCategory(id: Int!): RecipeCategory @requireAuth
  }

  input CreateRecipeCategoryInput {
    name: String!
  }

  input UpdateRecipeCategoryInput {
    name: String
  }

  type Mutation {
    createRecipeCategory(input: CreateRecipeCategoryInput!): RecipeCategory!
      @requireAuth
    updateRecipeCategory(
      id: Int!
      input: UpdateRecipeCategoryInput!
    ): RecipeCategory! @requireAuth
    deleteRecipeCategory(id: Int!): RecipeCategory! @requireAuth
  }
`
