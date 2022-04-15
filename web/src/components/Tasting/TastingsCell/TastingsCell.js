import { Link, routes } from '@redwoodjs/router'

import Tastings from 'src/components/Tasting/Tastings'

export const QUERY = gql`
  query FindTastings {
    tastings {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tastings yet. '}
      <Link to={routes.newTasting()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tastings }) => {
  return <Tastings tastings={tastings} />
}
