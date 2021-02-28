const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
    artistName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
            required: true
        }
    ],
    likes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

//  pre-save hook to hide user password when document is populated
artistSchema.methods.removePassword = function() {
    const artist = this.toObject()
    delete artist.user.password
    return artist
}

module.exports = mongoose.model("Artist", artistSchema)