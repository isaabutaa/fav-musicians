import { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserContext } from './context/UserProvider.js'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Home from './components/Home.js'


export default function App() {
    const {token, logout} = useContext(UserContext)

    return (
        <div>
            { token && <Navbar token={token} logout={logout} /> }
            <Switch>
                <Route exact path="/">
                    { token ? <Redirect to="/profile" /> : <Auth /> }
                </Route>
                <Route path="/profile">
                    { !token ? <Redirect to="/" /> : <Profile /> }
                </Route>
                <Route path="/home">
                    { !token ? <Redirect to="/" /> : <Home /> }
                </Route>
            </Switch>
        </div>
    )
}