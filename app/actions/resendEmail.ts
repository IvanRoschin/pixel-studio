"use server"

import NewOrderTemplate from 'app/emails/NewOrderTemplate';
import { FieldValues } from 'react-hook-form';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API)


export async function sendEmail(data: FieldValues) {

const { email, name, message} = data

try {
  const { data, error} = await resend.emails.send({
  from: "onboarding@resend.dev",
  to: ['ivan.roschin86@gmail.com'],
  subject: `New order email from ${name}, contact email: ${email}`,
    text: message,
    react: NewOrderTemplate({email, name, message}),
  });
  console.log(error)
  return {success: true, data}
} catch (error) {
  return {success: false, error}
}

}
