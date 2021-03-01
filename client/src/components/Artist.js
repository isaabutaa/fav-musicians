import { useState } from 'react'
import ArtistForm from './ArtistForm.js'
import CommentList from './CommentList.js'
import '../css/Artist.css'

export default function Artist(props) {
    const [openEditFormToggle, setOpenEditFormToggle] = useState(false)
    const [viewCommments, setViewComments] = useState(false)
    const {artistName, description, comments, likes, _id, editArtist, deleteArtist} = props
    const toggleEditForm = () => setOpenEditFormToggle(!openEditFormToggle)
    const toggleComments = () => setViewComments(!viewCommments)
    const spanText = viewCommments ? <span>&#9650;</span> : <span>&#9660;</span>
    return (
        <>
            {
                openEditFormToggle ? 
                    <ArtistForm
                        artistName={artistName}
                        description={description}
                        submit={editArtist} 
                        _id={_id}
                        toggleEditForm={toggleEditForm}
                    /> 
                : 
                    <div className="artist">
                        <div className="post-text">
                            <h4 className="artist-name">{artistName}</h4>
                            <p className="artist-description"> - {description}</p>
                        </div>
                        <p className="likes">Likes: {likes}</p>
                        <p className="edit-x-btn" onClick={toggleEditForm}>Edit</p> 
                        <p className="edit-x-btn" onClick={() => deleteArtist(_id)}>Delete</p>
                        <p className="comments-p" onClick={toggleComments}>Comments{spanText}</p>
                        { viewCommments && <CommentList artistComments={comments} /> }
                    </div>
            }
        </>
    )
}