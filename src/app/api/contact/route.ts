// ============================================================
// API ROUTE - /api/contact
// Handles contact form submissions.
// ============================================================

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(4).optional().or(z.literal("")).transform(val => val || "Portfolio Contact Message"),
  message: z.string().min(20),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    console.log('[Contact Form]', {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: `${data.message.slice(0, 100)}...`,
    })

    const resendApiKey = process.env.RESEND_API_KEY
    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

    let sent = false
    let providerUsed = ''

    if (resendApiKey) {
      providerUsed = 'Resend'
      const { Resend } = await import('resend')
      const resend = new Resend(resendApiKey)
      
      await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: 'ajaygurjar78692@gmail.com',
        subject: `Portfolio: ${data.subject}`,
        html: `
          <h3>New Message from Portfolio Contact Form</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
      })
      sent = true
    } else if (gmailUser && gmailAppPassword) {
      providerUsed = 'Gmail/Nodemailer'
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      })

      await transporter.sendMail({
        from: gmailUser,
        to: 'ajaygurjar78692@gmail.com',
        subject: `Portfolio Contact: ${data.subject}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
        html: `
          <h3>New Message from Portfolio Contact Form</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
      })
      sent = true
    } else {
      providerUsed = 'Console Simulator'
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json(
          { success: false, message: 'Email service is not configured.' },
          { status: 503 }
        )
      }
      sent = true // Allow local dev testing to succeed visually
    }

    console.log(`[Contact Form API] Handled successfully. Provider: ${providerUsed}, Sent: ${sent}`)

    return NextResponse.json(
      { success: true, message: 'Message received', provider: providerUsed, sent },
      { status: 200 }
    )
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.issues },
        { status: 400 }
      )
    }

    console.error('[Contact API Error]', err)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

