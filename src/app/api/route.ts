import UserModel from "@/modules/Modules";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

const connectDB = async () => {
  const res = mongoose.connect(
    "mongodb+srv://ayfDatabase:Barca6psg1@atlascluster.fhchgtl.mongodb.net/lafia"
  );
  console.log("connected");
};
connectDB();
export async function GET() {
  return NextResponse.json("backend");
}

export async function POST(request: NextRequest) {
  const {
    age,
    archdeaconry,
    church,
    diocese,
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
    diocese,
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
