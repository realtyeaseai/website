// app/api/schedule-call/route.ts
import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

type ScheduleCallData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const data: ScheduleCallData = await req.json();

    const required = ["name", "email", "phone", "date", "time", "message"];
    for (const field of required) {
      if (!data[field as keyof ScheduleCallData]) {
        return NextResponse.json({ error: `${field} is required.` }, { status: 400 });
      }
    }

    const client = await connectToDatabase();
    const db = client.db; // Correctly access the "test" database
    const collection = db.collection("scheduled_calls");

    await collection.insertOne({
      ...data,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error in POST /api/schedule-call:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
