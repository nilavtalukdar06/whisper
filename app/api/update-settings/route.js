import settingsModel from "@/model/settings.model";
import { NextResponse } from "next/server";
import connectToDb from "@/db/mongodb";

export async function PUT(request) {
  try {
    await connectToDb();
    const { user_id, accept_messages } = await request.json();

    if (!user_id || accept_messages === undefined) {
      return NextResponse.json(
        {
          message: "fields are incomplete",
        },
        { status: 400 }
      );
    }

    const result = await settingsModel.findOne({ user_id: user_id });
    if (!result) {
      return NextResponse.json(
        {
          message: "settings not found",
        },
        { status: 404 }
      );
    }

    const updatedSettings = await settingsModel.findOneAndUpdate(
      { user_id: user_id },
      { $set: { accept_messages: accept_messages } },
      { new: true }
    );

    return NextResponse.json(
      {
        message: "settings updated successfully",
        settings: updatedSettings,
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
