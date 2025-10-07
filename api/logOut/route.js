import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ message: "WELCOME TO THE LOGOUT BACKEND ROUTE" });
}
export async function POST(req) {
  try {
    console.log("LOGOUT ROUTE HIT\n");
    const data = await req.json();
    const { f } = data;
    console.log("FLAG=", f);
    return NextResponse.json({ message: "LOG OUT SUCCESS" }, { status: 200 });
  } catch (error) {
    console.log("ERROR CAUGHT:", error);
    return NextResponse.json({ message: "LOG OUT FAILURE" }, { status: 400 });
  }
}
