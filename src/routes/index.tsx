import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader, SiteFooter, SectionLabel } from "@/components/site-chrome";
import { clients, projects, services } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Mercer — Designer & Developer" },
      { name: "description", content: "Independent designer and developer. Brand, interface, and code." },
      { property: "og:title", content: "Alex Mercer — Designer & Developer" },
      { property: "og:description", content: "Independent designer and developer." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 md:px-10 md:pb-32 md:pt-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="01" label="Portfolio" />
              <p className="mt-4 font-mono text-xs text-muted-foreground">Brooklyn, NY</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="reveal font-display text-[14vw] leading-[0.9] tracking-tight md:text-[9.5vw]">
                Simple.<br />
                <em className="italic text-muted-foreground">Considered.</em><br />
                Shipped.
              </h1>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
                <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
                  Alex Mercer. Designer and developer. Brand, interface, and code.
                </p>
                <div className="flex flex-col gap-3 text-sm md:items-end">
                  <Link to="/work" className="group inline-flex items-center gap-2 self-start border-b border-foreground pb-1 font-medium md:self-end">
                    See work
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/contact" className="group inline-flex items-center gap-2 self-start text-muted-foreground transition-colors hover:text-foreground md:self-end">
                    Get in touch
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

      {/* Featured with images */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 border-b hairline py-10">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="02" label="Featured" />
            </div>
            <div className="col-span-12 md:col-span-9 flex items-end justify-between gap-4 flex-wrap">
              <h2 className="font-display text-4xl md:text-6xl">Recent work.</h2>
              <Link to="/work" className="group inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
                All work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3 md:gap-6 md:py-16">
            {featured.map((p) => (
              <Link to="/work" key={p.no} className="group block">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/5] w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-xl md:text-2xl">{p.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practice */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 border-b hairline py-10">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="03" label="Practice" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl">What I do.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.k} className={`p-8 md:p-12 ${i < services.length - 1 ? "border-b hairline md:border-b-0 md:border-r" : ""}`}>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">/ {s.k}</div>
                <h3 className="mt-6 font-display text-3xl md:text-4xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.d}</p>
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
                Let's talk.
              </h2>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 font-display text-2xl md:text-3xl"
              >
                <span className="border-b border-foreground pb-1 transition-opacity group-hover:opacity-60">
                  Start a project
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
