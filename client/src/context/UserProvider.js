import React, { useState } from 'react'
import axios from 'axios'
import userAxios from './userAxios.js'

export const UserContext = React.createContext()

export default function UserProvider(props) {
    const [userState, setUserState] = useState({ user: {}, token: "" })
    const [artists, setArtists] = useState([])

    //signup
    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                setUserState({ user, token })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    //login
    function login(credentials) {
        axios.post("/auth/login", credentials)
            .then(res => {
                const {user, token} = res.data
                setUserState({ user, token })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider 
            value={{
                ...userState,
                artists,
                signup,
                login
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}