import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { name, email, subject, message } = req.body

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    }
  })

  try {
    const emailRes = await transporter.sendMail(
      {
        from: email,
        to: process.env.MAIL_USER,
        replyTo: email,
        subject: `${subject}`,
        html: `<h3 style="color: green;">You got a new mail from:</h3>
        <p>Name: <strong>${name}</strong></p></br>
        <p>Email: ${email}</p></br>
        <p>Message: ${message}</p>
        `
      }
    )
    console.log('message sent', emailRes.messageId)
  }
  catch (e) {
    res.status(400).json({ message: "Error" })
  }

  res.status(200).json(req.body)
}