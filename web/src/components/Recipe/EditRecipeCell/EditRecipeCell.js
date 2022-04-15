import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import RecipeForm from 'src/components/Recipe/RecipeForm'

export const QUERY = gql`
  query EditRecipeById($id: Int!) {
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
const UPDATE_RECIPE_MUTATION = gql`
  mutation UpdateRecipeMutation($id: Int!, $input: UpdateRecipeInput!) {
    updateRecipe(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ recipe }) => {
  const [updateRecipe, { loading, error }] = useMutation(
    UPDATE_RECIPE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Recipe updated')
        navigate(routes.recipes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
    })
    updateRecipe({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Recipe {recipe.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RecipeForm
          recipe={recipe}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
