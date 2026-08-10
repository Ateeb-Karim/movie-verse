import Link from "next/link";
import { JSX } from "react/jsx-runtime";

export default function Footer(): JSX.Element {
  return (
    <footer className="relative border-t border-white/10 mt-16 bg-surface/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="text-white font-bold text-xl">
            🎬 <span className="text-primary">Movie</span>Verse
          </p>
          <p className="text-muted text-sm mt-3 leading-relaxed max-w-xs">
            Discover trending movies, explore genres, and find your next
            favorite film.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
            Navigate
          </h4>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-muted text-sm hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/allmovies"
              className="text-muted text-sm hover:text-primary transition-colors"
            >
              Movies
            </Link>
            <Link
              href="/genrelist"
              className="text-muted text-sm hover:text-primary transition-colors"
            >
              Genres
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
            Support
          </h4>
          <div className="flex flex-col gap-3">
            <Link
              href="#"
              className="text-muted text-sm hover:text-primary transition-colors"
            >
              Account
            </Link>
            <Link
              href="#"
              className="text-muted text-sm hover:text-primary transition-colors"
            >
              Help Center
            </Link>
            <Link
              href="#"
              className="text-muted text-sm hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-muted text-sm hover:text-primary transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
        <div>
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-muted text-xs">
              © {new Date().getFullYear()} MovieVerse. All rights reserved.
            </p>
            <p className="text-muted text-xs">
              Data provided by{" "}
              <Link
                href="https://www.themoviedb.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                TMDB
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
