import { showcaseCards } from "@/frontend/home/data";
import { SectionHeading, SectionFrame } from "@/frontend/home/patterns";

export function Sponsors() {
  return (
    <section
      id="showcase"
      className="mx-auto w-full max-w-384 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="bg-[linear-gradient(180deg,rgba(19,19,22,0.97),rgba(9,9,10,0.99)),rgba(11,11,12,0.94)] border border-line shadow-[0_30px_80px_var(--shadow),inset_0_1px_0_rgba(255,255,255,0.04)] relative overflow-hidden rounded-[2.4rem] px-6 py-10 sm:px-8 lg:px-10">
        <SectionFrame />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,115,0,0.18),transparent_26%),radial-gradient(circle_at_82%_86%,rgba(255,94,0,0.2),transparent_24%),linear-gradient(180deg,rgba(255,150,40,0.04),transparent_24%,transparent_76%,rgba(255,95,0,0.04))] opacity-70" />

        <div className="relative z-10">
          <SectionHeading
            eyebrow="Featured Work"
            title="Dive into a collection of bold product interfaces."
            copy="Clean screens, stronger hierarchy, and presentation-ready layouts."
            className="max-w-3xl"
          />

          <div className="mt-14 grid items-start gap-8 lg:grid-cols-3">
            {showcaseCards.map((card, index) => (
              <article
                key={card.title}
                data-showcase-card
                className={`rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(8,8,9,0.92))] shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-4 ${index === 0
                  ? "lg:translate-y-6 lg:-rotate-3"
                  : index === 1
                    ? "lg:-translate-y-2"
                    : "lg:translate-y-8 lg:rotate-2"
                  }`}
              >
                <div className="rounded-3xl border border-white/8 bg-[#0a0a0b] p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/52">
                    <span>{card.subtitle}</span>
                  </div>

                  <div
                    className="mt-4 h-52 rounded-[1.25rem]"
                    style={{ background: card.gradient }}
                  />

                  <div className="mt-4 grid gap-3">
                    <div className="h-6 w-32 rounded-full bg-white/10" />
                    <div className="h-24 rounded-[1.2rem] bg-white/6" />
                    <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
                      <div className="h-16 rounded-2xl bg-white/7" />
                      <div className="h-16 rounded-2xl bg-white/7" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
