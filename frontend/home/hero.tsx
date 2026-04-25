export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto mt-4 w-full max-w-384 px-4 pb-8 pt-24 sm:px-6 lg:px-8"
    >
      <div className="bg-[linear-gradient(180deg,rgba(19,19,22,0.97),rgba(9,9,10,0.99)),rgba(11,11,12,0.94)] border border-line shadow-[0_30px_80px_var(--shadow),inset_0_1px_0_rgba(255,255,255,0.04)] relative before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] before:bg-size-[62px_62px] before:opacity-[0.36] overflow-hidden rounded-[2.4rem] px-6 py-8 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,115,0,0.18),transparent_26%),radial-gradient(circle_at_82%_86%,rgba(255,94,0,0.2),transparent_24%),linear-gradient(180deg,rgba(255,150,40,0.04),transparent_24%,transparent_76%,rgba(255,95,0,0.04))] blur-3xl opacity-90" />
        <div className="pointer-events-none absolute bottom-[34%] left-[-4%] top-0 w-[36%] opacity-[0.82] blur-[24px] bg-[linear-gradient(180deg,rgba(255,140,24,0.14),transparent_72%),repeating-linear-gradient(90deg,rgba(255,113,20,0.8)_0_18px,rgba(255,113,20,0.06)_18px_46px)] [mask-image:radial-gradient(100%_100%_at_top_left,black_10%,transparent_80%)]" />
        <div className="pointer-events-none absolute bottom-[-10%] right-[-3%] top-[28%] w-[36%] opacity-[0.82] blur-[24px] bg-[linear-gradient(0deg,rgba(255,140,24,0.18),transparent_78%),repeating-linear-gradient(90deg,rgba(255,113,20,0.86)_0_18px,rgba(255,113,20,0.06)_18px_46px)] [mask-image:radial-gradient(100%_100%_at_bottom_right,black_10%,transparent_80%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent),linear-gradient(180deg,rgba(242,92,22,0.05),transparent_36%)]" />

        <div className="relative z-10 flex min-h-[78vh] flex-col">
          <div className="relative mx-auto flex flex-1 max-w-5xl flex-col items-center justify-center py-18 text-center sm:py-22 lg:py-24">

            <h1
              data-hero-item
              className="mt-10 text-[3.5rem] font-semibold leading-[0.92] tracking-[-0.07em] text-accent sm:text-[5.2rem] lg:text-[6.4rem]"
            >
              We Build Sandwich
            </h1>

            <div
              data-hero-item
              className="font-serif italic font-normal tracking-tighter [text-shadow:0_8px_30px_rgba(0,0,0,0.35)] mt-2 text-[2.8rem] leading-[0.96] text-paper sm:text-[4.7rem] lg:text-[5.8rem]"
            >
              into standout experiences
            </div>

            <p
              data-hero-item
              className="text-[#ece6db]/82 mt-8 max-w-2xl text-lg leading-8 sm:text-xl"
            >
              We design, refine, and launch premium component websites with
              sharper contrast, richer motion, and a cleaner product story.
            </p>

            <div data-hero-item className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#footer-cta"
                className="rounded-full bg-white px-9 py-4 text-base font-medium text-black hover:-translate-y-1"
              >
                Get In Touch
              </a>
              <a
                href="#showcase"
                className="rounded-full border border-white/14 bg-white/8 px-9 py-4 text-base font-medium text-white hover:-translate-y-1 hover:border-accent/60"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
