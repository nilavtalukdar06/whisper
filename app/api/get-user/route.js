import { NextResponse } from "next/server";
const { MongoClient, ObjectId } = require("mongodb");

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const user_id = searchParams.get("user_id");
    if (!user_id) {
      return NextResponse.json(
        {
          message: "user id is not present",
        },
        { status: 400 }
      );
    }
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const user = await db
      .collection("user")
      .findOne({ _id: new ObjectId(user_id) });
    if (!user) {
      return NextResponse.json(
        {
          message: "user not found",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: user,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: `internal server error, error: ${error}`,
      },
      { status: 500 }
    );
  }
}
