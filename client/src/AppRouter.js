import { Switch, Route, Link, Redirect, BrowserRouter } from 'react-router-dom'
import React from 'react'

import NavSideMenu from './components/NavSideMenu'
import NotesPage from './pages/NotesPage'
import GroupsPage from './pages/GroupsPage'
import NotesInGroupPage from './pages/NotesInGroupPage'
import AddNotePage from './pages/AddNotePage'
import AddGroupPage from './pages/AddGroupPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <NavSideMenu>
        <Link to="/notes">Notes</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/add/note/">Add note</Link>
        <Link to="/add/group/">Add group</Link>
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
        <Route exact path="/add/note/">
          <AddNotePage />
        </Route>
        <Route exact path="/add/group/">
          <AddGroupPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
