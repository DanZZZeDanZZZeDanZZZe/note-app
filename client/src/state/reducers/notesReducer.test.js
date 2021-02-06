import actionTypes from '../actionTypes'
import notesReducer from './notesReducer'

describe('notes reducer', () => {
  it('should return the initial state', () => {
    expect(notesReducer(undefined, {})).toEqual({
      listOfNotes: {
        count: null,
        errorMessage: null,
      },
    })
  })

  it('should handle SET_THE_COUNT_OF_NOTES', () => {
    expect(
      notesReducer(undefined, {
        type: actionTypes.SET_THE_COUNT_OF_NOTES,
        payload: {
          count: 34,
        },
      })
    ).toEqual({
      listOfNotes: {
        count: 34,
        errorMessage: null,
      },
    })
  })

  it('should handle SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES', () => {
    expect(
      notesReducer(undefined, {
        type: actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_NOTES,
        payload: {
          errorMessage: 'Error message!',
        },
      })
    ).toEqual({
      listOfNotes: {
        count: null,
        errorMessage: 'Error message!',
      },
    })
  })
})
