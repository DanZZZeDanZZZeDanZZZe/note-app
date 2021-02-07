import actionTypes from '../actionTypes'
import {
  getTheCountOfNotesAsync,
  setErrorMessageForListOfNotes,
  setTheCountOfNotes,
} from './notesActions'

describe('notes actions', () => {
  it('should create an action to get the count of notes', () => {
    const param = 'notes'

    const expectedAction1 = {
      type: actionTypes.GET_THE_COUNT_OF_NOTES_ASYNC,
      payload: {
        containingGroup: param,
      },
    }

    const expectedAction2 = {
      type: actionTypes.GET_THE_COUNT_OF_NOTES_ASYNC,
      payload: {
        containingGroup: null,
      },
    }

    expect(getTheCountOfNotesAsync(param)).toEqual(expectedAction1)
    expect(getTheCountOfNotesAsync()).toEqual(expectedAction2)
  })

  it('should create an action to set the count of notes', () => {
    const count = 45
    const containingGroup = '123'

    const expectedAction1 = {
      type: actionTypes.SET_THE_COUNT_OF_NOTES,
      payload: {
        count,
        containingGroup,
      },
    }

    const expectedAction2 = {
      type: actionTypes.SET_THE_COUNT_OF_NOTES,
      payload: {
        count,
        containingGroup: null,
      },
    }

    expect(setTheCountOfNotes(count, containingGroup)).toEqual(expectedAction1)
    expect(setTheCountOfNotes(count)).toEqual(expectedAction2)
  })

  it('should create an action to set error message for list of notes', () => {
    const errorMessage = 'Super error'
    const containingGroup = '123'

    const expectedAction1 = {
      type: actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES,
      payload: {
        errorMessage,
        containingGroup,
      },
    }

    const expectedAction2 = {
      type: actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES,
      payload: {
        errorMessage,
        containingGroup: null,
      },
    }

    expect(
      setErrorMessageForListOfNotes(errorMessage, containingGroup)
    ).toEqual(expectedAction1)
    expect(setErrorMessageForListOfNotes(errorMessage)).toEqual(expectedAction2)
  })
})
