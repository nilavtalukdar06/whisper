import connectToDb from "@/db/mongodb";
import messageModel from "@/model/message.model";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const { message_id } = await request.json();
    if (!message_id) {
      return NextResponse.json(
        {
          message: "message id is not present",
        },
        { status: 400 }
      );
    }
    await connectToDb();
    await messageModel.deleteOne({ _id: message_id });
    return NextResponse.json(
      {
        message: "message deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        message: `internal server error: ${error}`,
      },
      { status: 500 }
    );
  }
}
