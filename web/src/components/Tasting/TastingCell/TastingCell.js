import Tasting from 'src/components/Tasting/Tasting'

export const QUERY = gql`
  query FindTastingById($id: Int!) {
    tasting: tasting(id: $id) {
      id
      createdAt
      authorId
      recipeId
      mixerId
      decistars
      comments
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tasting not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tasting }) => {
  return <Tasting tasting={tasting} />
}
