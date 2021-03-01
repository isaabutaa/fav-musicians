import {useState} from 'react'

export default function CommentForm(props) {
    const [comment, setComment] = useState({ comment: "" })
    const {addComment, artistId, toggleForm} = props

    function handleChange(e) {
        const {name, value} = e.target
        setComment(comment => ({...comment, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addComment(comment, artistId)
        setComment({ comment: "" })
        toggleForm()
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="add comment here"
                name="comment"
                value={comment.comment}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}