import { Resend } from "resend";
import { otpEmailTemplate } from "../template/OtpEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail(
  email: string,
  otp: string,
  name?: string,
): Promise<void> {
  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM ?? "WatchParty <onboarding@resend.dev>",
    to: email,
    subject: `${otp} is your WatchParty verification code`,
    html: otpEmailTemplate(otp, name),
  });

  if (error) {
    throw new Error(`Failed to send OTP email: ${error.message}`);
  }
}

export function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
