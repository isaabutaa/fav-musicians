const express = require('express')
const artistRouter = express.Router()
const Artist = require('../models/artist.js')
const Comment = require('../models/comment.js')

// get all and post one
artistRouter.route("/")
    .get((req, res, next) => {
        Artist.find((err, artists) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(artists)
        })
    })
    .post((req, res, next) => {
        console.log("posted new artist")
        req.body.user = req.user._id
        const newArtist = new Artist(req.body)
        newArtist.save((err, savedArtist) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedArtist)
        })
    })

// get artists by user
artistRouter.route("/user")
    .get((req, res, next) => {
        Artist.find(
            { user: req.user._id },
            (err, artists) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(artists)
            }
        )
    })

// update and delete
artistRouter.route("/:artistId")
    .put((req, res, next) => {
        Artist.findOneAndUpdate(
            { _id: req.params.artistId, user: req.user._id },
            req.body,
            { new: true },
            (err, updatedArtist) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedArtist)
            }
        )
    })
    .delete((req, res, next) => {
        Artist.findOneAndDelete(
            { _id: req.params.artistId, user: req.user._id },
            (err, deletedArtist) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`Deleted ${deletedArtist.artistName} post from the database.`)
            }
        )
    })

// like an artist post
artistRouter.put("/upvote/:artistId", (req, res, next) => {
    Artist.findOneAndUpdate(
        { _id: req.params.artistId },
        { $inc: { likes: 1 } },
        { new: true },
        (err, updatedArtist) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedArtist)
        }
    )
})

// dislike a post
artistRouter.put("/downvote/:artistId", (req, res, next) => {
    Artist.findOneAndUpdate(
        { _id: req.params.artistId },
        { $inc: { likes: -1 } },
        { new: true },
        (err, updatedArtist) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedArtist)
        }
    )
})

// user post comment to an issue
artistRouter.post("/comments/:artistId", (req, res, next) => {
    req.body.user = req.user._id
    const comment = req.body
    Artist.findOneAndUpdate(
        { _id: req.params.artistId },
        { $push: { comments: comment } },
        { new: true },
        (err, updatedArtist) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedArtist.comments[updatedArtist.comments.length - 1])
        }
    )
})

// get comments by artist
// artistRouter.get("/comments/:artistId", (req, res, next) => {
//     console.log("got comments")
//     Comment.find(
//         {artist: req.params.artistId},
//         (err, comments) => {
//             if(err) {
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(comments)
//         }
//     )
// })



module.exports = artistRouter