import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Tasting/TastingsCell'

const DELETE_TASTING_MUTATION = gql`
  mutation DeleteTastingMutation($id: Int!) {
    deleteTasting(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const TastingsList = ({ tastings }) => {
  const [deleteTasting] = useMutation(DELETE_TASTING_MUTATION, {
    onCompleted: () => {
      toast.success('Tasting deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tasting ' + id + '?')) {
      deleteTasting({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Author id</th>
            <th>Recipe id</th>
            <th>Mixer id</th>
            <th>Decistars</th>
            <th>Comments</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tastings.map((tasting) => (
            <tr key={tasting.id}>
              <td>{truncate(tasting.id)}</td>
              <td>{timeTag(tasting.createdAt)}</td>
              <td>{truncate(tasting.authorId)}</td>
              <td>{truncate(tasting.recipeId)}</td>
              <td>{truncate(tasting.mixerId)}</td>
              <td>{truncate(tasting.decistars)}</td>
              <td>{truncate(tasting.comments)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tasting({ id: tasting.id })}
                    title={'Show tasting ' + tasting.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTasting({ id: tasting.id })}
                    title={'Edit tasting ' + tasting.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tasting ' + tasting.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tasting.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TastingsList
