import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend with API key
const resend = new Resend("re_123");

// Define email template
const createEmailTemplate = (name: string, ticketType: string) => {
  const ticketTypeMap: Record<string, string> = {
    early_bird: "Early Bird",
    regular: "Regular",
    vip: "VIP Access",
  };

  const formattedTicketType = ticketTypeMap[ticketType] || "Regular";

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Registration Confirmation - The Next Man Summit</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #1e40af;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .content {
            padding: 20px;
            background-color: #f9fafb;
          }
          .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #6b7280;
          }
          .button {
            display: inline-block;
            background-color: #1e40af;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 4px;
            margin-top: 20px;
          }
          .details {
            background-color: #ffffff;
            border-left: 4px solid #1e40af;
            padding: 15px;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Registration Confirmed!</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for registering for <strong>The Next Man Summit 2025</strong>. We're excited to have you join us for this transformative event!</p>

            <div class="details">
              <h2>Registration Details</h2>
              <p><strong>Event:</strong> The Next Man Summit 2025</p>
              <p><strong>Date:</strong> June 15-17, 2025</p>
              <p><strong>Location:</strong> Grand Convention Center, New York</p>
              <p><strong>Ticket Type:</strong> ${formattedTicketType}</p>
            </div>

            <p>You will receive additional information about the event schedule, speakers, and other important details in the coming weeks.</p>

            <p>If you have any questions or need assistance, please don't hesitate to contact our support team at <a href="mailto:support@nextmansummit.com">support@nextmansummit.com</a>.</p>

            <p>We look forward to seeing you at the summit!</p>

            <a href="https://nextmansummit.com/event-details" class="button">View Event Details</a>
          </div>
          <div class="footer">
            <p>&copy; 2025 The Next Man Summit. All rights reserved.</p>
            <p>123 Summit Avenue, New York, NY 10001</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export async function POST(request: Request) {
  try {
    const { to, name, ticketType } = await request.json();

    // Validate required fields
    if (!to || !name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "The Next Man Summit <noreply@nextmansummit.com>",
      to: [to],
      subject: "Registration Confirmation - The Next Man Summit",
      html: createEmailTemplate(name, ticketType),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
