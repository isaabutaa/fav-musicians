const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment')
const Artist = require('../models/artist.js')

// post a comment
commentRouter.post("/:artistId", (req, res, next) => {
    req.body.user = req.user._id
    req.body.artist = req.params.artistId
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        Artist.findOneAndUpdate(
            { _id: req.params.artistId },
            { $push: { comments: savedComment }},
            (err, updatedArtist) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
            }
        )
        return res.status(201).send(savedComment)
    })
})

module.exports = commentRouter