import actionTypes from '../actionTypes'

export function getTheCountOfNotesAsync(param) {
  return {
    type: actionTypes.GET_THE_COUNT_OF_NOTES_ASYNC,
    payload: {
      param,
    },
  }
}

export function setTheCountOfNotes(count) {
  return {
    type: actionTypes.SET_THE_COUNT_OF_NOTES,
    payload: {
      count,
    },
  }
}

export function setErrorMessageForListOfNotes(errorMessage) {
  return {
    type: actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES,
    payload: {
      errorMessage,
    },
  }
}
