import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const {token, logout} = props
    const logoutBtnDisplay = token && <button onClick={() => logout()}>Logout</button>
    return (
        <div className="navbar">
            <Link to="/profile">Profile</Link>
            <Link to="/home">Home</Link>
            {logoutBtnDisplay}
        </div>
    )
}