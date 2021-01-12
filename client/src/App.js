import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavSideMenu from "./components/NavSideMenu";
import NotesPage from "./pages/NotesPage";
import GroupsPage from "./pages/GroupsPage";

function App() {
  return (
    <Router>
      <NavSideMenu>
        <Link to="/notes">Notes</Link>
        <Link to="/goups">Groups</Link>
      </NavSideMenu>

      <Switch>
        <Route path="/notes">
          <NotesPage/>
        </Route>
        <Route path="/goups">
          <GroupsPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
