import { useState } from 'react'
import ArtistForm from './ArtistForm.js'
import CommentList from './CommentList.js'

export default function Artist(props) {
    const [openEditFormToggle, setOpenEditFormToggle] = useState(false)
    const {artistName, description, comments, likes, _id, editArtist, deleteArtist} = props
    
    return (
        <div>
            {
                openEditFormToggle ? 
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
                        <button onClick={() => setOpenEditFormToggle(prev => !prev)}>Edit</button> 
                        <button onClick={() => deleteArtist(_id)}>Delete</button>
                        <CommentList artistComments={comments} />
                    </div>
            }
        </div>
    )
}