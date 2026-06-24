import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SectionLabel } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Mercer" },
      { name: "description", content: "Independent designer and developer working with a small number of clients each year on identity, interface, and engineering." },
      { property: "og:title", content: "About — Alex Mercer" },
      { property: "og:description", content: "Independent designer and developer. Brooklyn, NY." },
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
              A small studio with a deliberate pace.
            </h1>
            <p className="mt-10 max-w-2xl font-display text-2xl leading-snug text-ink md:text-3xl">
              I work quietly with a small number of clients each year. Most engagements run six to twelve weeks across identity, interface, and the front-end that brings them to life — designed and built by the same hand.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { v: "08", l: "Years independent" },
              { v: "47", l: "Shipped projects" },
              { v: "12", l: "Industry awards" },
              { v: "100%", l: "Referral pipeline" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-5xl md:text-7xl">{s.v}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-16 md:px-10 md:py-24">
          <div className="col-span-12 md:col-span-3">
            <SectionLabel index="—" label="Recognition" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <ul className="divide-y hairline border-y hairline">
              {[
                ["2025", "Brand New — Noted", "Halcyon Capital"],
                ["2024", "Awwwards — SOTD", "Field Notes Archive"],
                ["2024", "TDC Annual", "Meridian Type Foundry"],
                ["2023", "Type Directors Club", "North & Co."],
                ["2022", "Communication Arts", "Paloma Coffee"],
              ].map(([year, award, project]) => (
                <li key={project} className="grid grid-cols-12 gap-6 py-5 font-mono text-xs uppercase tracking-[0.18em] md:text-sm">
                  <span className="col-span-2 text-muted-foreground">{year}</span>
                  <span className="col-span-6">{award}</span>
                  <span className="col-span-4 text-right text-ink-soft md:text-left">{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
