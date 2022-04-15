import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_INGREDIENT_MUTATION = gql`
  mutation DeleteIngredientMutation($id: Int!) {
    deleteIngredient(id: $id) {
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

const Ingredient = ({ ingredient }) => {
  const [deleteIngredient] = useMutation(DELETE_INGREDIENT_MUTATION, {
    onCompleted: () => {
      toast.success('Ingredient deleted')
      navigate(routes.ingredients())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete ingredient ' + id + '?')) {
      deleteIngredient({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Ingredient {ingredient.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{ingredient.id}</td>
            </tr>
            <tr>
              <th>Author id</th>
              <td>{ingredient.authorId}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{ingredient.name}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{ingredient.url}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{ingredient.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editIngredient({ id: ingredient.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(ingredient.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Ingredient
