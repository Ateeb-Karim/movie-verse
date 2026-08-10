import Link from "next/link";
import { JSX } from "react/jsx-runtime";

interface genre {
  id: number;
  name: string;
}

export default function GenreList({
  genres,
}: {
  genres: genre[];
}): JSX.Element {
  if (!genres?.length) {
    return (
      <div>
        <div className="text-white text-2xl">No movie found</div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 tracking-tight">
        Browse by Genre
      </h2>
      <div className="flex flex-wrap gap-3 md:gap-4">
        {genres.map(
          (genre: genre, i: number): JSX.Element => (
            <Link
              key={genre.id}
              href={`/genre/${genre.id}?name=${encodeURIComponent(genre.name)}`}
              className="bg-surface border border-white/10 hover:border-primary hover:bg-primary/10 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-1"
              style={{
                animationDelay: `${i * 50}ms`,
                animationDuration: "350ms",
                animationFillMode: "backwards",
              }}
            >
              {genre.name}
            </Link>
          ),
        )}
      </div>
    </section>
  );
}
