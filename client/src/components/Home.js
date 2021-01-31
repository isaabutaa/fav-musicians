import * as React from 'react'
import {userAxios} from '../context/userAxios.js'
import Artist from './Artist.js'

const {useState, useEffect} = React

export default function Home() {
    const [allUserArtists, setAllUserArtists] = useState([])

    useEffect(() => {
        getAllArtists()
    }, [])

    function getAllArtists() {
        userAxios.get("/protected/artists")
            .then(({data}) => {
                setAllUserArtists(data)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            {/* Home feed - see other users' posts and be able to upvote/downvote a post. Maybe have ability to click on another users public profile?*/}
            <h1>Home page. See other users' posts</h1>
            {allUserArtists.map(artist => <Artist key={artist._id} {...artist} />)}
            {/* iabutaa's favorite artists:
                <likes> alicia keys - I love Alicia Keys' music because it's very honest. I don't listen to a lot of R&B, but I do listen to her.
                    <comment1 by @user: Yeah I love her music too>
                    <comment2 by @user2: If I ain't got you, baby!>
                <likes> yasmine hamdan - بحب موسيقى ياسمين لأنها تغني بطريقة حلوة
                <likes> earth, wind, and fire - the best dance music!
            */}
        </div>
    )
}