import { useState, useContext } from 'react'
import { HomeContext } from '../context/HomeProvider.js'
import CommentForm from './CommentForm.js'
import CommentList from './CommentList.js'

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
    const commentsTxt = displayComments ? "Hide comments" : "View comments"
    const commentFormDisplay = openCommentFormToggle && <CommentForm artistId={_id} addComment={addComment} toggleForm={toggleCommentForm} />
    return (
        <div className="artist">
            <>
                <h3>@{username}</h3>
                <h3 className="artist-name">{artistName}</h3>
                <p>{description}</p>
                <p>Likes: {likes}</p> 
                <button onClick={() => toggleLikeBtn()}>{likeTxt}</button>
                <button onClick={() => toggleCommentForm()}>Add comment</button>
                <p onClick={() => toggleComments()} style={{display: "inline-block", marginLeft: "5px"}}>{commentsTxt}</p>
            </>
            <>
                { displayComments && <CommentList artistComments={comments} /> }
                {commentFormDisplay}
            </>
        </div>
    )
}