import { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserContext } from './context/UserProvider.js'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'


export default function App() {
    const { 
        user, 
        token, 
        artists, 
        getUserArtists, 
        addArtist,
        editArtist,
        deleteArtist 
    } = useContext(UserContext)

    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    { token ? 
                        <Redirect to="/profile" /> 
                    : 
                        <Auth />
                    }
                </Route>
                <Route path="/profile">
                    <Profile 
                        user={user}
                        artists={artists} 
                        getUserArtists={getUserArtists} 
                        addArtist={addArtist} 
                        editArtist={editArtist}
                        deleteArtist={deleteArtist}
                    />
                </Route>
            </Switch>
        </div>
    )
}