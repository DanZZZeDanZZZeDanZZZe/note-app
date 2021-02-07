import actionTypes from '../actionTypes'

const initialState = {
  listOfNotes: {
    count: null,
    errorMessage: null,
    containingGroups: {},
  },
}

function notesReducer(state = initialState, action) {
  const { payload } = action
  let newData
  switch (action.type) {
    case actionTypes.SET_THE_COUNT_OF_NOTES:
      newData = payload?.containingGroup
        ? {
            containingGroups: {
              ...state.listOfNotes.containingGroups,
              [payload?.containingGroup]: {
                errorMessage: null,
                count: payload.count,
              },
            },
          }
        : {
            count: payload.count,
            containingGroups: {},
          }
      return {
        ...state,
        listOfNotes: {
          ...state.listOfNotes,
          ...newData,
        },
      }

    case actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES:
      newData = payload?.containingGroup
        ? {
            containingGroups: {
              ...state.listOfNotes.containingGroups,
              [payload?.containingGroup]: {
                errorMessage: payload.errorMessage,
                count: null,
              },
            },
          }
        : {
            errorMessage: payload.errorMessage,
            containingGroups: {},
          }
      return {
        ...state,
        listOfNotes: {
          ...state.listOfNotes,
          ...newData,
        },
      }
    default:
      return state
  }
}

export default notesReducer
