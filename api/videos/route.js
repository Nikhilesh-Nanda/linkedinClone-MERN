import { NextResponse } from "next/server";
import { dbConnection } from "@/app/dbConnection";
const collectionName = "videosContent";
export async function GET() {
  return NextResponse.json({ message: "WELCOME TO THE VIDEOS ROUTE" });
}
export async function POST(req) {
  try {
    const db = await dbConnection();
    const collection = db.collection(collectionName);

    const res = await req.json();
    console.log("DATA RECEIVED\n");
    console.log(res);
    await collection.insertMany(res);
    return NextResponse.json({ message: "DATA RECEIVED" }, { status: 200 });
  } catch (err) {
    console.log("ERROR CAUGHT:", err);
    return NextResponse.json({ message: "ERROR OCCURED" }, { status: 404 });
  }
}
