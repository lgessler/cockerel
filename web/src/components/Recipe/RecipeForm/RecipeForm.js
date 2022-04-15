import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const RecipeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.recipe?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="authorId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author id
        </Label>

        <NumberField
          name="authorId"
          defaultValue={props.recipe?.authorId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="authorId" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.recipe?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="shortDescription"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Short description
        </Label>

        <TextField
          name="shortDescription"
          defaultValue={props.recipe?.shortDescription}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="shortDescription" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.recipe?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="steps"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Steps
        </Label>

        <TextField
          name="steps"
          defaultValue={props.recipe?.steps}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="steps" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RecipeForm
