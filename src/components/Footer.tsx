import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/data/site";
import { whatsappOrderLink } from "@/lib/format";

export default function Footer() {
  const orderMsg =
    "Hi " +
    site.name +
    "! I want to place an order. Please share today's availability and estimated delivery time.";

  return (
    <footer className="relative border-t border-white/10 bg-[#08090d] text-[#f3ede2]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <Container className="relative py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="space-y-4">
            <p
              className="text-lg font-semibold tracking-[0.16em] text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {site.name}
            </p>
            <p className="text-sm text-white/70">{site.tagline}</p>
            <p className="text-sm text-white/60">{site.description}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={whatsappOrderLink(orderMsg)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/25 bg-white/90 px-4 py-2 text-xs font-semibold text-black hover:bg-white"
              >
                Order on WhatsApp
              </a>
              <Link
                href="/menu"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:border-white/40"
              >
                View Menu
              </Link>
            </div>
          </div>

          <div className="space-y-3 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.32em] text-white/60">
              Visit
            </p>
            <p className="text-base text-white">{site.addressLine}</p>
            <p className="text-sm text-white/70">{site.city}</p>
            <div className="flex flex-col gap-2 pt-2 text-sm">
              <a
                className="w-fit border-b border-transparent text-white/80 transition hover:border-white/40 hover:text-white"
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
              <a
                className="w-fit border-b border-transparent text-white/80 transition hover:border-white/40 hover:text-white"
                href={whatsappOrderLink(orderMsg)}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: {site.whatsappNumber}
              </a>
            </div>
          </div>

          <div className="space-y-3 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.32em] text-white/60">
              Explore
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="hover:text-white" href="/menu">
                Menu
              </Link>
              <Link className="hover:text-white" href="/about">
                About
              </Link>
              <a
                className="hover:text-white"
                href={whatsappOrderLink(orderMsg)}
                target="_blank"
                rel="noreferrer"
              >
                Book a Table
              </a>
            </div>

            <div className="pt-3">
              <p className="text-xs uppercase tracking-[0.32em] text-white/60">
                Social
              </p>
              <div className="mt-2 flex flex-col gap-2">
                <a
                  className="hover:text-white"
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="hover:text-white"
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-white/40">Midnight dining • Crafted with care</p>
        </div>
      </Container>
    </footer>
  );
}
