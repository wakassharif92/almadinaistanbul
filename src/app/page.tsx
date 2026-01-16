"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { whatsappOrderLink } from "@/lib/format";
import { useState, useEffect } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1544145945-f90425340c7b?w=1600&h=1200&fit=crop";

const cards = [
  {
    title: "Menu",
    href: "/menu",
    image: "/images/menu.png",
  },
  {
    title: "Reviews",
    href: "https://wa.me/" + (site.phone?.replace(/[^\d]/g, "") || ""),
    image: "/images/review-1.png",
  },
  {
    title: "Our Space",
    href: "/about",
    image: "/images/menu.png",
  },
];

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const orderMsg = `Hi ${site.name}! I want to place an order. Please share today's availability and estimated delivery time.`;

  return (
    <>
      {/* Splash Screen */}
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="text-center">
            <img
              src="/images/logo-wt-02.png"
              alt={site.name}
              className="h-100 w-auto mx-auto"
            />
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/60">
              {site.tagline}
            </p>
          </div>
        </div>
      )}

      {/* Mobile nav bar */}
      <div className="sticky top-0 z-30 flex flex-col items-center gap-3 border-b border-white/10 bg-[#0f1016]/90 px-4 py-3 backdrop-blur lg:hidden">
        <Link href="/" className="flex justify-center">
          <img
            src="/images/logo-wt-02.png"
            alt={site.name}
            className="h-14 w-auto"
          />
        </Link>

        <div className="flex w-full flex-wrap items-center justify-center gap-3 text-sm font-semibold text-[#f5f0e9]">
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(true)}
            className="group flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/20 bg-black/70 text-white/80 transition hover:border-white/40"
          >
            <span className="block h-[2px] w-5 bg-white/80 transition-all duration-200 group-hover:w-6" />
            <span className="block h-[2px] w-4 bg-white/80 transition-all duration-200 group-hover:w-6" />
            <span className="block h-[2px] w-5 bg-white/80 transition-all duration-200 group-hover:w-6" />
            <span className="sr-only">Open menu</span>
          </button>

          <Link
            className="rounded-full px-4 py-2 hover:text-white"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="rounded-full px-4 py-2 hover:text-white"
            href="/about"
          >
            About
          </Link>
          <a
            className="rounded-full border border-white/25 bg-transparent px-4 py-2 hover:border-white/50"
            href={whatsappOrderLink(orderMsg)}
            target="_blank"
            rel="noreferrer"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Fullscreen Menu Modal */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/95 text-[#f3ede2]">
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white/80 hover:border-white/40 hover:text-white"
          >
            ✕
          </button>

          <div className="flex flex-col items-center gap-6 text-center">
            {["Menu", "Reservation", "About", "Contact", "Blog"].map(
              (label) => {
                const hrefMap: Record<string, string> = {
                  Menu: "/menu",
                  Reservation: whatsappOrderLink(orderMsg),
                  About: "/about",
                  Contact: "mailto:info@example.com",
                  Blog: "/blog",
                };
                const isExternal =
                  label === "Reservation" || label === "Contact";
                const commonClasses =
                  "text-3xl md:text-4xl lg:text-5xl font-light tracking-wide hover:text-white transition";

                if (isExternal) {
                  return (
                    <a
                      key={label}
                      href={hrefMap[label]}
                      target="_blank"
                      rel="noreferrer"
                      className={commonClasses}
                      style={{ fontFamily: "Georgia, serif" }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={label}
                    href={hrefMap[label]}
                    className={commonClasses}
                    style={{ fontFamily: "Georgia, serif" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              }
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="min-h-screen bg-[#0b0c10] text-[#f3ede2]">
        <main className="grid min-h-screen lg:grid-cols-[1.75fr_1fr]">
          {/* Left: cinematic hero */}
          <section className="relative flex min-h-[80vh] items-end overflow-hidden">
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/video-2.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Social media icons - bottom right */}
            <div className="absolute bottom-6 right-6 z-10 flex gap-3">
              <a
                href={site.social?.instagram || "https://instagram.com"}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-sm transition hover:border-white/40 hover:bg-black/70 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={site.social?.facebook || "https://facebook.com"}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-sm transition hover:border-white/40 hover:bg-black/70 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Logo at extreme left (desktop) */}
            <Link href="/" className="absolute top-6 left-6 hidden lg:block">
              <img
                src="/images/logo-wt-02.png"
                alt={site.name}
                className="h-40 w-auto"
              />
            </Link>

            {/* Top nav pill - centered (desktop) */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-3 rounded-full border border-white/12 bg-black/70 px-3 py-2 shadow-[0_10px_50px_rgba(0,0,0,0.35)]">
              <button
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(true)}
                className="group flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-white/20 bg-black/70 text-white/80 transition hover:border-white/40"
              >
                <span className="block h-[2px] w-5 bg-white/80 transition-all duration-200 group-hover:w-6" />
                <span className="block h-[2px] w-4 bg-white/80 transition-all duration-200 group-hover:w-6" />
                <span className="block h-[2px] w-5 bg-white/80 transition-all duration-200 group-hover:w-6" />
                <span className="sr-only">Open menu</span>
              </button>

              <Link
                href="/"
                className="hidden px-3 text-lg font-semibold tracking-[0.18em] text-[#f5f0e9]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {site.name}
              </Link>

              <div className="flex items-center gap-2 text-sm font-semibold text-[#f5f0e9]">
                <Link
                  className="rounded-full px-4 py-2 hover:text-white"
                  href="/menu"
                >
                  Menu
                </Link>
                <Link
                  className="rounded-full px-4 py-2 hover:text-white"
                  href="/about"
                >
                  About
                </Link>
                <a
                  className="rounded-full border border-white/25 bg-transparent px-4 py-2 hover:border-white/50"
                  href={whatsappOrderLink(orderMsg)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order Now
                </a>
              </div>
            </div>

            {/* Title block */}
            <div className="relative z-10 flex w-full flex-col gap-6 px-8 pb-16 md:px-12 lg:px-16">
              <div className="max-w-xl">
                <p className="text-sm uppercase tracking-[0.4em] text-white/80">
                  Turkish Shawarma, Fatayer and More
                </p>
                <h1
                  className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-[#f3ede2]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Istanbul Sensation
                </h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/menu"
                  className="rounded-full border border-white/25 bg-white/15 px-6 py-3 text-sm font-semibold text-white hover:border-white/50"
                >
                  View Menu
                </a>
                <a
                  href={whatsappOrderLink(orderMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/25 bg-white/90 px-6 py-3 text-sm font-semibold text-black hover:bg-white"
                >
                  Order Now
                </a>
              </div>
            </div>
          </section>

          {/* Right: stacked cards */}
          <aside className="flex flex-col gap-4 bg-[#0f1016] p-4 lg:p-6">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="relative isolate flex min-h-[180px] flex-1 items-end overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/5" />
                <div className="relative z-10 flex w-full items-center justify-between px-5 py-4 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      {card.title}
                    </p>
                    <h3
                      className="text-2xl font-light tracking-wide"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/50 text-lg">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </aside>
        </main>

        {/* Mobile secondary links */}
        <section className="lg:hidden px-6 py-10 border-t border-white/5 bg-[#0f1016] text-center">
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-white/80">
            <Link
              className="rounded-full border border-white/15 px-4 py-2"
              href="/menu"
            >
              Menu
            </Link>
            <Link
              className="rounded-full border border-white/15 px-4 py-2"
              href="/about"
            >
              About
            </Link>
            <a
              className="rounded-full border border-white/20 bg-white/90 px-4 py-2 text-black"
              href={whatsappOrderLink(orderMsg)}
              target="_blank"
              rel="noreferrer"
            >
              Book a Table
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
