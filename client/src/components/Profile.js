import { useEffect } from 'react'
import ArtistForm from './ArtistForm.js'
import ArtistList from './ArtistList.js'

export default function Profile(props) {
    const { user: {username}, artists, getUserArtists, addArtist} = props

    useEffect(() => {
        getUserArtists()
    }, [])

    return (
        <div>
            <h1>Hello, {username}</h1>
            <ArtistForm addArtist={addArtist} />
            <ArtistList artists={artists} />
        </div>
    )
}