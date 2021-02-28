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
        <div>
            {mappedArtists}
        </div>
    )
}