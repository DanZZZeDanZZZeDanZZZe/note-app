import actionTypes from '../actionTypes'
import notesReducer from './notesReducer'

describe('notes reducer', () => {
  it('should return the initial state', () => {
    expect(notesReducer(undefined, {})).toEqual({
      listOfNotes: {
        count: null,
        errorMessage: null,
        containingGroups: {},
      },
    })
  })

  it('should handle SET_THE_COUNT_OF_NOTES', () => {
    const count = 34

    expect(
      notesReducer(undefined, {
        type: actionTypes.SET_THE_COUNT_OF_NOTES,
        payload: {
          count,
        },
      })
    ).toEqual({
      listOfNotes: {
        count,
        errorMessage: null,
        containingGroups: {},
      },
    })

    expect(
      notesReducer(undefined, {
        type: actionTypes.SET_THE_COUNT_OF_NOTES,
        payload: {
          count,
          containingGroup: 'group 1',
        },
      })
    ).toEqual({
      listOfNotes: {
        count: null,
        errorMessage: null,
        containingGroups: {
          'group 1': {
            count,
            errorMessage: null,
          },
        },
      },
    })
  })

  it('should handle SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES', () => {
    const errorMessage = 'Error message!'

    expect(
      notesReducer(undefined, {
        type: actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES,
        payload: {
          errorMessage,
        },
      })
    ).toEqual({
      listOfNotes: {
        count: null,
        errorMessage,
        containingGroups: {},
      },
    })

    expect(
      notesReducer(undefined, {
        type: actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES,
        payload: {
          errorMessage,
          containingGroup: 'group 1',
        },
      })
    ).toEqual({
      listOfNotes: {
        count: null,
        errorMessage: null,
        containingGroups: {
          'group 1': {
            count: null,
            errorMessage,
          },
        },
      },
    })
  })
})
