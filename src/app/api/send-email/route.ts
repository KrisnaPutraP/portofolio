import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { type NextRequest } from 'next/server';

interface EmailData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: EmailData = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',  
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
        from: `"${data.name}" <${process.env.EMAIL_USER}>`,
        to: 'krisna.putra@ui.ac.id', 
        subject: data.subject || `New Contact Form Submission from ${data.name}`,
        text: `
          Name: ${data.name}
          Email: ${data.email}
          
          Message:
          ${data.message}
        `,
        replyTo: data.email, 
      });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}