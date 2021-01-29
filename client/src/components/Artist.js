import {useState} from 'react'
import ArtistForm from './ArtistForm.js'

export default function Artist(props) {
    const [openEditFormToggle, setOpenEditFormToggle] = useState(false)
    const {artistName, description, likes, _id, editArtist, deleteArtist} = props

    const formDisplay = openEditFormToggle 
        ? 
            <ArtistForm
                artistName={artistName}
                description={description}
                submit={editArtist} 
                _id={_id}
            /> 
        : 
            <>
                <h2>{artistName}</h2>
                <p>{description}</p>
                <p>Likes: {likes}</p>
                <button onClick={() => setOpenEditFormToggle(prev => !prev)}>Edit</button> 
                <button onClick={() => deleteArtist(_id)}>Delete</button>
            </>
    return (
        <div>
            {formDisplay}
        </div>
    )
}