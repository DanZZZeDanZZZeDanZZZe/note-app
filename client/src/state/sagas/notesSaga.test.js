import { put, take } from 'redux-saga/effects'
import {
  setErrorMessageForListOfNotes,
  setTheCountOfNotes,
} from '../actions/notesActions'
import { getTheCountOfNotesAsync } from './notesSaga'

describe('getTheCountOfNotesAsync', () => {
  it('should return the error message action', () => {
    const gen = getTheCountOfNotesAsync()
    gen.next()

    expect(gen.next({}).value).toEqual(
      put(setErrorMessageForListOfNotes('Invalid format of received data!'))
    )
  })

  it('should return action with the received error message', () => {
    const gen = getTheCountOfNotesAsync()
    gen.next()
    const message = 'ERROR!!!'
    expect(gen.next({ message }).value).toEqual(
      put(setErrorMessageForListOfNotes(message))
    )
  })

  it('should return set the count of notes action', () => {
    const gen = getTheCountOfNotesAsync()
    gen.next()
    const count = 25

    expect(gen.next({ count }).value).toEqual(put(setTheCountOfNotes(count)))
  })
})
