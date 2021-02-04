import AppRouter from './AppRouter'
import DateHandler from './utility-classes/DateHandler'

DateHandler.init('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

function App() {
  return <AppRouter />
}

export default App
