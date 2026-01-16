import { whatsappOrderLink } from "@/lib/format";
import { site } from "@/data/site";

export default function MobileOrderBar() {
  const orderMsg = `Hi ${site.name}! I want to place an order.`;

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 sm:hidden">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white shadow-[0_18px_60px_-30px_rgba(6,182,212,0.6)] backdrop-blur">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-slate-300">
            Ready to order?
          </p>
          <p className="text-sm font-semibold text-white">
            WhatsApp us in 1 tap
          </p>
        </div>
        <a
          href={whatsappOrderLink(orderMsg)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(14,165,233,0.35)] hover:translate-y-[-1px]"
        >
          Order
        </a>
      </div>
    </div>
  );
}
