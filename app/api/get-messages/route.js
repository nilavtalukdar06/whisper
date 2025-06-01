import connectToDb from "@/db/mongodb";
import messageModel from "@/model/message.model";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const user_id = searchParams.get("user_id");
    if (!user_id) {
      return NextResponse.json(
        {
          message: "user_id is not present",
        },
        { status: 400 }
      );
    }
    await connectToDb();
    const result = await messageModel.find({ sentTo: user_id });
    if (result.length === 0) {
      return NextResponse.json(
        {
          messages: "no messages found",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: result,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: `internal server error, error: ${error.message}`,
      },
      { status: 500 }
    );
  }
}
