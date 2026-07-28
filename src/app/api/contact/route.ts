import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, notes } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || apiKey === "re_your_resend_api_key_here") {
      console.warn("RESEND_API_KEY is not configured in .env.local yet.");
      return NextResponse.json({
        success: true,
        demoMode: true,
        message: "Inquiry received! Please set RESEND_API_KEY in .env.local to enable live email delivery.",
      });
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "SL-DevSolutions <onboarding@resend.dev>",
      to: ["devsolutionssl@gmail.com"],
      replyTo: email,
      subject: `🔥 New Client Lead: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0284c7; margin-top: 0; margin-bottom: 8px;">New Client Inquiry</h2>
          <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">A new lead has submitted a message on the <strong>SL-DevSolutions</strong> website.</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          
          <div style="margin-bottom: 16px;">
            <strong style="color: #0f172a; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Client Name:</strong>
            <span style="color: #334155; font-size: 16px; font-weight: 600;">${name}</span>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #0f172a; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Client Work Email:</strong>
            <a href="mailto:${email}" style="color: #0284c7; font-size: 16px; font-weight: bold; text-decoration: none;">${email}</a>
          </div>

          <div style="margin-bottom: 24px;">
            <strong style="color: #0f172a; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Project Goals & Notes:</strong>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${notes || "No additional notes provided."}</div>
          </div>

          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="color: #94a3b8; font-size: 12px; text-align: center; margin: 0;">SL-DevSolutions Contact Route • Direct Email Service</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email inquiry." },
      { status: 500 }
    );
  }
}
