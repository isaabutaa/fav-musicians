import Artist from './Artist.js'
import '../css/ArtistList.css'

export default function ArtistList(props) {
    const {artists, editArtist, deleteArtist} = props
    const sortedByLikes = artists.sort((a, b) => b.likes - a.likes)

    const mappedArtists = sortedByLikes.map(artist => (
        <Artist 
            key={artist._id} 
            {...artist} 
            editArtist={editArtist}
            deleteArtist={deleteArtist}
        />
    ))
    return (
        <div className="artist-list">
            { artists.length >= 1 && <h2 style={{textAlign: "center"}}>Your posts:</h2>}
            {mappedArtists}
        </div>
    )
}