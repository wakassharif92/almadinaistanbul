"use client";

import { MenuItem } from "@/data/menu";
import { money, whatsappOrderLink } from "@/lib/format";
import { site } from "@/data/site";
import Badge from "@/components/Badge";
import { motion } from "framer-motion";
import { fadeUp, scaleHover } from "@/lib/motion";

export default function MenuGrid({ items }: { items: MenuItem[] }) {
  if (!items.length) {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={scaleHover.whileHover}
        transition={scaleHover.transition}
        className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-lg shadow-emerald-500/10 backdrop-blur"
      >
        <p className="font-semibold">No results</p>
        <p className="mt-1 text-sm text-slate-300">
          Try a different search or category.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={scaleHover.whileHover}
          transition={scaleHover.transition}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-lg shadow-emerald-500/10 backdrop-blur"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="mt-1 text-xs font-semibold text-slate-300">
                {item.category}
              </p>
              {item.description ? (
                <p className="mt-2 text-sm text-slate-200/80">
                  {item.description}
                </p>
              ) : null}
            </div>

            <div className="text-right font-semibold text-emerald-200">
              {item.from ? "from " : ""}
              {money(item.price)}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {(item.tags ?? []).map((t) => (
              <Badge key={t} tone="soft">
                {t}
              </Badge>
            ))}
            {item.serving ? <Badge tone="soft">{item.serving}</Badge> : null}
          </div>

          <a
            href={whatsappOrderLink(
              `Hi ${site.name}! I want: ${item.name}. Price: ${
                item.from ? "from " : ""
              }${money(item.price)}.`
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_40px_rgba(14,165,233,0.35)] transition hover:translate-y-[-1px]"
          >
            Order on WhatsApp
          </a>
        </motion.div>
      ))}
    </div>
  );
}
