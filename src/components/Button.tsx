import Link from "next/link";
import { cn } from "@/lib/cn";

export default function Button({
  children,
  href,
  variant = "primary",
  external,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition duration-200",
    variant === "primary" &&
      "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 shadow-[0_10px_40px_rgba(14,165,233,0.35)] hover:translate-y-[-1px]",
    variant === "secondary" &&
      "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 hover:translate-y-[-1px]"
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
