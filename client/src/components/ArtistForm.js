import {useState} from 'react'

export default function ArtistForm() {
    const [artist, setArtist] = useState({ name: "", description: "" })

    function handleChange(e) {
        const {name, value} = e.target
        setArtist(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        // addArtist function
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Artist/Group name"
                name="name"
                value={artist.name}
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