import React, { useState } from 'react'
import axios from 'axios'
import { userAxios } from './userAxios.js'

const initUserState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || ""
}

export const UserContext = React.createContext()

export default function UserProvider(props) {
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

    // logout
    function logout() {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUserState(initUserState)
    }

    // get user artists
    function getUserArtists() {
        userAxios.get("/protected/artists/user")
            .then(res => {
                localStorage.setItem("artists", JSON.stringify(artists))
                setArtists(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // add artist by user
    function addArtist(newArtist) {
        userAxios.post("/protected/artists", newArtist)
            .then(res => {
                setArtists(artists => [...artists, res.data])
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // edit artist post
    function editArtist(updatedPost, artistId) {
        userAxios.put(`/protected/artists/${artistId}`, updatedPost)
            .then(res => {
                setArtists(artists => artists.map(artist => artist._id === artistId ? res.data : artist))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // delete artist post
    function deleteArtist(artistId) {
        userAxios.delete(`/protected/artists/${artistId}`)
            .then(res => {
                setArtists(artists => artists.filter(artist => artist._id !== artistId))
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
                logout,
                getUserArtists,
                addArtist,
                editArtist,
                deleteArtist
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}