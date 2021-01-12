import SideMenu from "../SideMenu"

function NavSideMenu(props) {
  return (
    <SideMenu>
      <nav>
        <ul>
          {props.children.map((link, index) => (
            <li key={index}>
              {link}
            </li>
          ))} 
        </ul>
      </nav>
    </SideMenu>
  )
}

export default NavSideMenu

