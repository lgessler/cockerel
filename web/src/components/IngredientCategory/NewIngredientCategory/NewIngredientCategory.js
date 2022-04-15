import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import IngredientCategoryForm from 'src/components/IngredientCategory/IngredientCategoryForm'

const CREATE_INGREDIENT_CATEGORY_MUTATION = gql`
  mutation CreateIngredientCategoryMutation(
    $input: CreateIngredientCategoryInput!
  ) {
    createIngredientCategory(input: $input) {
      id
    }
  }
`

const NewIngredientCategory = () => {
  const [createIngredientCategory, { loading, error }] = useMutation(
    CREATE_INGREDIENT_CATEGORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('IngredientCategory created')
        navigate(routes.ingredientCategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createIngredientCategory({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New IngredientCategory
        </h2>
      </header>
      <div className="rw-segment-main">
        <IngredientCategoryForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewIngredientCategory
