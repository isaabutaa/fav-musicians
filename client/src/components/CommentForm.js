import {useState} from 'react'

export default function CommentForm() {
    const [comment, setComment] = useState("Add comment here")

    function handleChange(e) {
        setComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        // addComment
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                type="text" 
                name="comment"
                value={comment}
                onChange={handleChange}
            />
            <button>Submit comment</button>
        </form>
    )
}