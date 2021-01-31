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
            <div className="artist">
                <h2 className="artist-name">{artistName}</h2>
                <p>{description}</p>
                <p>Likes: {likes}</p>
                { editArtist && deleteArtist &&
                    <>
                        <button onClick={() => setOpenEditFormToggle(prev => !prev)}>Edit</button> 
                        <button onClick={() => deleteArtist(_id)}>Delete</button>
                    </>
                }
            </div>
    return (
        <div>
            {formDisplay}
        </div>
    )
}