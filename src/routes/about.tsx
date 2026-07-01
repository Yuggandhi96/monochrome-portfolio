import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SectionLabel } from "@/components/site-chrome";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Mercer" },
      { name: "description", content: "Independent designer and developer based in Brooklyn." },
      { property: "og:title", content: "About — Alex Mercer" },
      { property: "og:description", content: "Independent designer and developer based in Brooklyn." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b hairline">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-32">
          <div className="col-span-12 md:col-span-3">
            <SectionLabel index="03" label="About" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              A small studio.<br />A steady pace.
            </h1>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-6 py-16 md:px-10 md:py-24">
          <div className="col-span-12 md:col-span-5">
            <img
              src={portrait}
              alt="Alex Mercer"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full grayscale"
            />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="font-display text-2xl leading-snug md:text-3xl">
              I'm Alex. I design and build with a small number of clients each year.
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              Based in Brooklyn. Working across identity, interface, and code.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { v: "08", l: "Years" },
              { v: "47", l: "Projects" },
              { v: "12", l: "Awards" },
              { v: "100%", l: "Referrals" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-5xl md:text-7xl">{s.v}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
