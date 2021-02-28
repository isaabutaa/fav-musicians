import { useState, useContext } from 'react'
import { HomeContext } from '../context/HomeProvider.js'
import ArtistForm from './ArtistForm.js'
import CommentForm from './CommentForm.js'
import CommentList from './CommentList.js'

export default function Artist(props) {
    const [openEditFormToggle, setOpenEditFormToggle] = useState(false)
    const [openCommentFormToggle, setOpenCommentFormToggle] = useState(false)
    const [likeOrDislike, setLikeOrDislike] = useState(true)
    const {likePost, unlikePost, addComment} = useContext(HomeContext)
    const {artistName, description, comments, likes, _id, editArtist, deleteArtist} = props

    function toggleLikeBtn() {
        if(likeOrDislike) {
            likePost(_id)
            setLikeOrDislike(!likeOrDislike)
        } else {
            unlikePost(_id)
            setLikeOrDislike(!likeOrDislike)
        }
    }

    function toggleCommentForm() {
        setOpenCommentFormToggle(!openCommentFormToggle)
    }

    const likeBtn = <button onClick={() => toggleLikeBtn()}>{likeOrDislike ? "Like" : "Dislike"}</button>
    const addCommentBtn = <button onClick={() => toggleCommentForm()}>Add Comment</button>
    const seeCommentsBtn = <button>See Comments</button>
    const editDeleteBtns = (
        <>
            <button onClick={() => setOpenEditFormToggle(prev => !prev)}>Edit</button> 
            <button onClick={() => deleteArtist(_id)}>Delete</button>
        </>
    )
    const artistFormDisplay = openEditFormToggle 
        ? 
            <ArtistForm
                artistName={artistName}
                description={description}
                submit={editArtist} 
                _id={_id}
            /> 
        : 
            <div className="artist">
                <h2 className="artist-name">{artistName}</h2>
                <p>{description}</p>
                <p>Likes: {likes}</p>
                { 
                    editArtist && deleteArtist ? 
                        editDeleteBtns 
                    : 
                        <>
                            {likeBtn}
                            {addCommentBtn}
                            {seeCommentsBtn}
                        </>
                }
                <CommentList artistComments={comments} />
            </div>
    const commentFormDisplay = openCommentFormToggle && <CommentForm artistId={_id} addComment={addComment} toggleForm={toggleCommentForm} />
    return (
        <div>
            {artistFormDisplay}
            {commentFormDisplay}
        </div>
    )
}