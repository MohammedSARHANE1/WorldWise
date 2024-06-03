import { NavLink } from "react-router-dom"
import Styles from "./NavBar.module.css"
function NavBar() {
    return (
        <nav className={Styles.nav}>
           <ul>
            <li>
            <NavLink to="/" >HOME</NavLink>
            </li>
            <li>
                 <NavLink to="/pricing" >Pricing</NavLink>
            </li>
            <li><NavLink to="/product" >Product</NavLink>
            </li>
           </ul>
        </nav>
    )
}

export default NavBar
