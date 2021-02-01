import Artist from './Artist.js'

export default function ArtistList(props) {
    const {artists, editArtist, deleteArtist} = props
    const sortedArtists = artists.sort((a, b) => {
        return b.likes - a.likes
    })

    const artistComponents = sortedArtists.map(artist => (
        <Artist 
            key={artist._id} 
            {...artist} 
            editArtist={editArtist}
            deleteArtist={deleteArtist}
        />
    ))
    return (
        <div>
            {artistComponents}
        </div>
    )
}