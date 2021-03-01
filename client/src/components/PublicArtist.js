import { useState, useContext } from 'react'
import { HomeContext } from '../context/HomeProvider.js'
import CommentForm from './CommentForm.js'
import CommentList from './CommentList.js'
import '../css/PublicArtist.css'

export default function PublicArtist(props) {
    const {likePost, unlikePost, addComment} = useContext(HomeContext)
    const [openCommentFormToggle, setOpenCommentFormToggle] = useState(false)
    const [likeOrDislike, setLikeOrDislike] = useState(true)
    const [displayComments, setDisplayComments] = useState(false)
    const { artistName, description, comments, likes, _id, user: { username } } = props

    const toggleLikeBtn = () => {
        if(likeOrDislike) {
            likePost(_id)
            setLikeOrDislike(!likeOrDislike)
        } else {
            unlikePost(_id)
            setLikeOrDislike(!likeOrDislike)
        }
    }

    const toggleCommentForm = () => setOpenCommentFormToggle(!openCommentFormToggle)
    const toggleComments = () => setDisplayComments(!displayComments)
    const likeTxt = likeOrDislike ? "Like" : "Dislike"
    const commentsTxt = displayComments ? <span>Comments &#9650;</span> : <span>Comments &#9660;</span>
    const commentFormDisplay = openCommentFormToggle && <CommentForm artistId={_id} addComment={addComment} toggleForm={toggleCommentForm} />
    return (
        <div className="artist">
            <>
                <p className="public-username">@{username}:</p>
                <div>
                    <h4 className="artist-name">{artistName}</h4>
                    <p className="artist-description"> - {description}</p>
                </div>
                <p className="like-btn" onClick={() => toggleLikeBtn()}>{likeTxt}</p>
                <p className="likes-num">&#10084; {likes}</p> 
                <p className="comments-btn" onClick={() => toggleComments()}>{commentsTxt}</p>
            </>
            <>
                { displayComments && <CommentList artistComments={comments} /> }
                <p className="add-comment-btn" onClick={() => toggleCommentForm()}>Add comment</p>
                {commentFormDisplay}
            </>
        </div>
    )
}