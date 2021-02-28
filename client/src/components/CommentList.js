import Comment from './Comment.js'

export default function CommentList(props) {
    const { artistComments } = props
    const comments = artistComments.map(comment => <Comment key={comment._id} {...comment} />)
    return (
        <ol className="comment-list">
            {comments}
        </ol>
    )
}