import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TASTING_MUTATION = gql`
  mutation DeleteTastingMutation($id: Int!) {
    deleteTasting(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Tasting = ({ tasting }) => {
  const [deleteTasting] = useMutation(DELETE_TASTING_MUTATION, {
    onCompleted: () => {
      toast.success('Tasting deleted')
      navigate(routes.tastings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tasting ' + id + '?')) {
      deleteTasting({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tasting {tasting.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tasting.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(tasting.createdAt)}</td>
            </tr>
            <tr>
              <th>Author id</th>
              <td>{tasting.authorId}</td>
            </tr>
            <tr>
              <th>Recipe id</th>
              <td>{tasting.recipeId}</td>
            </tr>
            <tr>
              <th>Mixer id</th>
              <td>{tasting.mixerId}</td>
            </tr>
            <tr>
              <th>Decistars</th>
              <td>{tasting.decistars}</td>
            </tr>
            <tr>
              <th>Comments</th>
              <td>{tasting.comments}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTasting({ id: tasting.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tasting.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Tasting
