import actionTypes from '../actionTypes'

const initialState = {
  listOfNotes: {
    count: null,
    errorMessage: null,
  },
}

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_THE_COUNT_OF_NOTES:
      return {
        ...state,
        listOfNotes: {
          ...state.listOfNotes,
          count: action.payload.count,
        },
      }
    case actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES:
      return {
        ...state,
        listOfNotes: {
          ...state.listOfNotes,
          errorMessage: action.payload.errorMessage,
        },
      }
    default:
      return state
  }
}

export default notesReducer
