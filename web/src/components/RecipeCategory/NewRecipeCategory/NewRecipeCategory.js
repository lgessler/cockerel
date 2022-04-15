import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import RecipeCategoryForm from 'src/components/RecipeCategory/RecipeCategoryForm'

const CREATE_RECIPE_CATEGORY_MUTATION = gql`
  mutation CreateRecipeCategoryMutation($input: CreateRecipeCategoryInput!) {
    createRecipeCategory(input: $input) {
      id
    }
  }
`

const NewRecipeCategory = () => {
  const [createRecipeCategory, { loading, error }] = useMutation(
    CREATE_RECIPE_CATEGORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('RecipeCategory created')
        navigate(routes.recipeCategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createRecipeCategory({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New RecipeCategory</h2>
      </header>
      <div className="rw-segment-main">
        <RecipeCategoryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRecipeCategory
