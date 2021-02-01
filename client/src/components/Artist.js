import {useState, useContext} from 'react'
import {HomeContext} from '../context/HomeProvider.js'
import ArtistForm from './ArtistForm.js'
import CommentForm from './CommentForm.js'
import CommentList from './CommentList.js'

export default function Artist(props) {
    const [openEditFormToggle, setOpenEditFormToggle] = useState(false)
    const [openCommentFormToggle, setOpenCommentFormToggle] = useState(false)
    const {getComments, addComment, artistComments} = useContext(HomeContext)
    const {artistName, description, likes, _id, editArtist, deleteArtist} = props
    const addCommentBtn = <button onClick={() => setOpenCommentFormToggle(!openCommentFormToggle)}>Add Comment</button>
    const seeCommentsBtn = <button onClick={() => getComments(_id)}>See Comments</button>
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
                            {addCommentBtn}
                            {seeCommentsBtn}
                        </>
                }
                <CommentList artistId={_id} artistComments={artistComments} />
            </div>
    const commentFormDisplay = openCommentFormToggle && <CommentForm artistId={_id} addComment={addComment} />
    return (
        <div>
            {artistFormDisplay}
            {commentFormDisplay}
        </div>
    )
}