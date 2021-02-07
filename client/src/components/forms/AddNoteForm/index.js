import React from 'react'
import Api from '../../../utility-classes/Api'
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

    Api.addNewNote(data)
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
  const legend = 'Add new note'
  const buttonText = 'Submit'
  const initialValues = { title: '', text: '' }

  return (
    <NoteContentForm {...{ onSubmit, buttonText, initialValues, legend }} />
  )
}

export default AddNoteForm
