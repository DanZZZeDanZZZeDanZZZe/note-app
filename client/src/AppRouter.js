import { Switch, Route, Link, Redirect, BrowserRouter } from 'react-router-dom'

import NavSideMenu from './components/NavSideMenu'
import NotesPage from './pages/NotesPage'
import GroupsPage from './pages/GroupsPage'
import NotesInGroupPage from './pages/NotesInGroupPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <NavSideMenu>
        <Link to="/notes">Notes</Link>
        <Link to="/groups">Groups</Link>
      </NavSideMenu>

      <Switch>
        <Route path="/" exact>
          <Redirect to="/notes" />
        </Route>
        <Route path="/notes">
          <NotesPage />
        </Route>
        <Route exact path="/groups">
          <GroupsPage />
        </Route>
        <Route path="/groups/notes/:groupTitle">
          <NotesInGroupPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
