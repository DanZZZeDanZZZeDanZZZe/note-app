import React from 'react'
import Api from '../../../utility-classes/Api'
import GroupContentForm from '../contents/GroupContentForm'

const AddGroupForm = () => {
  const onSubmit = (values, formik) => {
    const data = {
      title: values.title,
      date: new Date(Date.now()),
    }

    if (values.color) {
      data.color = values.color
    }

    Api.addNewGroup(data)
      .then(() => {
        formik.resetForm()
      })
      .catch(({ message }) => {
        alert(message)
      })
      .finally(() => {
        formik.setSubmitting(false)
      })
  }

  return (
    <GroupContentForm
      {...{
        legend: 'Add new group',
        buttonText: 'Submit',
        initialValues: { title: '' },
        onSubmit,
      }}
    />
  )
}

export default AddGroupForm
