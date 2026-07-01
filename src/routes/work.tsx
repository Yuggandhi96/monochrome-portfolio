import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader, SiteFooter, SectionLabel } from "@/components/site-chrome";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Alex Mercer" },
      { name: "description", content: "Selected projects, 2023 to today." },
      { property: "og:title", content: "Work — Alex Mercer" },
      { property: "og:description", content: "Selected projects, 2023 to today." },
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
              <SectionLabel index="02" label="Work" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
                Selected work.
              </h1>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-ink-soft">
                A few recent projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
            {projects.map((p) => (
              <Link to="/contact" key={p.no} className="group block">
                <div className="overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/3] w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {p.no} — {p.year}
                    </div>
                    <h2 className="mt-2 font-display text-2xl md:text-3xl">{p.title}</h2>
                    <p className="mt-1 text-sm text-ink-soft">{p.role}</p>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
