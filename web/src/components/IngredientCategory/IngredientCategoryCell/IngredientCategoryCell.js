import IngredientCategory from 'src/components/IngredientCategory/IngredientCategory'

export const QUERY = gql`
  query FindIngredientCategoryById($id: Int!) {
    ingredientCategory: ingredientCategory(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>IngredientCategory not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ ingredientCategory }) => {
  return <IngredientCategory ingredientCategory={ingredientCategory} />
}
