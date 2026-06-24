import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";

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
        content:
          "Editorial brand systems, interfaces, and digital products. Selected work, 2018 — present.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const projects = [
  {
    no: "01",
    year: "2026",
    title: "Meridian Type Foundry",
    role: "Brand identity, website",
    tag: "Typography",
  },
  {
    no: "02",
    year: "2025",
    title: "Halcyon Capital",
    role: "Visual system, web platform",
    tag: "Finance",
  },
  {
    no: "03",
    year: "2025",
    title: "Object Permanence",
    role: "Editorial design, art direction",
    tag: "Publishing",
  },
  {
    no: "04",
    year: "2024",
    title: "Paloma Coffee Roasters",
    role: "Identity, packaging, e-commerce",
    tag: "Commerce",
  },
  {
    no: "05",
    year: "2024",
    title: "Field Notes Archive",
    role: "Product design, engineering",
    tag: "Software",
  },
  {
    no: "06",
    year: "2023",
    title: "North & Co.",
    role: "Naming, identity, signage",
    tag: "Hospitality",
  },
];

const services = [
  { k: "01", t: "Brand Identity", d: "Marks, systems, and editorial direction for studios, founders, and cultural institutions." },
  { k: "02", t: "Interface Design", d: "Product interfaces and marketing sites built around clarity, rhythm, and restraint." },
  { k: "03", t: "Engineering", d: "Hand-crafted front-ends in React and TypeScript with a focus on performance and detail." },
];

const clients = ["Meridian", "Halcyon", "Paloma", "North & Co.", "Field Notes", "Object Permanence", "Atelier Nord", "Verso"];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b hairline bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="font-display text-lg tracking-tight">
            Mercer<span className="text-muted-foreground">.studio</span>
          </Link>
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] md:flex">
            <a href="#work" className="transition-opacity hover:opacity-60">Work</a>
            <a href="#about" className="transition-opacity hover:opacity-60">About</a>
            <a href="#services" className="transition-opacity hover:opacity-60">Services</a>
            <a href="#contact" className="transition-opacity hover:opacity-60">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-2 border border-foreground px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background md:inline-flex"
          >
            Available — Q3
            <span className="size-1.5 rounded-full bg-foreground" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 md:px-10 md:pb-32 md:pt-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                ( 01 ) — Portfolio
              </p>
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
                  <a href="#work" className="group inline-flex items-center gap-2 self-start border-b border-foreground pb-1 font-medium md:self-end">
                    Selected work
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="#contact" className="group inline-flex items-center gap-2 self-start text-muted-foreground transition-colors hover:text-foreground md:self-end">
                    hello@mercer.studio
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
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

      {/* Work */}
      <section id="work" className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 border-b hairline py-10">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                ( 02 ) — Selected work
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl">
                Recent collaborations with studios, founders, and cultural houses.
              </h2>
            </div>
          </div>

          <ul>
            {projects.map((p) => (
              <li key={p.no} className="group border-b hairline">
                <a
                  href="#"
                  className="grid grid-cols-12 items-center gap-6 py-8 transition-colors md:py-10"
                >
                  <span className="col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-1">
                    {p.no}
                  </span>
                  <span className="col-span-10 font-display text-3xl tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-3 md:col-span-6 md:text-5xl">
                    {p.title}
                  </span>
                  <span className="col-span-7 hidden text-sm text-ink-soft md:col-span-3 md:block">
                    {p.role}
                  </span>
                  <span className="col-span-5 flex items-center justify-end gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-2">
                    {p.year}
                    <ArrowUpRight className="size-4 text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b hairline">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-20 md:px-10 md:py-32">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              ( 03 ) — About
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="font-display text-3xl leading-tight tracking-tight md:text-5xl">
              I work quietly with a small number of clients each year. Most engagements
              run six to twelve weeks across identity, interface, and the front-end
              that brings them to life — designed and built by the same hand.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t hairline pt-10 md:grid-cols-4">
              {[
                { v: "08", l: "Years independent" },
                { v: "47", l: "Shipped projects" },
                { v: "12", l: "Industry awards" },
                { v: "100%", l: "Referral pipeline" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-5xl md:text-6xl">{s.v}</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 border-b hairline py-10">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                ( 04 ) — Practice
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl">
                Three disciplines, one studio.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.k}
                className={`p-8 md:p-12 ${i < services.length - 1 ? "border-b hairline md:border-b-0 md:border-r" : ""}`}
              >
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  / {s.k}
                </div>
                <h3 className="mt-8 font-display text-3xl md:text-4xl">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-40">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                ( 05 ) — Contact
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-8xl">
                Have a project
                <br />
                in mind?
              </h2>
              <a
                href="mailto:hello@mercer.studio"
                className="group mt-10 inline-flex items-baseline gap-4 font-display text-3xl md:text-5xl"
              >
                <span className="border-b border-foreground pb-2 transition-opacity group-hover:opacity-60">
                  hello@mercer.studio
                </span>
                <ArrowUpRight className="size-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:size-12" />
              </a>
              <div className="mt-16 grid grid-cols-2 gap-6 border-t hairline pt-10 text-sm md:grid-cols-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Studio</div>
                  <div className="mt-2">Brooklyn, NY</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Availability</div>
                  <div className="mt-2">Q3 — 2026</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</div>
                  <div className="mt-2 flex flex-col">
                    <a href="#" className="hover:opacity-60">Instagram ↗</a>
                    <a href="#" className="hover:opacity-60">Read.cv ↗</a>
                    <a href="#" className="hover:opacity-60">GitHub ↗</a>
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Press</div>
                  <div className="mt-2">press@mercer.studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center md:px-10">
        <div>© 2026 Mercer Studio. All rights reserved.</div>
        <div className="flex gap-6">
          <span>Designed & built in Brooklyn</span>
          <span>v 4.2</span>
        </div>
      </footer>
    </main>
  );
}
