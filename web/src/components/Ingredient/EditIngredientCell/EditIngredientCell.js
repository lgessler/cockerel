import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import IngredientForm from 'src/components/Ingredient/IngredientForm'

export const QUERY = gql`
  query EditIngredientById($id: Int!) {
    ingredient: ingredient(id: $id) {
      id
      authorId
      name
      url
      description
    }
  }
`
const UPDATE_INGREDIENT_MUTATION = gql`
  mutation UpdateIngredientMutation($id: Int!, $input: UpdateIngredientInput!) {
    updateIngredient(id: $id, input: $input) {
      id
      authorId
      name
      url
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ ingredient }) => {
  const [updateIngredient, { loading, error }] = useMutation(
    UPDATE_INGREDIENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Ingredient updated')
        navigate(routes.ingredients())
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
    updateIngredient({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Ingredient {ingredient.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <IngredientForm
          ingredient={ingredient}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
