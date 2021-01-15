import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

import NavSideMenu from './components/NavSideMenu'
import NotesPage from './pages/NotesPage'
import GroupsPage from './pages/GroupsPage'

function App() {
  return (
    <Router basename="/client/build">
      <NavSideMenu>
        <Link to="/notes">Notes</Link>
        <Link to="/goups">Groups</Link>
      </NavSideMenu>

      <Switch>
        <Route path="/" exact>
          <Redirect to="/notes" />
        </Route>
        <Route path="/notes">
          <NotesPage />
        </Route>
        <Route path="/goups">
          <GroupsPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
