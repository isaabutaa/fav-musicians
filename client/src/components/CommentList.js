
export default function CommentList(props) {
    const { artistComments } = props
    const comments = artistComments.map(comment => <li key={comment._id}>{comment.comment}</li>)
    return (
        <ol className="comment-list">
            {comments}
        </ol>
    )
}