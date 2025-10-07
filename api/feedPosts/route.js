import { dbConnection } from "@/app/dbConnection";
import { NextResponse } from "next/server";
const collectionName = "postsInFeed";
export async function POST(req) {
  try {
    const db = await dbConnection();
    const collection = db.collection(collectionName);

    const recPosts = await req.json();

    if (recPosts.type === "newPost") {
      await collection.updateOne(
        { postId: recPosts.postId },       // unique identifier field
        { $setOnInsert: recPosts },
        { upsert: true }
      );
      return NextResponse.json({ message: "NEW POST INSERTED / UPDATED" }, { status: 201 });
    } else {
      // Process each post individually
      for (const post of recPosts) {
        await collection.updateOne(
          { postId: post.postId },
          { $setOnInsert: post },
          { upsert: true }
        );
      }
      return NextResponse.json({ message: "Data received with upsert" }, { status: 200 });
    }
  } catch (err) {
    console.log("ERROR:", err);
    return NextResponse.json({ message: "ERROR OCCURRED" });
  }
}

