import React from 'react'

export default function AuthForm(props) {
    const {
        btnText,
        handleChange,
        handleSubmit,
        loginInfo: {
            username,
            password
        }
    } = props

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    value={username} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange} 
                />
                <button>{btnText}</button>
            </form>
        </div>
    )
}