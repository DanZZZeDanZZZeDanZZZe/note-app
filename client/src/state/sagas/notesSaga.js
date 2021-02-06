import { put, call, takeEvery } from 'redux-saga/effects'

import {
  setTheCountOfNotes,
  setErrorMessageForListOfNotes,
} from '../actions/notesActions'
import Api from '../../utility-classes/Api'
import actionTypes from '../actionTypes'

export function* getTheCountOfNotesAsync(action) {
  try {
    const res = yield call(Api.getLength, 'notes', action?.param)
    if (res?.count) {
      yield put(setTheCountOfNotes(res.count))
    } else {
      throw new Error(res?.message ?? 'Invalid format of received data!')
    }
  } catch (error) {
    yield put(setErrorMessageForListOfNotes(error.message))
  }
}

function* noteSaga() {
  yield takeEvery(
    actionTypes.GET_THE_COUNT_OF_NOTES_ASYNC,
    getTheCountOfNotesAsync
  )
}

export default noteSaga
