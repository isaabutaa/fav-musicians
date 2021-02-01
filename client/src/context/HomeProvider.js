import { userAxios } from './userAxios.js'
import { useState, createContext } from 'react'
export const HomeContext = createContext()

export default function HomeProvider(props) {
    const [allUserArtists, setAllUserArtists] = useState([])
    const [artistComments, setArtistComments] = useState([])

    function getAllArtists() {
        userAxios.get("/protected/artists")
            .then(({data}) => {
                setAllUserArtists(data)
            })
            .catch(err => console.error(err))
    }

    function addComment(artistId, comment) {
        userAxios.post(`/protected/artists/comments/${artistId}`, comment)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    function getComments() {
        // get request
    }

    return (
        <HomeContext.Provider 
            value={{
                getAllArtists,
                allUserArtists,
                addComment,
                getComments
            }}
        >
            {props.children}
        </HomeContext.Provider>
    )
} 