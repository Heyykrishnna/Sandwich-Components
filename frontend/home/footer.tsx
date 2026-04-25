import { footerMenus } from "@/frontend/home/data";
import { SectionBadge, SectionFrame } from "@/frontend/home/patterns";

export function Footer() {
  return (
    <footer
      id="footer-cta"
      className="mx-auto w-full max-w-384 px-4 py-8 pb-10 sm:px-6 lg:px-8"
    >
      <div className="border border-line shadow-[0_30px_80px_var(--shadow),inset_0_1px_0_rgba(255,255,255,0.04)] relative overflow-hidden rounded-4xl px-6 pt-10 sm:px-8 lg:px-10 [clip-path:inset(0_0_0_0_round_2rem)]">
        <div className="absolute inset-0 bg-black" />
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://res.cloudinary.com/dpod2sj9t/video/upload/v1777106170/SANDWICH-FOOTER_pdapsc.mov"
          className="fixed inset-0 size-screen object-cover opacity-35 grayscale pointer-events-none"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,115,0,0.18),transparent_26%),radial-gradient(circle_at_82%_86%,rgba(255,94,0,0.2),transparent_24%),linear-gradient(180deg,rgba(255,150,40,0.04),transparent_24%,transparent_76%,rgba(255,95,0,0.04))] opacity-60 mix-blend-color" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#09090a] via-[#0a0a0b]/80 to-transparent" />

        <div data-footer-panel className="relative z-10">

          <div className="mt-12 grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr]">
            <div>
              <p className="text-[#ece6db]/82 mt-6 max-w-sm text-lg leading-8">
                Elevate your digital presence with Sandwich. Let&apos;s create
                something sharper together.
              </p>
            </div>

            <FooterColumn title="Menu" items={footerMenus.menu} />
            <FooterColumn title="Follow Us" items={footerMenus.social} />
            <FooterColumn title="Legal" items={footerMenus.legal} />
          </div>

          <div className="mt-10 overflow-hidden">
            <div className="text-[5.5rem] font-black leading-none tracking-[-0.08em] text-text sm:text-[9rem] lg:text-[12rem]">
              sand<span className="text-accent">w</span>ich
            </div>
            <div className="-mt-3 text-[5.5rem] font-black leading-none tracking-[-0.08em] text-text -scale-y-100 opacity-[0.12] mask-[linear-gradient(180deg,rgba(0,0,0,0.8),transparent_72%)] [-webkit-mask-image:linear-gradient(180deg,rgba(0,0,0,0.8),transparent_72%)] sm:text-[9rem] lg:text-[12rem]">
              sand<span className="text-accent">w</span>ich
            </div>
          </div>

          <div className="text-[#ece6db]/64 mt-4 flex flex-col gap-3 border-t border-white/10 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; sandwich studio</p>
            <p>India, Bharat</p>
            <a href="mailto:hello@sandwich.studio" className="text-accent">
              hello@sandwich.studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="text-lg font-medium text-text">{title}</div>
      <div className="text-[#ece6db]/82 mt-4 space-y-3 text-lg">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}
