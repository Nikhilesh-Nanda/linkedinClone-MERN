import { dbConnection } from "@/app/dbConnection";
import { NextResponse } from "next/server";

const collectionName = "postsByUser";

export async function GET() {
  try {
    const db = await dbConnection();
    const collection = db.collection(collectionName);

    const result = await collection.find().toArray();
    return NextResponse.json(result);
  } catch (err) {
    console.log("ERROR CAUGHT:", err);
  }
}

export async function POST(req) {
  try {
    const db = await dbConnection();
    const collection = db.collection(collectionName);
    const rec = await req.json();
    const { type, ...rem } = rec;

    if (type === "newPost") {
      console.log("NEW POST RECEIVED\n");
      console.log(rec);
      // Insert new post as before, assuming new posts aren't duplicates
      await collection.insertOne(rec);
      return NextResponse.json({ message: "NEW POST INSERTED" }, { status: 201 });
    }

    // For bulk insertions (videoDetails or multiple posts), perform upsert per item
    console.log("Data received");
    for (const item of rec) {
      await collection.updateOne(
        { id: item.id }, // Use a unique field to filter existing docs
        { $set: item },          // Update fields with current item data
        { upsert: true }         // Insert if no document matches
      );
    }

    return NextResponse.json({ message: "DATA UPSERTED" }, { status: 200 });
  } catch (err) {
    console.log("ERROR CAUGHT:", err);
    return NextResponse.json({ message: "ERROR OCCURED" }, { status: 500 });
  }
}
