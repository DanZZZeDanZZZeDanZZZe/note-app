import { combineReducers } from 'redux'
import groupsReducer from './groupsReducer'
import notesReducer from './notesReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  groups: groupsReducer,
})

export default rootReducer
