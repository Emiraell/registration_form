import UserModel from "@/modules/Modules";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

const connectDB = async () => {
  const res = mongoose.connect(
    "mongodb+srv://ayfDatabase:Barca6psg1@atlascluster.fhchgtl.mongodb.net/lafia"
  );
};
connectDB();
export async function GET() {
  await UserModel.find({});
  return NextResponse.json({ msg: "data fetched" });
}

export async function POST(request: NextRequest) {
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

  return NextResponse.json({ msg: "Details submitted" });
}
