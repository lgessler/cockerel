import RecipeCategory from 'src/components/RecipeCategory/RecipeCategory'

export const QUERY = gql`
  query FindRecipeCategoryById($id: Int!) {
    recipeCategory: recipeCategory(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>RecipeCategory not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ recipeCategory }) => {
  return <RecipeCategory recipeCategory={recipeCategory} />
}
