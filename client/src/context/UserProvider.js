import React, { useState } from 'react'
import axios from 'axios'
import { userAxios } from './userAxios.js'

export const UserContext = React.createContext()

export default function UserProvider(props) {
    const initUserState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || ""
    }
    const [userState, setUserState] = useState(initUserState)
    const [artists, setArtists] = useState([])

    //signup
    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState({ user, token })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    //login
    function login(credentials) {
        axios.post("/auth/login", credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState({ user, token })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // get artists
    function getUserArtists() {
        userAxios.get("/protected/artists/user")
            .then(res => {
                localStorage.setItem("artists", JSON.stringify(artists))
                setArtists(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // add artist
    function addArtist(newArtist) {
        userAxios.post("/protected/artists", newArtist)
            .then(res => {
                setArtists(artists => [...artists, res.data])
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider 
            value={{
                ...userState,
                artists,
                signup,
                login,
                getUserArtists,
                addArtist
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}