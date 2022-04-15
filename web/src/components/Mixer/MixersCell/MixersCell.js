import { Link, routes } from '@redwoodjs/router'

import Mixers from 'src/components/Mixer/Mixers'

export const QUERY = gql`
  query FindMixers {
    mixers {
      id
      name
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No mixers yet. '}
      <Link to={routes.newMixer()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ mixers }) => {
  return <Mixers mixers={mixers} />
}
