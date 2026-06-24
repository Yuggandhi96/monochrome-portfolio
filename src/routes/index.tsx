import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader, SiteFooter, SectionLabel } from "@/components/site-chrome";
import { clients, projects, services } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Mercer — Independent Designer & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Alex Mercer, an independent designer and developer crafting editorial brand systems, interfaces, and digital products.",
      },
      { property: "og:title", content: "Alex Mercer — Independent Designer & Developer" },
      {
        property: "og:description",
        content: "Editorial brand systems, interfaces, and digital products.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 md:px-10 md:pb-32 md:pt-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="01" label="Portfolio" />
              <p className="mt-4 font-mono text-xs text-muted-foreground">
                Brooklyn, NY<br />
                40.6782° N / 73.9442° W
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="reveal font-display text-[14vw] leading-[0.9] tracking-tight md:text-[9.5vw]">
                Designing
                <br />
                with <em className="italic text-muted-foreground">restraint,</em>
                <br />
                shipped with care.
              </h1>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
                <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
                  I'm Alex Mercer — an independent designer and developer building
                  brand systems, editorial interfaces, and the quiet software in
                  between. Selected work, 2018 — present.
                </p>
                <div className="flex flex-col gap-3 text-sm md:items-end">
                  <Link to="/work" className="group inline-flex items-center gap-2 self-start border-b border-foreground pb-1 font-medium md:self-end">
                    Selected work
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/contact" className="group inline-flex items-center gap-2 self-start text-muted-foreground transition-colors hover:text-foreground md:self-end">
                    Start a project
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b hairline py-6">
        <div className="marquee flex shrink-0 gap-12 whitespace-nowrap font-display text-2xl md:text-3xl">
          {[...clients, ...clients, ...clients].map((c, i) => (
            <span key={i} className="flex items-center gap-12">
              {c}
              <span className="text-muted-foreground">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 border-b hairline py-10">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="02" label="Featured" />
            </div>
            <div className="col-span-12 md:col-span-9 flex items-end justify-between gap-4 flex-wrap">
              <h2 className="font-display text-4xl md:text-6xl">
                A handful of recent projects.
              </h2>
              <Link to="/work" className="group inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
                View all work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <ul>
            {projects.slice(0, 3).map((p) => (
              <li key={p.no} className="group border-b hairline last:border-b-0">
                <Link to="/work" className="grid grid-cols-12 items-center gap-6 py-8 md:py-10">
                  <span className="col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-1">{p.no}</span>
                  <span className="col-span-10 font-display text-3xl tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-3 md:col-span-6 md:text-5xl">{p.title}</span>
                  <span className="col-span-7 hidden text-sm text-ink-soft md:col-span-3 md:block">{p.role}</span>
                  <span className="col-span-5 flex items-center justify-end gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-2">
                    {p.year}
                    <ArrowUpRight className="size-4 text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Practice teaser */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 border-b hairline py-10">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="03" label="Practice" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl">Three disciplines, one studio.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.k} className={`p-8 md:p-12 ${i < services.length - 1 ? "border-b hairline md:border-b-0 md:border-r" : ""}`}>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">/ {s.k}</div>
                <h3 className="mt-8 font-display text-3xl md:text-4xl">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="04" label="Next" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
                Have a project in mind?
              </h2>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 font-display text-2xl md:text-3xl"
              >
                <span className="border-b border-foreground pb-1 transition-opacity group-hover:opacity-60">
                  Start the conversation
                </span>
                <ArrowUpRight className="size-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
