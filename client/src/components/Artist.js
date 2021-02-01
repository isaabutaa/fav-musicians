import {useState, useContext} from 'react'
import {HomeContext} from '../context/HomeProvider.js'
import ArtistForm from './ArtistForm.js'

export default function Artist(props) {
    const [openEditFormToggle, setOpenEditFormToggle] = useState(false)
    const {getComments} = useContext(HomeContext)
    const {artistName, description, likes, _id, editArtist, deleteArtist} = props

    const commentsBtn = <button onClick={() => getComments()}>See Comments</button>
    const editDeleteBtns = (
        <>
            <button onClick={() => setOpenEditFormToggle(prev => !prev)}>Edit</button> 
            <button onClick={() => deleteArtist(_id)}>Delete</button>
        </>
    )
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
                { editArtist && deleteArtist ? editDeleteBtns : commentsBtn }
            </div>
    return (
        <div>
            {formDisplay}
        </div>
    )
}