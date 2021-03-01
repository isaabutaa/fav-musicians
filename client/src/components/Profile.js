import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.js'
import ArtistForm from './ArtistForm.js'
import ArtistList from './ArtistList.js'
import '../css/Profile.css'

export default function Profile() {
    const { user: { username }, artists, getUserArtists, addArtist, editArtist, deleteArtist } = useContext(UserContext)

    useEffect(() => {
        getUserArtists()
    }, []) // missing dependency? how do I make it so I don't keep making API calls?

    return (
        <div>
            <h1 className="user-greeting">Hello, <span className="profile-username">{username}</span></h1>
            <h3 style={{textAlign: "center", marginBottom: 0}}>Write a new post:</h3>
            <ArtistForm submit={addArtist} />
            <ArtistList 
                artists={artists}
                editArtist={editArtist}
                deleteArtist={deleteArtist} 
            />
        </div>
    )
}