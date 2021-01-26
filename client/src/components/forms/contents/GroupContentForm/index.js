import React from 'react'
import PropTypes from 'prop-types'
import CardContentForm from '../../bases/CardContentForm'
import ColorPicker from '../../../ColorPicker'
import { Field } from 'formik'

const GroupContentForm = (props) => {
  const validate = (values) => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    } else if (values.title.length > 50) {
      errors.title = 'Must be 50 characters or less'
    }
    return errors
  }

  return (
    <CardContentForm {...{ ...props, validate }}>
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <>
          <label>
            Title
            <input
              type="title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && <span>{errors.title}</span>}
          </label>
          <label htmlFor="color-picker">Group color</label>
          <Field name="color" id="color-picker">
            {({ form }) => {
              return (
                <ColorPicker
                  setValue={(color) => form.setFieldValue('color', color)}
                  initalColor={values.color}
                />
              )
            }}
          </Field>
        </>
      )}
    </CardContentForm>
  )
}

GroupContentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  buttonText: PropTypes.string.isRequired,
}

export default GroupContentForm
