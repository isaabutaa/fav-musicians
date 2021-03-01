import { userAxios } from './userAxios.js'
import { useState, createContext } from 'react'

export const HomeContext = createContext()

export default function HomeProvider(props) {
    const [allUserArtists, setAllUserArtists] = useState([])

    function getAllArtists() {
        userAxios.get("/protected/artists")
            .then(({data}) => {
                setAllUserArtists(data)
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    function addComment(comment, artistId) {
        userAxios.post(`/protected/comments/${artistId}`, comment)
            .then(res => setAllUserArtists(prevArtists => prevArtists.map(artist => {
                if(artist._id !== artistId) {
                    return artist
                } 
                return {
                    ...artist,
                    comments: [...artist.comments, res.data]
                }
            })))
            .catch(err => console.error(err.response.data.errMsg))
    }

    function likePost(artistId) {
        userAxios.put(`/protected/artists/upvote/${artistId}`)
            .then(res => {
                setAllUserArtists(prevArtists => prevArtists.map(artist => {
                    if(artist._id !== artistId) {
                        return artist
                    }
                    return {
                        ...artist,
                        likes: res.data.likes
                    }
                }))
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    function unlikePost(artistId) {
        userAxios.put(`/protected/artists/downvote/${artistId}`)
            .then(res => {
                setAllUserArtists(artists => artists.map(artist => {
                    if(artist._id !== artistId) return artist
                    return {
                        ...artist,
                        likes: res.data.likes
                    }
                }))
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    return (
        <HomeContext.Provider 
            value={{
                allUserArtists,
                getAllArtists,
                addComment,
                likePost,
                unlikePost
            }}
        >
            {props.children}
        </HomeContext.Provider>
    )
} 