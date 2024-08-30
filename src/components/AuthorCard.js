export default function AuthorCard(props){
    return (
        <div>
        <p>
            <strong>
                {author.name}
            </strong>
        </p>
        <p>
            <small>
                {author.yearOfBirth}
            </small>
        </p>
    </div>
    )
}