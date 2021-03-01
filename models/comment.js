const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: "Artist",
        required: true
    }
})

// pre-save hook to hide user password when user document is populated
commentSchema.methods.removeUserPassword = function() {
    const comment = this.toObject()
    delete comment.user.password
    return comment
}

// post-save hook to populate the user
commentSchema.post('save', function(doc, next) {
    doc.populate('user').execPopulate().then(function() {
        next()
    })
})

module.exports = mongoose.model("Comment", commentSchema)