import { SectionBadge, SectionFrame } from "@/frontend/home/patterns";

export function CTO() {
  return (
    <section
      id="cto"
      className="mx-auto w-full max-w-384 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="border border-[rgba(20,20,22,0.12)] bg-[linear-gradient(180deg,var(--paper),var(--paper-soft))] text-[#121212] shadow-[0_28px_70px_rgba(0,0,0,0.24)] rounded-4xl p-8 sm:p-10 lg:sticky lg:top-8">
          <SectionBadge className="border-black/10 bg-black/3 text-black before:shadow-none">
            Available for work
          </SectionBadge> 
          <h3 className="mt-8 text-4xl font-medium leading-[1.02] tracking-tighter text-black">
            A tighter studio direction for products that need to feel premium.
          </h3>
          <p className="mt-6 text-lg leading-8 text-black/68">
            Sandwich now follows a darker, sharper art direction with orange
            gradient energy and cleaner section contrast.
          </p>
        </div>

        <div className="bg-[linear-gradient(180deg,rgba(19,19,22,0.97),rgba(9,9,10,0.99)),rgba(11,11,12,0.94)] border border-line shadow-[0_30px_80px_var(--shadow),inset_0_1px_0_rgba(255,255,255,0.04)] relative overflow-hidden rounded-[2.2rem] px-6 py-10 sm:px-8 lg:px-10">
          <SectionFrame />
          <div className="relative z-10">
            <SectionBadge>Studio Approach</SectionBadge>
            <div className="mt-8 grid gap-px overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/10 lg:grid-cols-3">
              {[
                ["Strategy", "Narrative first. Every section earns its place."],
                ["Design", "Contrast, glow, spacing, and motion tuned together."],
                ["Build", "Production-ready code with cleaner structure underneath."],
              ].map(([title, copy]) => (
                <div key={title} data-cto-panel className="bg-[#0b0b0c] p-7">
                  <div className="text-sm uppercase tracking-[0.22em] text-accent">
                    {title}
                  </div>
                  <p className="text-[#ece6db]/82 mt-4 text-lg leading-8">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
