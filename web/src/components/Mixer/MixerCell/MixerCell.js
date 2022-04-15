import Mixer from 'src/components/Mixer/Mixer'

export const QUERY = gql`
  query FindMixerById($id: Int!) {
    mixer: mixer(id: $id) {
      id
      name
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Mixer not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ mixer }) => {
  return <Mixer mixer={mixer} />
}
