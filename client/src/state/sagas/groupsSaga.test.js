import { put } from 'redux-saga/effects'
import {
  setErrorMessageForListOfGroups,
  setTheCountOfGroups,
} from '../actions/groupsActions'
import { getTheCountOfGroupsAsync } from './groupsSaga'

describe('getTheCountOfGroupsAsync', () => {
  it('should return the error message action', () => {
    const gen = getTheCountOfGroupsAsync()
    gen.next()

    expect(gen.next({}).value).toEqual(
      put(setErrorMessageForListOfGroups('Invalid format of received data!'))
    )
  })

  it('should return action with the received error message', () => {
    const gen = getTheCountOfGroupsAsync()
    gen.next()
    const message = 'ERROR!!!'
    expect(gen.next({ message }).value).toEqual(
      put(setErrorMessageForListOfGroups(message))
    )
  })

  it('should return set the count of groups action', () => {
    const gen = getTheCountOfGroupsAsync()
    gen.next()
    const count = 25

    expect(gen.next({ count }).value).toEqual(put(setTheCountOfGroups(count)))
  })
})
