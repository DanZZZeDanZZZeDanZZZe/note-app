import notesSaga from './notesSaga'
import groupsSaga from './groupsSaga'

function* rootSaga() {
  yield* notesSaga()
  yield* groupsSaga()
}

export default rootSaga
