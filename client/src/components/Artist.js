export default function Artist(props) {
    const {artistName, description, likes} = props
    return (
        <div>
            <h2>{artistName}</h2>
            <p>{description}</p>
            <p>Likes: {likes}</p>
        </div>
    )
}