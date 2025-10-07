import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConnection } from "@/app/dbConnection";
import jwt from "jsonwebtoken";
const collectionName = "usersData";

    //   const data = { userId: userid, password: pass };
export async function POST(req) {
    console.log("LOGIN ROUTE HIT\n");
    try {
        const { userId, password } = await req.json();
        console.log("USER RECEIVED=",userId);
        console.log("PASSWORD RECEIVED=",password)
        const db = await dbConnection();
        const collection = db.collection(collectionName);

        const userRecord = await collection.findOne({ user: userId });
        console.log("RECORD RECEIVED=",userRecord);
        if (!userRecord) {
            console.log("HERE IN FIRST");
            return NextResponse.json({ message: "Invalid Credentials", flag: 0 }, { status: 400 });
        }

        const isMatch = await bcrypt.compare(password, userRecord.passOfUser);
        if (!isMatch) {
            console.log("HERE SECONDDDDDDD");
            return NextResponse.json({ message: "Password does not match", flag: 0 }, { status: 400 });
        }

        // Use userRecord here, not an undefined variable "user"
        const payload = { userId: userRecord._id };

        // Ensure JWT_SECRET is defined
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET env variable is missing");
            return NextResponse.json({ message: "Server configuration error", flag: 0 }, { status: 500 });
        }
        console.log("SECRET KEY=",process.env.JWT_SECRET);
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

        return NextResponse.json({ tokenA: token, flag: 1, message: "Login Success" }, { status: 200 });

    } catch (err) {
        console.log("ERROR CAUGHT IN CATCH BLOCK:", err);
        return NextResponse.json({ message: "ERROR OCCURRED", flag: 0 }, { status: 500 });
    }
}
