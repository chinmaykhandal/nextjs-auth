import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    console.log(email);

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User already exist" },
        { status: 400 }
      );
    }

    await sendEmail({email,emailType: "RESET",userId: user._id});
    return NextResponse.json({
        message: "mail sent successfully",
        success: true,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
