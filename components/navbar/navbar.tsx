"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, JSX } from "react";
import Form from "./form";

const links = [
  { href: "/", label: "Home" },
  { href: "/allmovies", label: "Movies" },
  { href: "/genrelist", label: "Genres" },
];

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="text-xl font-bold text-white tracking-wide">
          🎬 <span className="text-primary">Movie</span>Verse
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  active ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Form />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 flex flex-col gap-4 border-t border-white/10 pt-4">
          <Form />
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium ${active ? "text-primary" : "text-white"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
