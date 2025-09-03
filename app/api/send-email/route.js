// app/api/send-email/route.ts

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log("Email API called");

    const body = await request.json();
    console.log("Request body:", body);

    const { to, name, registrationId } = body;

    if (!to || !name) {
      console.log("Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if Resend API key exists
    const resendApiKey = process.env.RESEND_API_KEY;
    console.log("Resend API key exists:", !!resendApiKey);

    if (!resendApiKey) {
      console.log("No Resend API key found");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // For now, let's just return success without actually sending email
    // This will help us test if the API route is working
    console.log("Would send email to:", to, "for:", name);

    return NextResponse.json({
      success: true,
      message: "Email API working (test mode)",
      debug: {
        to,
        name,
        registrationId,
        hasApiKey: !!resendApiKey,
      },
    });

    // Uncomment below when ready to actually send emails:
    /*
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to The Next Man Summit</title>
        </head>
        <body>
          <h1>Welcome, ${name}!</h1>
          <p>Thank you for registering for The Next Man Summit.</p>
          <p>Registration ID: ${registrationId}</p>
          <p>We'll contact you soon at +234-915-742-2372</p>
        </body>
      </html>
    `

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'The Next Man Summit <onboarding@resend.dev>', // Use this for testing
        to: [to],
        subject: 'Welcome to The Next Man Summit - Registration Confirmed!',
        html: emailHtml,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Resend API error:', errorData)
      throw new Error('Failed to send email via Resend')
    }

    const emailData = await emailResponse.json()

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      emailId: emailData.id 
    })
    */
  } catch (error) {
    console.error("Email API error:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
