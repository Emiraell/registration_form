import UserModel from "@/modules/Modules";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

// connect to mongoose project database
const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGODB_KEY}`);
};

// call the function to connect on loading
connectDB();

export async function GET() {
  // fetch all data in the UserModel model
  const results = await UserModel.find({});

  // return data
  return NextResponse.json({ results: results });
}

export async function POST(request: NextRequest) {
  // user info to send to the database
  const {
    age,
    archdeaconry,
    church,
    competition,
    diocese,
    email,
    firstname,
    gender,
    middle,
    position,
    relationship,
    surname,
    unit,
  } = await request.json();

  await UserModel.create({
    age,
    archdeaconry,
    church,
    competition,
    diocese,
    email,
    firstname,
    gender,
    middle,
    position,
    relationship,
    surname,
    unit,
  });

  // return next response
  return NextResponse.json({ msg: "Details submitted" });
}
