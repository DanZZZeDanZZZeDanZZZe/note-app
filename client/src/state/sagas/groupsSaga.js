import { put, call, takeEvery } from 'redux-saga/effects'

import {
  setTheCountOfGroups,
  setErrorMessageForListOfGroups,
} from '../actions/groupsActions'
import Api from '../../utility-classes/Api'
import actionTypes from '../actionTypes'

export function* getTheCountOfGroupsAsync(action) {
  try {
    const res = yield call(Api.getLengthOfGroupsList)
    if (res?.count) {
      yield put(setTheCountOfGroups(res.count))
    } else {
      throw new Error(res?.message ?? 'Invalid format of received data!')
    }
  } catch (error) {
    yield put(setErrorMessageForListOfGroups(error.message))
  }
}

function* groupsSaga() {
  yield takeEvery(
    actionTypes.GET_THE_COUNT_OF_GROUPS_ASYNC,
    getTheCountOfGroupsAsync
  )
}

export default groupsSaga
