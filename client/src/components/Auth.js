import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'

export default function Auth(props) {
    const [loginInfo, setLoginInfo] = useState({ username: "", password: "" })
    const [isLoginMode, setIsLoginMode] = useState(true)
    const { signup, login } = useContext(UserContext)

    function handleChange(e) {
        const {name, value} = e.target
        setLoginInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        loginOrSignup()
    }

    function loginOrSignup() {
        isLoginMode ? login(loginInfo) : signup(loginInfo)
    }

    const formBtnText = isLoginMode ? "Login" : "Sign Up"
    const toggleLoginMode = isLoginMode 
        ? "Not a member? Sign up!"
        : "Already a member? Login!"

    return (
        <div>
            <h1 className="header">Favorite Artists Vote</h1>
            <>
                <AuthForm
                    btnText={formBtnText}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    loginInfo={loginInfo}
                />
                <p className="member-text" onClick={() => setIsLoginMode(prev => !prev)}>
                    {toggleLoginMode}
                </p>
                <h3 style={{textAlign: "center"}}>About:</h3>
                <p className="app-description">This app allows you to write short posts listing your favorite artists/musicians and a short description about why you like them. Other users will be able to like your posts and comment on them at the home page. You will be able to do the same. You also have edit & delete capabilities for the posts that you write.</p>
            </>
        </div>
    )
}