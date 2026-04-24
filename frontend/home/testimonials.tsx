import { testimonials } from "@/frontend/home/data";
import { SectionBadge, SectionFrame } from "@/frontend/home/patterns";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto w-full max-w-384 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="bg-[linear-gradient(180deg,rgba(19,19,22,0.97),rgba(9,9,10,0.99)),rgba(11,11,12,0.94)] border border-line shadow-[0_30px_80px_var(--shadow),inset_0_1px_0_rgba(255,255,255,0.04)] relative overflow-hidden rounded-[2.4rem] px-6 py-10 sm:px-8 lg:px-10">
        <SectionFrame />
        <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-xl pt-2">
            <SectionBadge>Client Review</SectionBadge>
            <h2 className="mt-8 text-5xl font-medium leading-[0.96] tracking-[-0.06em] text-text sm:text-[5.6rem]">
              Client feedback and polished experiences.
            </h2>
            <p className="text-[#ece6db]/82 mt-6 max-w-lg text-lg leading-8">
              The page now leans into the darker studio references while keeping
              the structure readable and production-friendly.
            </p>
          </div>

          <div className="grid gap-5 lg:pt-3">
            {testimonials.map((item, index) => (
              <article
                key={item.name}
                data-testimonial-card
                className={`rounded-[1.8rem] border border-white/10 bg-white/4 p-7 sm:p-8 ${
                  index === 1 ? "lg:ml-8" : ""
                }`}
              >
                <p className="text-xl leading-8 text-text sm:text-2xl">
                  “{item.quote}”
                </p>
                <div className="text-[#ece6db]/64 mt-6 border-t border-white/8 pt-4 text-sm uppercase tracking-[0.2em]">
                  {item.name} / {item.role}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
