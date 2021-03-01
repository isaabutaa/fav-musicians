import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar(props) {
    const {token, logout} = props
    const linkStyles = {
        border: "3px solid #ffe5b4",
        margin: "5px",
        paddingLeft: "5px",
        paddingRight: "5px"
    }
    const logoutBtnDisplay = token && <p className="nav-link" onClick={() => logout()}>Logout</p>
    return (
        <div className="navbar">
            <NavLink to="/home" activeStyle={linkStyles}><p className="nav-link">Home</p></NavLink>
            <NavLink to="/profile" activeStyle={linkStyles}><p className="nav-link">Profile</p></NavLink>
            {logoutBtnDisplay}
        </div>
    )
}