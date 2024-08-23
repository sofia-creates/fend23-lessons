export default async function Home() {

  const books = await fetch("http://localhost:3000/api/books/")
    .then(response => response.json())
    .catch((error) => {
      console.log("failed to get books", error)
    })

  console.log("BOOKS IN FRONTEND", books)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      BACKEND
      {books && books.results.map(book => (
        <pre>
          {JSON.stringify(book,null,2)}
        </pre>
      ))}
    </main> 
  );
}
