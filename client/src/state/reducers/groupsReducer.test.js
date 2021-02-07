import actionTypes from '../actionTypes'
import groupsReducer from './groupsReducer'

describe('groups reducer', () => {
  it('should return the initial state', () => {
    expect(groupsReducer(undefined, {})).toEqual({
      listOfGroups: {
        count: null,
        errorMessage: null,
      },
    })
  })

  it('should handle SET_THE_COUNT_OF_GROUPS', () => {
    expect(
      groupsReducer(undefined, {
        type: actionTypes.SET_THE_COUNT_OF_GROUPS,
        payload: {
          count: 34,
        },
      })
    ).toEqual({
      listOfGroups: {
        count: 34,
        errorMessage: null,
      },
    })
  })

  it('should handle SET_ERROR_MESSAGE_FOR_LIST_OF_GROUPS', () => {
    expect(
      groupsReducer(undefined, {
        type: actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_GROUPS,
        payload: {
          errorMessage: 'Error message!',
        },
      })
    ).toEqual({
      listOfGroups: {
        count: null,
        errorMessage: 'Error message!',
      },
    })
  })
})
