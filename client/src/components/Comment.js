export default function Comment(props) {
    const { comment, user: { username } } = props
    return (
        <li>
            <p>@{username} - {comment}</p>
        </li>
    )
}