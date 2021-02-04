import React from 'react'
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

    fetch('/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        const { message } = await res.json()
        if (!res.ok) {
          throw new Error(message)
        }
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
