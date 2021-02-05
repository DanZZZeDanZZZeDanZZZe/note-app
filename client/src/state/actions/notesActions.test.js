import actionTypes from '../actionTypes'
import {
  getTheCountOfNotesAsync,
  setErrorMessageForListOfNotes,
  setTheCountOfNotes,
} from './notesActions'

describe('notes actions', () => {
  it('should create an action to get the count of notes', () => {
    const param = 'notes'

    const expectedAction = {
      type: actionTypes.GET_THE_COUNT_OF_NOTES_ASYNC,
      payload: {
        param,
      },
    }
    expect(getTheCountOfNotesAsync(param)).toEqual(expectedAction)
  })

  it('should create an action to set the count of notes', () => {
    const count = 45

    const expectedAction = {
      type: actionTypes.SET_THE_COUNT_OF_NOTES,
      payload: {
        count,
      },
    }
    expect(setTheCountOfNotes(count)).toEqual(expectedAction)
  })

  it('should create an action to set error message for list of notes', () => {
    const errorMessage = 'Super error'

    const expectedAction = {
      type: actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES,
      payload: {
        errorMessage,
      },
    }
    expect(setErrorMessageForListOfNotes(errorMessage)).toEqual(expectedAction)
  })
})
