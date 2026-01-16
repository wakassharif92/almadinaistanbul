"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export default function Badge({
  children,
  tone = "solid",
}: {
  children: ReactNode;
  tone?: "solid" | "soft";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tone === "solid" && "bg-white/10 text-white ring-1 ring-white/20",
        tone === "soft" &&
          "bg-emerald-400/15 text-emerald-100 ring-1 ring-emerald-300/30"
      )}
    >
      {children}
    </span>
  );
}
