import {useState} from 'react'

export default function ArtistForm(props) {
    const initInputs = { artistName: "", description: "" }
    const [artist, setArtist] = useState(initInputs)
    const {addArtist} = props

    function handleChange(e) {
        const {name, value} = e.target
        setArtist(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addArtist(artist)
        setArtist(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Artist/Group name"
                name="artistName"
                value={artist.artistName}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="What do you like about this artist/group?"
                name="description"
                value={artist.description}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}