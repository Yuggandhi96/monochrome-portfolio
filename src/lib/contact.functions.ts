import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Server-side log only; integrate with email provider later.
    console.log("[contact] new inquiry", {
      name: data.name,
      email: data.email,
      subject: data.subject,
      length: data.message.length,
      at: new Date().toISOString(),
    });
    return { ok: true as const };
  });
