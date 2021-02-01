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
            .catch(err => console.error(err.response.data.errMsg))
    }

    function addComment(comment, artistId) {
        userAxios.post(`/protected/artists/comments/${artistId}`, comment)
            .then(res => {
                setArtistComments(comments => [...comments, res.data])
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    function getComments(artistId) {
        userAxios.get(`/protected/artists/comments/${artistId}`)
            .then(res => {
                setArtistComments(res.data)
            })
            .catch(err => console.err(err.response.data.errMsg))
    }

    return (
        <HomeContext.Provider 
            value={{
                allUserArtists,
                artistComments,
                getAllArtists,
                addComment,
                getComments
            }}
        >
            {props.children}
        </HomeContext.Provider>
    )
} 