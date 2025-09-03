// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Helper function to submit registration data
export async function submitRegistration(formData) {
  try {
    const { data, error } = await supabase
      .from("registrations")
      .insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          consent: formData.consent,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Failed to submit registration");
    }

    return { success: true, data };
  } catch (error) {
    console.error("Registration submission error:", error);
    return { success: false, error: error.message };
  }
}

// Simplified email sending function - calls Next.js API route instead of Edge Function
export async function sendWelcomeEmail(registrationData) {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: registrationData.email,
        name: registrationData.name,
        registrationId: registrationData.id,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to send email");
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: error.message };
  }
}
