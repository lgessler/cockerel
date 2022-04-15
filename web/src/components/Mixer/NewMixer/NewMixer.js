import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MixerForm from 'src/components/Mixer/MixerForm'

const CREATE_MIXER_MUTATION = gql`
  mutation CreateMixerMutation($input: CreateMixerInput!) {
    createMixer(input: $input) {
      id
    }
  }
`

const NewMixer = () => {
  const [createMixer, { loading, error }] = useMutation(CREATE_MIXER_MUTATION, {
    onCompleted: () => {
      toast.success('Mixer created')
      navigate(routes.mixers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createMixer({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Mixer</h2>
      </header>
      <div className="rw-segment-main">
        <MixerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMixer
