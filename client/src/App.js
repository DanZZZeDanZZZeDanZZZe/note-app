import React from 'react'
import AppRouter from './AppRouter'
import store from './state/store'
import { Provider } from 'react-redux'

import DateHandler from './utility-classes/DateHandler'
import constants from './constants'
import Api from './utility-classes/Api'

DateHandler.init('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

Api.init(constants['API_BASE'])

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
