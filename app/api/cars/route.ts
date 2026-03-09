import cars from "../db";

export async function GET(){
    return Response.json(cars);
}

export async function POST(request: Request){
    const book = await request.json();
    cars.push(book);

    return Response.json(cars);
}

