import Hello from "@/components/hello";

const Home = () => {

    return (
        <main>
            <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-x1">Welcome to nextJS!</div>
            <Hello/>
        </main>
    );
}

async function Page(){
    const response = await fetch("http://localhost:3000/books");
    const books = await response.json();

    return (
        <main>
            <code>{JSON.stringify(books, null, 2)}</code>
        </main>
    )
}

export default Home