import actionTypes from '../actionTypes'

const initialState = {
  listOfGroups: {
    count: null,
    errorMessage: null,
  },
}

function groupsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_THE_COUNT_OF_GROUPS:
      return {
        ...state,
        listOfGroups: {
          ...state.listOfGroups,
          count: action.payload.count,
        },
      }
    case actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_GROUPS:
      return {
        ...state,
        listOfGroups: {
          ...state.listOfGroups,
          errorMessage: action.payload.errorMessage,
        },
      }
    default:
      return state
  }
}

export default groupsReducer
