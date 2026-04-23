import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'info@ledscreenuae.com'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'enquiries@ledscreenuae.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, email, phone, service, location, budget, source, message } = body

    // Basic server-side validation
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: `Aztech LED Website <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Enquiry: ${service} — ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
          <div style="background: #0a1628; padding: 24px 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">
              AZTECH <span style="color: #c9a84c; font-size: 14px; font-weight: 600;">LED</span>
            </h1>
            <p style="color: #8899aa; margin: 4px 0 0; font-size: 13px;">New Project Enquiry from Website</p>
          </div>

          <div style="padding: 32px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; width: 35%;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;"><a href="mailto:${email}" style="color: #0a4fd6;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Phone / WhatsApp</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px;"><a href="tel:${phone}" style="color: #0a4fd6;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Service Required</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px; font-weight: 600;">${service}</td>
              </tr>
              ${location ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Project Location</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px;">${location}</td>
              </tr>` : ''}
              ${budget ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Approx. Budget</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px;">${budget}</td>
              </tr>` : ''}
              ${source ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">How Did They Hear</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px;">${source}</td>
              </tr>` : ''}
              ${message ? `
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top; padding-top: 16px;">Project Details</td>
                <td style="padding: 10px 0; color: #111; font-size: 14px; padding-top: 16px; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>` : ''}
            </table>
          </div>

          <div style="padding: 20px 32px; background: #f0f4f8; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 12px; color: #888;">
              This enquiry was submitted via the Aztech LED website contact form.<br/>
              Reply directly to this email to reach <strong>${name}</strong>.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Server error. Please try again later.' },
      { status: 500 }
    )
  }
}
