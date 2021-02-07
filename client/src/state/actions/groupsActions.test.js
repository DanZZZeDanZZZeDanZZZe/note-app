import actionTypes from '../actionTypes'
import {
  getTheCountOfGroupsAsync,
  setErrorMessageForListOfGroups,
  setTheCountOfGroups,
} from './groupsActions'

describe('groups actions', () => {
  it('should create an action to get the count of groups', () => {
    const param = 'groups'

    const expectedAction = {
      type: actionTypes.GET_THE_COUNT_OF_GROUPS_ASYNC,
      payload: {
        param,
      },
    }
    expect(getTheCountOfGroupsAsync(param)).toEqual(expectedAction)
  })

  it('should create an action to set the count of groups', () => {
    const count = 45

    const expectedAction = {
      type: actionTypes.SET_THE_COUNT_OF_GROUPS,
      payload: {
        count,
      },
    }
    expect(setTheCountOfGroups(count)).toEqual(expectedAction)
  })

  it('should create an action to set error message for list of groups', () => {
    const errorMessage = 'Super error'

    const expectedAction = {
      type: actionTypes.SET_ERROR_MESSAGE_FOR_LIST_OF_GROUPS,
      payload: {
        errorMessage,
      },
    }
    expect(setErrorMessageForListOfGroups(errorMessage)).toEqual(expectedAction)
  })
})
