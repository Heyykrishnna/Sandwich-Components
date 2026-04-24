import { processCards } from "@/frontend/home/data";
import { SectionBadge, SectionFrame } from "@/frontend/home/patterns";

export function Advantages() {
  return (
    <section
      id="benefits"
      className="mx-auto w-full max-w-384 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="bg-[linear-gradient(180deg,rgba(19,19,22,0.97),rgba(9,9,10,0.99)),rgba(11,11,12,0.94)] border border-line shadow-[0_30px_80px_var(--shadow),inset_0_1px_0_rgba(255,255,255,0.04)] relative overflow-hidden rounded-[2.4rem] px-6 py-10 sm:px-8 lg:px-10">
        <SectionFrame />
        <div className="relative z-10">
          <SectionBadge className="mx-auto">How We Work</SectionBadge>
          <div className="mx-auto mt-8 max-w-4xl text-center">
            <div className="text-white/34 text-4xl font-medium tracking-tighter sm:text-[4.2rem]">
              How we turn
            </div>
            <div className="mt-1 text-4xl font-medium tracking-tighter text-text sm:text-[4.2rem]">
              ideas into reality
            </div>
          </div>

          <div className="mt-14 grid gap-6">
            {processCards.map((card, index) => {
              const dark = card.tone === "dark";

              return (
                <article
                  key={card.id}
                  data-benefit-row
                  className={`grid overflow-hidden rounded-4xl ${
                    dark
                      ? "bg-[linear-gradient(180deg,rgba(19,19,22,0.97),rgba(9,9,10,0.99)),rgba(11,11,12,0.94)] shadow-[0_30px_80px_var(--shadow),inset_0_1px_0_rgba(255,255,255,0.04)] border border-white/10"
                      : "border border-[rgba(20,20,22,0.12)] bg-[linear-gradient(180deg,var(--paper),var(--paper-soft))] text-[#121212] shadow-[0_28px_70px_rgba(0,0,0,0.24)]"
                  } lg:min-h-96 lg:grid-cols-[1.02fr_0.98fr]`}
                >
                  <div className="p-8 sm:p-10 lg:p-12">
                    <div
                      className={`text-sm font-medium uppercase tracking-[0.22em] ${
                        dark ? "text-accent" : "text-black/40"
                      }`}
                    >
                      {card.id}
                    </div>
                    <h3
                      className={`mt-6 max-w-lg text-4xl font-medium leading-[1.02] tracking-tighter ${
                        dark ? "text-text" : "text-black"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mt-6 max-w-xl text-lg leading-8 ${
                        dark ? "text-[#ece6db]/82" : "text-black/68"
                      }`}
                    >
                      {card.copy}
                    </p>
                  </div>

                  <div
                    className={`relative min-h-72 overflow-hidden border-t lg:border-l lg:border-t-0 ${
                      dark ? "border-white/8" : "border-black/10"
                    }`}
                  >
                    <div
                      className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90"
                      style={{
                        background: `radial-gradient(circle, ${card.accent} 0%, transparent 65%)`,
                      }}
                    />
                    <div
                      className={`absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[2.4rem] border ${
                        dark ? "border-white/12" : "border-black/12"
                      }`}
                    />
                    <div
                      className={`absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                        dark ? "border-white/20" : "border-black/16"
                      }`}
                    />
                    {index === 0 ? (
                      <>
                        <div
                          className="absolute left-1/2 top-1/2 h-3 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full"
                          style={{ backgroundColor: card.accent }}
                        />
                        <div
                          className="absolute left-1/2 top-1/2 h-48 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                          style={{ backgroundColor: card.accent }}
                        />
                      </>
                    ) : null}
                    {index === 1 ? (
                      <div
                        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[4rem]"
                        style={{
                          background:
                            "radial-gradient(circle at center, rgba(16,185,129,0.28), transparent 64%)",
                        }}
                      />
                    ) : null}
                    {index === 2 ? (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(242,92,22,0.2),transparent_24%),linear-gradient(180deg,transparent,rgba(242,92,22,0.12))]" />
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
