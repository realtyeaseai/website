import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Validate input fields
  if (!name || !email || !message) {
    return NextResponse.json({
      msg: ["All fields (name, email, message) are required."],
      success: false,
    });
  }

  try {
    await connectDB();
  } catch {
    return NextResponse.json({
      msg: ["Database connection failed."],
      success: false,
    });
  }

  try {
    await Contact.create({ name, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = [];
      for (const e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."], success: false });
    }
  }
}
