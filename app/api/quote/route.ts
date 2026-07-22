import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      company,
      email,
      phone,
      service,
      message,
    } = await req.json();

    await resend.emails.send({
      from: "Phakisa Signs <quotes@phakisasigns.co.za>",
      to: "info@phakisasigns.co.za",
      replyTo: email,
      subject: `New Quote Request - ${service}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto">
          <h2 style="color:#00A651">
            New Quote Request
          </h2>

          <table cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Company</strong></td>
              <td>${company || "-"}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td><strong>Service</strong></td>
              <td>${service}</td>
            </tr>
          </table>

          <h3>Project Details</h3>

          <p style="white-space:pre-wrap">
            ${message}
          </p>

          <hr>

          <p>
            Submitted from
            <strong>phakisasigns.co.za</strong>
          </p>

        </div>
      `,
    });

    await resend.emails.send({
      from: "Phakisa Signs <quotes@phakisasigns.co.za>",
      to: email,
      subject: "We've received your quote request",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto">

          <h2 style="color:#00A651">
            Thank you for contacting Phakisa Signs
          </h2>

          <p>
            We've received your quote request and one of our consultants will
            contact you shortly.
          </p>

          <p>
            If your request is urgent, please call us directly.
          </p>

          <br>

          <strong>
            Phakisa Signs
          </strong>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}