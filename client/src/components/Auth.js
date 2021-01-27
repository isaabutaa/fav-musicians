import React, { useState } from 'react'
import AuthForm from './AuthForm.js'

export default function Auth() {
    const initInputs = { username: "", password: "" }
    const [inputs, setInputs] = useState(initInputs)
    const [isLoginMode, setIsLoginMode] = useState(true)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        // submit
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
                    inputs={inputs}
                />
                <p onClick={() => setIsLoginMode(prev => !prev)}>
                    {toggleLoginMode}
                </p>
            </>
        </div>
    )
}