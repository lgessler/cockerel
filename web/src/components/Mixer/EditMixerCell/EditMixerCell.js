import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MixerForm from 'src/components/Mixer/MixerForm'

export const QUERY = gql`
  query EditMixerById($id: Int!) {
    mixer: mixer(id: $id) {
      id
      name
      url
    }
  }
`
const UPDATE_MIXER_MUTATION = gql`
  mutation UpdateMixerMutation($id: Int!, $input: UpdateMixerInput!) {
    updateMixer(id: $id, input: $input) {
      id
      name
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ mixer }) => {
  const [updateMixer, { loading, error }] = useMutation(UPDATE_MIXER_MUTATION, {
    onCompleted: () => {
      toast.success('Mixer updated')
      navigate(routes.mixers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateMixer({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Mixer {mixer.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MixerForm
          mixer={mixer}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
