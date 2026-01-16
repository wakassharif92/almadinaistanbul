"use client";

import { cn } from "@/lib/cn";

export default function CategoryPills<T extends string>({
  categories,
  active,
  onChange,
}: {
  categories: T[];
  active: T;
  onChange: (c: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold ring-1 transition",
            active === c
              ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 ring-transparent shadow-[0_8px_30px_rgba(6,182,212,0.35)]"
              : "bg-white/5 text-slate-100 ring-white/10 hover:ring-white/20"
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
