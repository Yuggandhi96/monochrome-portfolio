import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SectionLabel } from "@/components/site-chrome";
import { services } from "@/lib/portfolio-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Alex Mercer" },
      { name: "description", content: "Identity, interface, and engineering." },
      { property: "og:title", content: "Services — Alex Mercer" },
      { property: "og:description", content: "Identity, interface, and engineering." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const process = [
  { k: "01", t: "Discovery", d: "We define the work together." },
  { k: "02", t: "Direction", d: "A few directions. One is chosen." },
  { k: "03", t: "Design", d: "Weekly iteration with the founder." },
  { k: "04", t: "Build", d: "Hand-built, handed over, supported." },
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
              Three things.<br />Done well.
            </h1>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.k}>
                <img
                  src={s.image}
                  alt={s.t}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover grayscale"
                />
                <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">/ {s.k}</div>
                <h2 className="mt-3 font-display text-2xl md:text-3xl">{s.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
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
                <li key={p.k} className="grid grid-cols-12 gap-6 py-6">
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
