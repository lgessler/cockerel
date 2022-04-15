import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Ingredient/IngredientsCell'

const DELETE_INGREDIENT_MUTATION = gql`
  mutation DeleteIngredientMutation($id: Int!) {
    deleteIngredient(id: $id) {
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

const IngredientsList = ({ ingredients }) => {
  const [deleteIngredient] = useMutation(DELETE_INGREDIENT_MUTATION, {
    onCompleted: () => {
      toast.success('Ingredient deleted')
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
    if (confirm('Are you sure you want to delete ingredient ' + id + '?')) {
      deleteIngredient({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Author id</th>
            <th>Name</th>
            <th>Url</th>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient) => (
            <tr key={ingredient.id}>
              <td>{truncate(ingredient.id)}</td>
              <td>{truncate(ingredient.authorId)}</td>
              <td>{truncate(ingredient.name)}</td>
              <td>{truncate(ingredient.url)}</td>
              <td>{truncate(ingredient.description)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.ingredient({ id: ingredient.id })}
                    title={'Show ingredient ' + ingredient.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editIngredient({ id: ingredient.id })}
                    title={'Edit ingredient ' + ingredient.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete ingredient ' + ingredient.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(ingredient.id)}
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

export default IngredientsList
