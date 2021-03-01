import * as React from 'react'
import {HomeContext} from '../context/HomeProvider.js'
import PublicArtist from './PublicArtist.js'

const {useContext, useEffect} = React

export default function Home() {
    const {getAllArtists, allUserArtists} = useContext(HomeContext)
    
    useEffect(() => {
        getAllArtists()
    }, [])

    const sortedByLikes = allUserArtists.sort((a, b) =>  b.likes - a.likes)
    const mappedArtists = sortedByLikes.map(artist => <PublicArtist key={artist._id} {...artist} />)
    return (
        <div className="public-list">
            { allUserArtists.length >= 1 && <h2 style={{textAlign: "center"}}>Like and comment on other users' posts below!</h2>}
            {mappedArtists}
        </div>
    )
}