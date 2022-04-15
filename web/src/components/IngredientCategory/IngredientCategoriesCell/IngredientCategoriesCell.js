import { Link, routes } from '@redwoodjs/router'

import IngredientCategories from 'src/components/IngredientCategory/IngredientCategories'

export const QUERY = gql`
  query FindIngredientCategories {
    ingredientCategories {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No ingredientCategories yet. '}
      <Link to={routes.newIngredientCategory()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ ingredientCategories }) => {
  return <IngredientCategories ingredientCategories={ingredientCategories} />
}
