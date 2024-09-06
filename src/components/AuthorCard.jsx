import Link from "next/link";

export default function AuthorCard(props) {
  const { author } = props;
  return (
    <Link href={`/authors/${author.id}`}>
      <div>
        <p>
          <strong>{author.name}</strong>
        </p>
        <p>
          <small>
            <i>{author.yearOfBirth}</i>
          </small>
        </p>
      </div>
    </Link>
  );
}
