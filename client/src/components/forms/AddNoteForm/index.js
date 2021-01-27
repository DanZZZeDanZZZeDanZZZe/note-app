import React from 'react'
import NoteContentForm from '../contents/NoteContentForm'

const AddNoteForm = () => {
  const onSubmit = (values, formik) => {
    const data = {
      title: values.title,
      text: values.text,
      date: new Date(Date.now()),
    }

    if (values?.group) {
      data.groupTitle = values.group
    }

    fetch('/api/notes', {
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
  const legend = 'Add new note'
  const buttonText = 'Submit'
  const initialValues = { title: '', text: '' }

  return (
    <NoteContentForm {...{ onSubmit, buttonText, initialValues, legend }} />
  )
}

export default AddNoteForm
