import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/auth">Login Page</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/home">Home</Link>
        </div>
    )
}