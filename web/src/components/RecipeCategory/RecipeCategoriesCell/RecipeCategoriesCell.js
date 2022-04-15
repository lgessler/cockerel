import { Link, routes } from '@redwoodjs/router'

import RecipeCategories from 'src/components/RecipeCategory/RecipeCategories'

export const QUERY = gql`
  query FindRecipeCategories {
    recipeCategories {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No recipeCategories yet. '}
      <Link to={routes.newRecipeCategory()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ recipeCategories }) => {
  return <RecipeCategories recipeCategories={recipeCategories} />
}
