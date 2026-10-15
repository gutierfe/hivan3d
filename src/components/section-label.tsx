type SectionLabelProps = {
  children: React.ReactNode;
  /** Centered with rule lines either side (hero style) or left-aligned. */
  variant?: "centered" | "left";
  className?: string;
};

export function SectionLabel({ children, variant = "left", className = "" }: SectionLabelProps) {
  if (variant === "centered") {
    return (
      <div className={`label text-paper tracking-[0.1em] flex gap-2.5 items-center justify-center ${className}`}>
        <span className="w-7 h-px bg-paper" aria-hidden />
        <span>{children}</span>
        <span className="w-7 h-px bg-paper" aria-hidden />
      </div>
    );
  }
  return <div className={`label text-dim tracking-[0.1em] ${className}`}>{children}</div>;
}
