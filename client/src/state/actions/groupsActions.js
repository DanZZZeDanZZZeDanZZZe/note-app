import actionTypes from '../actionTypes'

export function getTheCountOfGroupsAsync(param) {
  return {
    type: actionTypes.GET_THE_COUNT_OF_GROUPS_ASYNC,
    payload: {
      param,
    },
  }
}

export function setTheCountOfGroups(count) {
  return {
    type: actionTypes.SET_THE_COUNT_OF_GROUPS,
    payload: {
      count,
    },
  }
}

export function setErrorMessageForListOfGroups(errorMessage) {
  return {
    type: actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_GROUPS,
    payload: {
      errorMessage,
    },
  }
}
