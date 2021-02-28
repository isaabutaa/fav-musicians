const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')
const secret = process.env.MY_SECRET

// signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne(
        { username: req.body.username.toLowerCase() },
        (err, userInfo) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            if(userInfo) {
                res.status(403)
                return next(new Error(`${userInfo.username} is already taken`))
            }
            const newUser = new User(req.body)
            newUser.save((err, savedUser) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                const token = jwt.sign(savedUser.removePassword(), secret)
                return res.status(201).send({ token, user: savedUser.removePassword() })
            })
        }
    )
})

// login
authRouter.post("/login", (req, res, next) => {
    User.findOne( 
        { username: req.body.username.toLowerCase() },
        (err, user) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            if(!user) {
                res.status(500)
                return next(new Error("Username or Password is incorrect"))
            }
            if(req.body.password !== user.password) {
                res.status(500)
                return next(new Error("Username or Password is incorrect"))
            }
            const token = jwt.sign(user.removePassword(), secret)
            return res.status(200).send({ token, user: user.removePassword() })
        }
    )
})


module.exports = authRouter