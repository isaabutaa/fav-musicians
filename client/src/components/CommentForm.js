import {useState} from 'react'

export default function CommentForm(props) {
    const [comment, setComment] = useState("")
    const {addComment, artistId} = props

    function handleChange(e) {
        setComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addComment(comment, artistId)
        setComment("")
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="add comment here"
                name="comment"
                value={comment}
                onChange={handleChange}
            />
            <button>Submit comment</button>
        </form>
    )
}