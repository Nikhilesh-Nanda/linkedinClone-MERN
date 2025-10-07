import { NextResponse } from "next/server";
import { dbConnection } from "@/app/dbConnection";
const collectionName = "jobsApplied";
export async function GET() {
  try {
    const db = await dbConnection();
    const collection = db.collection(collectionName);

    const data = await collection.find().toArray();
    console.log(data);
    return NextResponse.json(data);
  } catch (err) {
    console.log("ERROR CAUGHT:", err);
    return NextResponse.json({ message: "ERROR OCCURED" }, { status: 400 });
  }
}
export async function POST(req) {
  try {
    const db = await dbConnection();
    const collection = db.collection(collectionName);

    const rec = await req.json();
    console.log("data received");
    console.log(rec);

    await collection.insertOne(rec);
    return NextResponse.json({ message: "Data received successfully" });
  } catch (err) {
    console.log("ERROR CAUGHT:", err);
    return NextResponse.json({ message: "ERROR OCCURED" }, { status: 400 });
  }
}
