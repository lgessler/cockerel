import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import TastingForm from 'src/components/Tasting/TastingForm'

export const QUERY = gql`
  query EditTastingById($id: Int!) {
    tasting: tasting(id: $id) {
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
const UPDATE_TASTING_MUTATION = gql`
  mutation UpdateTastingMutation($id: Int!, $input: UpdateTastingInput!) {
    updateTasting(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tasting }) => {
  const [updateTasting, { loading, error }] = useMutation(
    UPDATE_TASTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Tasting updated')
        navigate(routes.tastings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
      recipeId: parseInt(input.recipeId),
      mixerId: parseInt(input.mixerId),
    })
    updateTasting({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Tasting {tasting.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TastingForm
          tasting={tasting}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
