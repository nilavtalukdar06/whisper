import connectToDb from "@/db/mongodb";
import settingsModel from "@/model/settings.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { user_id } = await request.json();
    if (!user_id) {
      return NextResponse.json(
        {
          message: "user_id is not present",
        },
        { status: 400 }
      );
    }
    await connectToDb();
    const result = await settingsModel.findOne({ user_id: user_id });
    if (result) {
      return NextResponse.json({
        message: "settings are already present",
      });
    } else {
      await settingsModel.create({ user_id: user_id });
      return NextResponse.json(
        {
          message: "settings created successfully",
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        message: `internal server error, error: ${error.message}`,
      },
      { status: 500 }
    );
  }
}
