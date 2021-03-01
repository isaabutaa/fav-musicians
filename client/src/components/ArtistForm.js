import {useState} from 'react'

export default function ArtistForm(props) {
    const initInputs = { 
        artistName: props.artistName || "",
        description: props.description || "" 
    }
    const [artist, setArtist] = useState(initInputs)
    const {submit, _id, toggleEditForm} = props

    function handleChange(e) {
        const {name, value} = e.target
        setArtist(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        submit(artist, _id)
        setArtist(initInputs)
        toggleEditForm()
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Artist/Group name"
                name="artistName"
                value={artist.artistName}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="What do you like about them?"
                name="description"
                value={artist.description}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}