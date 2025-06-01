import connectToDb from "@/db/mongodb";
import messageModel from "@/model/message.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { message, user_id } = await request.json();
    if (!message || !user_id) {
      return NextResponse.json(
        {
          message: "incomplete fields",
        },
        { status: 400 }
      );
    }
    await connectToDb();
    await messageModel.create({
      content: message,
      sentTo: user_id,
    });
    return NextResponse.json(
      {
        message: "message sent",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: `internal server error: ${error.message}`,
      },
      { status: 500 }
    );
  }
}
