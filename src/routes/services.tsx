import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SectionLabel } from "@/components/site-chrome";
import { services } from "@/lib/portfolio-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Alex Mercer" },
      { name: "description", content: "Identity, interface, and engineering services for studios, founders, and cultural institutions." },
      { property: "og:title", content: "Services — Alex Mercer" },
      { property: "og:description", content: "Identity, interface, and engineering — three disciplines, one studio." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const process = [
  { k: "01", t: "Discovery", d: "Two weeks of conversations, audit, and reference. We define the work and the success criteria together." },
  { k: "02", t: "Direction", d: "Two to three written and visual directions. One is selected and refined; the others are documented and shelved." },
  { k: "03", t: "Design", d: "The bulk of the engagement. Identity systems, interface design, and copy iterated weekly with the founder." },
  { k: "04", t: "Build & Handover", d: "Hand-built front-ends, brand guidelines, and a thorough handover. Quiet support for thirty days after launch." },
];


function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b hairline">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-32">
          <div className="col-span-12 md:col-span-3">
            <SectionLabel index="04" label="Services" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Three disciplines,<br /> one studio.
            </h1>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.k} className={`p-8 md:p-12 ${i < services.length - 1 ? "border-b hairline md:border-b-0 md:border-r" : ""}`}>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">/ {s.k}</div>
                <h2 className="mt-8 font-display text-3xl md:text-4xl">{s.t}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-16 md:px-10 md:py-24">
          <div className="col-span-12 md:col-span-3">
            <SectionLabel index="—" label="Process" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <ol className="divide-y hairline border-y hairline">
              {process.map((p) => (
                <li key={p.k} className="grid grid-cols-12 gap-6 py-8">
                  <span className="col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-1">{p.k}</span>
                  <h3 className="col-span-10 font-display text-2xl md:col-span-3 md:text-3xl">{p.t}</h3>
                  <p className="col-span-12 text-sm leading-relaxed text-ink-soft md:col-span-8">{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
