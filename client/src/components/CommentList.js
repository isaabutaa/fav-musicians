
export default function CommentList(props) {
    const {artistId, artistComments} = props
    const filteredComments = artistComments.filter(comment => comment.artist === artistId)
    const renderedComments = filteredComments.map(comment => <p key={comment._id}>{comment.comment}</p>)
    return (
        <div className="comment-list">
            {renderedComments}
        </div>
    )
}