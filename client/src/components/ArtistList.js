import Artist from './Artist.js'

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
        <div>
            {mappedArtists}
        </div>
    )
}