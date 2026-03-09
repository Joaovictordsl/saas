import cars from "../db";

export async function GET(){
    return Response.json(cars);
}

export async function POST(request: Request){
    const car = await request.json();
    cars.push(car);

    return Response.json(cars);
}

