import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'

export default function Auth(props) {
    const [loginInfo, setLoginInfo] = useState({ username: "", password: ""})
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
            <h1>Favorite Musicians app</h1>
            <>
                <AuthForm
                    btnText={formBtnText}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    loginInfo={loginInfo}
                />
                <p onClick={() => setIsLoginMode(prev => !prev)}>
                    {toggleLoginMode}
                </p>
            </>
        </div>
    )
}