
export default function CommentList(props) {
    const { artistComments } = props
    const comments = artistComments.map(comment => <p key={comment._id}>{comment.comment}</p>)
    return (
        <div className="comment-list">
            {comments}
        </div>
    )
}