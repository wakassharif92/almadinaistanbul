import Container from "@/components/Container";
import Link from "next/link";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="font-semibold tracking-tight text-white">
          {site.name}
          <span className="text-slate-400"> • {site.tagline}</span>
        </Link>

        <nav className="flex items-center gap-3 text-sm font-semibold">
          <Link
            className="rounded-lg px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
            href="/menu"
          >
            Menu
          </Link>
        </nav>
      </Container>
    </header>
  );
}
