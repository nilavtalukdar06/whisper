import connectToDb from "@/db/mongodb";
import settingsModel from "@/model/settings.model";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const user_id = searchParams.get("user_id");

    if (!user_id) {
      return NextResponse.json(
        {
          message: "user_id is required",
        },
        { status: 400 }
      );
    }

    await connectToDb();
    const settings = await settingsModel.findOne({ user_id: user_id });

    if (!settings) {
      return NextResponse.json(
        {
          message: "settings not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        settings: settings,
      },
      { status: 200 }
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
