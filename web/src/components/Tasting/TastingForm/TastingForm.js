import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const TastingForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.tasting?.id)
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
          defaultValue={props.tasting?.authorId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="authorId" className="rw-field-error" />

        <Label
          name="recipeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Recipe id
        </Label>

        <NumberField
          name="recipeId"
          defaultValue={props.tasting?.recipeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="recipeId" className="rw-field-error" />

        <Label
          name="mixerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mixer id
        </Label>

        <NumberField
          name="mixerId"
          defaultValue={props.tasting?.mixerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="mixerId" className="rw-field-error" />

        <Label
          name="decistars"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Decistars
        </Label>

        <NumberField
          name="decistars"
          defaultValue={props.tasting?.decistars}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="decistars" className="rw-field-error" />

        <Label
          name="comments"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Comments
        </Label>

        <TextField
          name="comments"
          defaultValue={props.tasting?.comments}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="comments" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TastingForm
