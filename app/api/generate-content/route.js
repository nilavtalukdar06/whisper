import main from "@/helper/gemini";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await main();
    if (!result) {
      return NextResponse.json(
        {
          message: "failed to generate content with ai",
        },
        { status: 403 }
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
    console.error(error);
    return NextResponse.json(
      {
        message: `internal server error, error: ${error.message}`,
      },
      { status: 500 }
    );
  }
}
