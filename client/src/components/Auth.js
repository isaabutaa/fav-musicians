import React, { useState } from 'react'
import AuthForm from './AuthForm.js'

export default function Auth() {
    const initInputs = { username: "", password: "" }
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

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

    return (
        <div>
            <h1>Favorite Musicians app</h1>
            {
                !toggle ?
                    <>
                        <AuthForm
                            btnText="Sign Up"
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            inputs={inputs}
                        />
                        <p onClick={setToggle(prev => !prev)}>Already a member? Login!</p>
                    </>
                :
                    <>
                        <AuthForm
                            btnText="Login"
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            inputs={inputs}
                        />
                        <p onClick={setToggle(prev => !prev)}>Not a member? Sign up!</p>
                    </>
            }
        </div>
    )
}