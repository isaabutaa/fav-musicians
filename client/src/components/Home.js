import * as React from 'react'
import {HomeContext} from '../context/HomeProvider.js'
import Artist from './Artist.js'

const {useContext, useEffect} = React

export default function Home() {
    const {getAllArtists, allUserArtists} = useContext(HomeContext)
    
    useEffect(() => {
        getAllArtists()
    }, [])
    
    const sortedArtists = allUserArtists.sort((a, b) =>  b.likes - a.likes)
    const mappedArtists = sortedArtists.map(artist => <Artist key={artist._id} {...artist} />)
    return (
        <div>
            <h1>Home page. See other users' posts</h1>
            {mappedArtists}
        </div>
    )
}