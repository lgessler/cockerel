export const schema = gql`
  type IngredientCategory {
    id: Int!
    name: String!
    ingredients: [Ingredient]!
  }

  type Query {
    ingredientCategories: [IngredientCategory!]! @requireAuth
    ingredientCategory(id: Int!): IngredientCategory @requireAuth
  }

  input CreateIngredientCategoryInput {
    name: String!
  }

  input UpdateIngredientCategoryInput {
    name: String
  }

  type Mutation {
    createIngredientCategory(
      input: CreateIngredientCategoryInput!
    ): IngredientCategory! @requireAuth
    updateIngredientCategory(
      id: Int!
      input: UpdateIngredientCategoryInput!
    ): IngredientCategory! @requireAuth
    deleteIngredientCategory(id: Int!): IngredientCategory! @requireAuth
  }
`
