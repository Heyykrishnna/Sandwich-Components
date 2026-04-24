import { featureCards, launchCards } from "@/frontend/home/data";
import { SectionBadge, SectionFrame, SectionHeading } from "@/frontend/home/patterns";

export function Features() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-384 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid items-start gap-8 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="bg-[linear-gradient(180deg,rgba(19,19,22,0.97),rgba(9,9,10,0.99)),rgba(11,11,12,0.94)] border border-line shadow-[0_30px_80px_var(--shadow),inset_0_1px_0_rgba(255,255,255,0.04)] relative overflow-hidden rounded-4xl px-6 py-10 sm:px-8 lg:px-10">
          <SectionFrame />
          <SectionHeading
            eyebrow="Benefits"
            title="Small teams, big ambition. Our systems sharpen the product story."
            copy="A structured studio direction for brands that want contrast, pace, and polish."
            className="relative z-10 max-w-3xl"
          />

          <div className="relative z-10 mt-12 grid gap-px overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/10 md:grid-cols-2">
            {featureCards.map((card) => (
              <article
                key={card.id}
                data-feature-panel
                className="bg-[#0b0b0c] p-7 sm:p-8"
              >
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
                  {card.id}
                </div>
                <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-0.04em] text-text">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-7 text-muted">
                  {card.copy}
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside className="relative grid gap-4 xl:mt-10 xl:self-start">
          <div className="border border-[rgba(20,20,22,0.12)] bg-[linear-gradient(180deg,var(--paper),var(--paper-soft))] text-[#121212] shadow-[0_28px_70px_rgba(0,0,0,0.24)] relative overflow-hidden rounded-4xl p-8 sm:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 bg-[radial-gradient(circle_at_top_right,rgba(242,92,22,0.28),transparent_72%)]" />
            <SectionBadge className="border-black/10 bg-black/3 text-black before:shadow-none">
              Launch
            </SectionBadge>
            <h3 className="mt-8 max-w-sm text-4xl font-medium leading-[1.02] tracking-tighter text-black">
              Build, test, and launch with confidence.
            </h3>
            <p className="mt-6 max-w-md text-lg leading-8 text-black/68">
              A tighter rollout system with faster iteration and cleaner final
              execution.
            </p>
          </div>

          <div className="grid gap-4">
            {launchCards.map((card, index) => (
              <article
                key={card.id}
                data-launch-card
                className={`relative overflow-hidden border border-[rgba(20,20,22,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(235,231,222,0.98))] shadow-[0_18px_44px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.75)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(242,92,22,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.2),transparent_40%)] before:content-[''] rounded-[1.55rem] p-6 ${
                  index === 1 ? "xl:translate-x-3" : ""
                }`}
              >
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
                      {card.id}
                    </div>
                    <h4 className="mt-4 text-2xl font-medium leading-tight tracking-tighter text-black">
                      {card.title}
                    </h4>
                  </div>
                  <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)),repeating-linear-gradient(45deg,rgba(255,255,255,0.12)_0_1px,transparent_1px_14px),repeating-linear-gradient(-45deg,rgba(255,255,255,0.1)_0_1px,transparent_1px_14px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_34px_rgba(0,0,0,0.22)] before:absolute before:left-[16%] before:right-[16%] before:top-[50%] before:h-px before:-translate-y-1/2 before:bg-[rgba(242,92,22,0.56)] before:shadow-[0_0_22px_rgba(242,92,22,0.24)] before:content-[''] after:absolute after:bottom-[16%] after:left-[50%] after:top-[16%] after:w-px after:-translate-x-1/2 after:bg-[rgba(242,92,22,0.56)] after:shadow-[0_0_22px_rgba(242,92,22,0.24)] after:content-[''] h-14 w-14 rounded-2xl" />
                </div>

                <p className="relative z-10 mt-5 max-w-md text-base leading-7 text-black/68">
                  {card.copy}
                </p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
