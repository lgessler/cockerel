import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import RecipeCategoryForm from 'src/components/RecipeCategory/RecipeCategoryForm'

export const QUERY = gql`
  query EditRecipeCategoryById($id: Int!) {
    recipeCategory: recipeCategory(id: $id) {
      id
      name
    }
  }
`
const UPDATE_RECIPE_CATEGORY_MUTATION = gql`
  mutation UpdateRecipeCategoryMutation(
    $id: Int!
    $input: UpdateRecipeCategoryInput!
  ) {
    updateRecipeCategory(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ recipeCategory }) => {
  const [updateRecipeCategory, { loading, error }] = useMutation(
    UPDATE_RECIPE_CATEGORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('RecipeCategory updated')
        navigate(routes.recipeCategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateRecipeCategory({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit RecipeCategory {recipeCategory.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RecipeCategoryForm
          recipeCategory={recipeCategory}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
