import Artist from './Artist.js'

export default function ArtistList(props) {
    const {artists, editArtist, deleteArtist} = props

    const artistComponents = artists.map(artist => (
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