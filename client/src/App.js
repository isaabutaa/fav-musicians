import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'

export default function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" render={Auth} />
            </Switch>
        </div>
    )
}