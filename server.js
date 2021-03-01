const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const path = require('path')
const mySecret = process.env.MY_SECRET
const port = process.env.PORT

// middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

// connect to db
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// routes
app.use("/auth", require("./routes/authRouter.js"))
app.use("/protected", expressJwt({ secret: mySecret, algorithms: ['HS256'] }))
app.use("/protected/artists", require("./routes/artistRouter.js"))
app.use("/protected/comments", require("./routes/commentRouter.js"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    res.send({errMsg: err.message})
})

// for deployment
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

// listen for server
app.listen(port, () => console.log(`Server is running on Port ${port}`))