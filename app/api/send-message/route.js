import connectToDb from "@/db/mongodb";
import messageModel from "@/model/message.model";
import settingsModel from "@/model/settings.model";
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
    const result = await settingsModel.findOne({ user_id: user_id });
    if (result.accept_messages === false) {
      return NextResponse.json(
        {
          message: "user is not longer accepting messages",
          can_send_message: "no",
        },
        { status: 200 }
      );
    }

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
