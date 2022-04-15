import Recipe from 'src/components/Recipe/Recipe'

export const QUERY = gql`
  query FindRecipeById($id: Int!) {
    recipe: recipe(id: $id) {
      id
      authorId
      name
      shortDescription
      description
      steps
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Recipe not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ recipe }) => {
  return <Recipe recipe={recipe} />
}
