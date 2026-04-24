import type { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

export function SectionFrame({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] border border-white/6",
        className,
      )}
    />
  );
}

export function SectionBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("inline-flex items-center gap-[0.65rem] rounded-full border border-line-strong bg-white/6 px-4 py-[0.7rem] text-[0.82rem] font-medium tracking-[0.02em] text-[#ece6db]/96 before:content-[''] before:h-[0.32rem] before:w-[0.32rem] before:rounded-full before:bg-accent before:shadow-[0_0_14px_rgba(242,92,22,0.8)]", className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  centered = false,
  className,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(centered ? "mx-auto text-center" : "", className)}>
      <SectionBadge className={centered ? "mx-auto" : ""}>{eyebrow}</SectionBadge>
      <h2 className="mt-6 text-4xl font-medium leading-[0.98] tracking-tighter text-text sm:text-[4.2rem]">
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg",
            centered ? "mx-auto" : "",
          )}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
