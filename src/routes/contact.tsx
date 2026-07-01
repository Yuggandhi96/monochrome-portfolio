import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { SiteHeader, SiteFooter, SectionLabel } from "@/components/site-chrome";
import { sendContactMessage } from "@/lib/contact.functions";
import { contactInfo } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alex Mercer" },
      { name: "description", content: "Start a project, ask a question, or say hello. Brooklyn-based studio currently booking for Q3 2026." },
      { property: "og:title", content: "Contact — Alex Mercer" },
      { property: "og:description", content: "Start a project or say hello. Currently booking Q3 2026." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Add a short subject").max(150),
  message: z.string().trim().min(10, "Tell me a little more (10+ chars)").max(2000),
});

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

function ContactPage() {
  const send = useServerFn(sendContactMessage);
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const setField = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please review the form.");
      return;
    }
    setSubmitting(true);
    try {
      await send({ data: parsed.data });
      toast.success("Message sent. I'll reply within two business days.");
      setValues(INITIAL);
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b hairline">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 pb-12 pt-20 md:px-10 md:pb-20 md:pt-32">
          <div className="col-span-12 md:col-span-3">
            <SectionLabel index="05" label="Contact" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-display text-6xl leading-[0.92] tracking-tight md:text-8xl">
              Let's make<br />something <em className="italic text-muted-foreground">quiet</em>.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft">
              {contactInfo.note}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-16 md:px-10 md:py-24">
          {/* Aside */}
          <aside className="col-span-12 space-y-10 md:col-span-4">
            <Detail label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
            <Detail label="Press" value={contactInfo.press} href={`mailto:${contactInfo.press}`} />
            <Detail label="Studio" value={contactInfo.studio} />
            <Detail label="Hours" value={contactInfo.hours} />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</div>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                {contactInfo.socials.map((s) => (
                  <a key={s.label} href={s.href} className="group inline-flex items-center gap-2 hover:opacity-60">
                    {s.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Form */}
          <form onSubmit={onSubmit} noValidate className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
              <Field label="01 / Name" error={errors.name}>
                <input
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={setField("name")}
                  maxLength={100}
                  placeholder="Your full name"
                  className="field-input md:border-r"
                />
              </Field>
              <Field label="02 / Email" error={errors.email}>
                <input
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={setField("email")}
                  maxLength={255}
                  placeholder="you@studio.com"
                  className="field-input"
                />
              </Field>
              <Field label="03 / Subject" error={errors.subject} className="md:col-span-2">
                <input
                  type="text"
                  value={values.subject}
                  onChange={setField("subject")}
                  maxLength={150}
                  placeholder="A new identity, a product redesign…"
                  className="field-input"
                />
              </Field>
              <Field label="04 / Message" error={errors.message} className="md:col-span-2">
                <textarea
                  rows={6}
                  value={values.message}
                  onChange={setField("message")}
                  maxLength={2000}
                  placeholder="Tell me about the project, timeline, and budget range."
                  className="field-input resize-none"
                />
                <div className="mt-1 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {values.message.length} / 2000
                </div>
              </Field>
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t hairline pt-8 md:flex-row md:items-center">
              <p className="max-w-sm font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                By submitting, you agree to be contacted regarding your inquiry.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Sending
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        .field-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-top: 1px solid var(--hairline);
          padding: 1.5rem 0.25rem;
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--foreground);
          outline: none;
        }
        .field-input::placeholder { color: var(--muted-foreground); }
        .field-input:focus { border-top-color: var(--foreground); }
        @media (min-width: 768px) {
          .field-input.md\\:border-r { border-right: 1px solid var(--hairline); padding-right: 1.5rem; }
        }
      `}</style>
    </div>
  );
}

function Detail({ label, value, href }: { label: string; value: string; href?: string }) {
  const body = (
    <div className="mt-2 whitespace-pre-line text-sm">{value}</div>
  );
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      {href ? <a href={href} className="block hover:opacity-60">{body}</a> : body}
    </div>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <div className="flex items-baseline justify-between pt-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        {error && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-destructive">{error}</span>
        )}
      </div>
      {children}
    </label>
  );
}
