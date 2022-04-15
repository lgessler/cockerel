import { Link, routes } from '@redwoodjs/router'

import Ingredients from 'src/components/Ingredient/Ingredients'

export const QUERY = gql`
  query FindIngredients {
    ingredients {
      id
      authorId
      name
      url
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No ingredients yet. '}
      <Link to={routes.newIngredient()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ ingredients }) => {
  return <Ingredients ingredients={ingredients} />
}
