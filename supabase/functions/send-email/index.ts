import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface EmailRequest {
  name: string;
  email: string;
  message?: string;
  idea?: string;
  subject: string;
  type: 'contact' | 'startup' | 'ideas';
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const payload: EmailRequest = await req.json();

    const { name, email, message, idea, subject, type } = payload;

    let emailBody = "";
    let emailSubject = "";

    if (type === "contact") {
      emailSubject = "New Contact Form Submission";
      emailBody = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, "<br/>")}</p>
      `;
    } else if (type === "startup") {
      emailSubject = "New Startup Hub Application";
      emailBody = `
        <h2>New Startup Hub Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, "<br/>")}</p>
      `;
    } else if (type === "ideas") {
      emailSubject = "New Ideas Lab Submission";
      emailBody = `
        <h2>New Ideas Lab Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Idea:</strong></p>
        <p>${idea?.replace(/\n/g, "<br/>")}</p>
      `;
    }

    const mailgunDomain = Deno.env.get("MAILGUN_DOMAIN");
    const mailgunApiKey = Deno.env.get("MAILGUN_API_KEY");

    if (!mailgunDomain || !mailgunApiKey) {
      console.log("Email would be sent to sanjaynavaneethamurali@gmail.com");
      console.log("Subject:", emailSubject);
      console.log("Body:", emailBody);
      console.log("Sender:", email);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Email logged successfully (Mailgun not configured)",
        }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const formData = new FormData();
    formData.append("from", `Neovate <noreply@${mailgunDomain}>`);
    formData.append("to", "sanjaynavaneethamurali@gmail.com");
    formData.append("reply-to", email);
    formData.append("subject", emailSubject);
    formData.append("html", emailBody);

    const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`api:${mailgunApiKey}`)}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Mailgun error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        messageId: result.id,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error sending email:", errorMessage);

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
