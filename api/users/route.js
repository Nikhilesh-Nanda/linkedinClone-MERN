import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { dbConnection } from "@/app/dbConnection";
const collectionName = "usersData";
export async function GET() {
  return NextResponse.json({ message: "Welcome to this page" });
}
export async function POST(req) {
  try {
    const db = await dbConnection();
    const collection = db.collection(collectionName);

    const { id, uName, pass, add, phoneNo, aPhoneNo, dob, genderUser } =
      await req.json();
    console.log("data received");

    const receivedata = {
      typeOfUser: "newUser",
      user: id,
      nameOfUser: uName,
      passOfUser:pass,
      addressOfUser: add,
      phoneUser: phoneNo,
      altPhoneUser: aPhoneNo,
      dateOfBirth: dob,
      gender: genderUser,
    };
    const userTofind = await collection.find( {user:id} ).toArra;
    console.log("hereeeee")
    if (userTofind) {
      console.log("useeer eroor")
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    if (pass.length < 6) {
      console.log("pass error")
      return NextResponse.json(
        { message: "Password is less than 6 characters" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(receivedata.passOfUser, 10);
    console.log("HASHED PASSWORD=",hashedPassword);
    const newdata = {
      typeOfUser: "newUser",
      user: id,
      nameOfUser: uName,
      passOfUser:hashedPassword,
      addressOfUser: add,
      phoneUser: phoneNo,
      altPhoneUser: aPhoneNo,
      dateOfBirth: dob,
      gender: genderUser,
    };
    await collection.insertOne(newdata);

    return NextResponse.json(
      { message: "received and inserted to DB" },
      { status: 200 }
    );
  } catch (err) {
    console.log("Error caught in catch block:", err);
    return NextResponse.json({ message: "error occured" });
  }
}

// const payload = {id:user_id};
// const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1d"})
