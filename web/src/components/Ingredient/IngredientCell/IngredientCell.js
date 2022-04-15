import Ingredient from 'src/components/Ingredient/Ingredient'

export const QUERY = gql`
  query FindIngredientById($id: Int!) {
    ingredient: ingredient(id: $id) {
      id
      authorId
      name
      url
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Ingredient not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ ingredient }) => {
  return <Ingredient ingredient={ingredient} />
}
