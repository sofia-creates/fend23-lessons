import AuthorCard from "@/components/AuthorCard";

export default async function AuthorListPage(){
    const authors = await fetch("http://localhost:3000/api/authors")
    .then((response) => response.json())
    .catch((error) => {
      console.log("failed to get books", error);
    });

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
        {/* nedan ett ex på optional chaining */}
      AUTHORS: {authors && authors.map(author => {
        return (
            // <pre>
            //     {JSON.stringify(author, null, 2)}
            // </pre>
            <AuthorCard author={author} />
          
        )
      })} 
        </main>
    )
}