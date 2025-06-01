import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { message } = await request.json();
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: `internal server error: ${error}`,
      },
      { status: 500 }
    );
  }
}
