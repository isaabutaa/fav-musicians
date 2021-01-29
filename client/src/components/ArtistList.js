import Artist from './Artist.js'

export default function ArtistList(props) {
    const {artists} = props

    const artistComponents = artists.map(artist => <Artist key={artist._id} {...artist} />)
    return (
        <div>
            {artistComponents}
        </div>
    )
}