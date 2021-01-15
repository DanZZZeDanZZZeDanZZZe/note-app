import SideMenu from "../SideMenu"
import { Nav } from "./styled-components"

function NavSideMenu(props) {
  return (
    <SideMenu>
      <Nav>
        <ul>
          {props.children.map((link, index) => (
            <li key={index}>
              {link}
            </li>
          ))} 
        </ul>
      </Nav>
    </SideMenu>
  )
}

export default NavSideMenu

