import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TastingForm from 'src/components/Tasting/TastingForm'

const CREATE_TASTING_MUTATION = gql`
  mutation CreateTastingMutation($input: CreateTastingInput!) {
    createTasting(input: $input) {
      id
    }
  }
`

const NewTasting = () => {
  const [createTasting, { loading, error }] = useMutation(
    CREATE_TASTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Tasting created')
        navigate(routes.tastings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
      recipeId: parseInt(input.recipeId),
      mixerId: parseInt(input.mixerId),
    })
    createTasting({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Tasting</h2>
      </header>
      <div className="rw-segment-main">
        <TastingForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTasting
