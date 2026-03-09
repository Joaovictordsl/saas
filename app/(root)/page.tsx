import Hello from "@/components/hello";

const Home = () => {

    return (
        <main>
            <div className="grid grid-col-3 gap-4 antialiased">
                <div className="h-64 antialiased">
                    <img src="/images/porsche-911.png" alt="Porsche" className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity antialiased" />
                </div>
                <div className="h-64 antialiased">
                    <img src="/images/911-carrera-gts-2025.jpg" alt="Porsche" className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity antialiased" />
                </div>
                <div className="h-64 antialiased">
                    <img src="/images/Porsche-911-Carrera-GTS-13.webp" alt="Porsche" className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity antialiased" />
                </div>
            </div>
        </main>
    );
}

async function Page() {
    const response = await fetch("http://localhost:3000/books");
    const books = await response.json();

    return (
        <main>
            <code>{JSON.stringify(books, null, 2)}</code>
        </main>
    )
}

export default Home