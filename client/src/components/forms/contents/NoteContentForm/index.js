import React from 'react'
import PropTypes from 'prop-types'

import CardContentForm from '../../bases/CardContentForm'
import DataLoadingComponent from '../../../DataLoadingComponent'
import { Field } from 'formik'

const NoteContentForm = (props) => {
  const validate = (values) => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    } else if (values.title.length > 50) {
      errors.title = 'Must be 50 characters or less'
    }
    if (values.text.length > 300) {
      errors.text = 'Must be 300 characters or less'
    }
    return errors
  }

  return (
    <DataLoadingComponent url="/api/groups/list-of-titles">
      {(data) => (
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
              <label>
                Text
                <textarea
                  name="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
                />
                {errors.text && touched.text && <span>{errors.text}</span>}
              </label>
              <label>
                Group
                <Field name="group" as="select">
                  {data.groupTitles.map((title, index) => (
                    <option key={index} value={title}>
                      {title}
                    </option>
                  ))}
                </Field>
              </label>
            </>
          )}
        </CardContentForm>
      )}
    </DataLoadingComponent>
  )
}

NoteContentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  buttonText: PropTypes.string.isRequired,
}

export default NoteContentForm
