import settingsModel from "@/model/settings.model";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    const { user_id, accept_messages } = await request.json();
    if (!user_id) {
      return NextResponse.json({
        message: "user id is not present",
      });
    }
    const result = await settingsModel.findOne({ user_id: user_id });
    if (!result) {
      return NextResponse.json({
        message: "settings not found",
      });
    } else {
      await settingsModel.updateOne(
        { user_id: user_id },
        { $set: { accept_messages: accept_messages } }
      );
      return NextResponse.json({
        message: "settings updated successfully",
      });
    }
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({
      message: `internal server error: ${error}`,
    });
  }
}
