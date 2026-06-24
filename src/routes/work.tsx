import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader, SiteFooter, SectionLabel } from "@/components/site-chrome";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Alex Mercer" },
      { name: "description", content: "Selected projects in brand identity, interface design, and engineering, 2023 — present." },
      { property: "og:title", content: "Work — Alex Mercer" },
      { property: "og:description", content: "Selected projects in brand identity, interface design, and engineering." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="02" label="Selected work" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
                Work <em className="italic text-muted-foreground">/</em> 2023 — present
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft">
                A selection of recent collaborations with studios, founders, and cultural houses across identity, interface, and editorial design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ul>
            {projects.map((p) => (
              <li key={p.no} className="group border-b hairline">
                <Link to="/contact" className="grid grid-cols-12 items-center gap-6 py-8 md:py-10">
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

      <SiteFooter />
    </div>
  );
}
