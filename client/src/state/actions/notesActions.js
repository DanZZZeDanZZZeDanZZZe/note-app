import actionTypes from '../actionTypes'

export function getTheCountOfNotesAsync(param = null) {
  return {
    type: actionTypes.GET_THE_COUNT_OF_NOTES_ASYNC,
    payload: {
      containingGroup: param,
    },
  }
}

export function setTheCountOfNotes(count, containingGroup = null) {
  return {
    type: actionTypes.SET_THE_COUNT_OF_NOTES,
    payload: {
      count,
      containingGroup: containingGroup,
    },
  }
}

export function setErrorMessageForListOfNotes(
  errorMessage,
  containingGroup = null
) {
  return {
    type: actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES,
    payload: {
      errorMessage,
      containingGroup: containingGroup,
    },
  }
}
