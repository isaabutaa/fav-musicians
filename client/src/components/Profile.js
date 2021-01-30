import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.js'
import ArtistForm from './ArtistForm.js'
import ArtistList from './ArtistList.js'

export default function Profile() {
    const { user: {username}, artists, getUserArtists, addArtist, editArtist, deleteArtist } = useContext(UserContext)

    useEffect(() => {
        getUserArtists()
    }, []) // missing dependency? how do I make it so I don't keep making API calls?

    return (
        <div>
            <h1>Hello, {username}</h1>
            <ArtistForm submit={addArtist} />
            <ArtistList 
                artists={artists}
                editArtist={editArtist}
                deleteArtist={deleteArtist} 
            />
        </div>
    )
}