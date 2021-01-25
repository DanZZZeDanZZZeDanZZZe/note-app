import React from 'react'
import { Formik } from 'formik'
import { StyledForm } from './styled-components'
import PropTypes from 'prop-types'
import isEmpty from '../../utils/isEmpty'

const CardContentForm = (props) => {
  const {
    onSubmit,
    initialValues,
    validate,
    children,
    buttonText,
    legend,
  } = props
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => validate(values)}
      onSubmit={(values, formik) => onSubmit(values, formik)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <legend>{legend}</legend>
          {children({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
            isValid,
          })}
          <button
            type="submit"
            disabled={isSubmitting || !isValid || isEmpty(touched)}
          >
            {buttonText}
          </button>
        </StyledForm>
      )}
    </Formik>
  )
}

CardContentForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
}

export default CardContentForm
