import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import IngredientCategoryForm from 'src/components/IngredientCategory/IngredientCategoryForm'

export const QUERY = gql`
  query EditIngredientCategoryById($id: Int!) {
    ingredientCategory: ingredientCategory(id: $id) {
      id
      name
    }
  }
`
const UPDATE_INGREDIENT_CATEGORY_MUTATION = gql`
  mutation UpdateIngredientCategoryMutation(
    $id: Int!
    $input: UpdateIngredientCategoryInput!
  ) {
    updateIngredientCategory(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ ingredientCategory }) => {
  const [updateIngredientCategory, { loading, error }] = useMutation(
    UPDATE_INGREDIENT_CATEGORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('IngredientCategory updated')
        navigate(routes.ingredientCategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateIngredientCategory({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit IngredientCategory {ingredientCategory.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <IngredientCategoryForm
          ingredientCategory={ingredientCategory}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
