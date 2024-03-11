// reference: https://qiita.com/kohsukeve/items/87cba0e63f4b119c1757

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"
import { env } from "process"   //.envからの呼び出し

export async function POST(request) {
  const { name, email, message } = await request.json()

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })

  const mailOptions = {
    from: email,
    to: "chikage.t.molander@gmail.com",
    subject: `Message from (${name})`,
    text: message,
    html: `
    <p>Name:</p>
    <p>${name}</p>
    <p>E-mail:</p>
    <p>${email}</p>
    <p>Message:</p>
    <p>${message}</p>
    `
  }

  try {
    await transport.sendMail(mailOptions)
    return NextResponse.json({ message: "Success!", status: 200 })

  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 })
  }
}