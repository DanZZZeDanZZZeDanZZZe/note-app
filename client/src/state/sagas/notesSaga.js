import { put, call, takeEvery } from 'redux-saga/effects'

import {
  setTheCountOfNotes,
  setErrorMessageForListOfNotes,
} from '../actions/notesActions'
import Api from '../../utility-classes/Api'
import actionTypes from '../actionTypes'

export function* getTheCountOfNotesAsync(action) {
  try {
    const api = action.payload?.containingGroup
      ? Api.getLengthOfNotesListInGroup
      : Api.getLengthOfNotesList

    const res = yield call(api, action.payload?.containingGroup)

    if (res?.count || res?.count === 0) {
      yield put(setTheCountOfNotes(res.count, action.payload?.containingGroup))
    } else {
      throw new Error(res?.message ?? 'Invalid format of received data!')
    }
  } catch (error) {
    yield put(
      setErrorMessageForListOfNotes(error.message, action.payload?.param)
    )
  }
}

function* notesSaga() {
  yield takeEvery(
    actionTypes.GET_THE_COUNT_OF_NOTES_ASYNC,
    getTheCountOfNotesAsync
  )
}

export default notesSaga
