"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CategoryPills from "@/components/CategoryPills";
import MenuGrid from "@/components/MenuGrid";
import { categories, menuItems, MenuCategory } from "@/data/menu";
import Link from "next/link";
import { useMemo, useState } from "react";
import { site } from "@/data/site";
import { whatsappOrderLink } from "@/lib/format";

export default function MenuPage() {
  const [active, setActive] = useState<MenuCategory | "All">("All");
  const [q, setQ] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const orderMsg = `Hi ${site.name}! I want to place an order. Please share today's availability and estimated delivery time.`;

  const categoryImages: Record<MenuCategory | "All", string> = {
    All: "/images/menu.png",
    Popular: "/images/menu.png",
    Shawarma: "/images/menu.png",
    "Turkish Fatayer": "/images/menu.png",
    "Falafel Sandwich": "/images/menu.png",
    Mandi: "/images/menu.png",
    "Turkish Pizza": "/images/menu.png",
    Sides: "/images/menu.png",
    Mutabbaq: "/images/menu.png",
    Fries: "/images/menu.png",
  };

  const heroImage = categoryImages[active] ?? categoryImages.All;

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchCategory = active === "All" ? true : item.category === active;
      const matchQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        (item.description ?? "").toLowerCase().includes(query) ||
        (item.tags ?? []).join(" ").toLowerCase().includes(query);

      return matchCategory && matchQuery;
    });
  }, [active, q]);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f3ede2]">
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

      {/* Mobile nav bar */}
      <div className="sticky top-0 z-20 flex flex-col items-center gap-3 border-b border-white/10 bg-[#0f1016]/90 px-4 py-3 backdrop-blur lg:hidden">
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

      {/* Mobile hero image so it stays visible */}
      <section className="relative h-64 w-full overflow-hidden lg:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
        <div className="absolute inset-0 flex items-end px-6 pb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/70">
              Experience
            </p>
            <h1
              className="mt-2 text-3xl font-light leading-[1.1] text-[#f3ede2]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Menu
            </h1>
          </div>
        </div>
      </section>

      <div className="grid min-h-screen lg:grid-cols-[1.05fr_1.15fr] lg:max-h-screen">
        {/* Left: hero imagery */}
        <section className="sticky top-0 hidden lg:flex h-screen flex-col items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/10" />

          <Link href="/" className="absolute top-6 left-6">
            <img
              src="/images/logo-wt-02.png"
              alt={site.name}
              className="h-40 w-auto"
            />
          </Link>

          {/* Top nav pill - centered */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full border border-white/12 bg-black/70 px-3 py-2 shadow-[0_10px_50px_rgba(0,0,0,0.35)]">
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

          {/* Title at bottom - sticky within sticky section */}
          <div className="absolute bottom-0 left-0 right-0 z-10 w-full px-8 pb-14 md:px-12 lg:px-14">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Experience
            </p>
            <h1
              className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-[#f3ede2]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Menu
            </h1>
          </div>
        </section>

        {/* Right: menu listing */}
        <section className="relative h-screen overflow-y-auto bg-[#0f1016]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_30%)]" />
          <Container className="relative py-12 lg:py-14">
            <SectionTitle
              title="Chef's Selection"
              subtitle="Curated favorites and house specials crafted for sharing."
            />

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CategoryPills
                categories={["All", ...categories]}
                active={active}
                onChange={setActive}
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/8 bg-black/40 p-4 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.6)]">
              <div className="flex flex-col gap-4">
                {filtered.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[auto_1fr_auto] items-start gap-4 rounded-xl border border-white/5 bg-white/3 p-4 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.6)]"
                  >
                    <div className="h-16 w-16 overflow-hidden rounded-lg border border-white/10 bg-black/30">
                      <div
                        className="h-full w-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${
                            categoryImages[item.category] ?? categoryImages.All
                          })`,
                        }}
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 text-sm uppercase tracking-[0.24em] text-white/60">
                        <span>{item.category}</span>
                      </div>
                      <p
                        className="text-xl font-light text-white"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {item.name}
                      </p>
                      {item.description ? (
                        <p className="text-sm text-white/70">
                          {item.description}
                        </p>
                      ) : null}
                      {item.tags?.length ? (
                        <div className="mt-1 flex flex-wrap gap-2 text-xs text-emerald-200/80">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-emerald-200/30 px-2 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                          {item.serving ? (
                            <span className="rounded-full border border-emerald-200/30 px-2 py-1">
                              {item.serving}
                            </span>
                          ) : null}
                        </div>
                      ) : item.serving ? (
                        <div className="mt-1 text-xs text-emerald-200/80">
                          {item.serving}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col items-end gap-3 text-right">
                      <p className="text-lg font-semibold text-emerald-200">
                        {item.from ? "from " : ""}
                        {item.price.toLocaleString("en-US")}
                      </p>
                      <a
                        href={whatsappOrderLink(
                          `Hi ${site.name}! I want: ${item.name}. Price: ${
                            item.from ? "from " : ""
                          }${item.price}.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-white transition hover:border-white/50"
                      >
                        Order
                      </a>
                    </div>
                  </div>
                ))}

                {!filtered.length ? (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-white">
                    <p className="font-semibold">No results</p>
                    <p className="mt-1 text-sm text-white/70">
                      Try a different category.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
