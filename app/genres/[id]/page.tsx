import Link from "next/link";
import { getGenres } from "@/lib/tmdb";
import { JSX } from "react/jsx-runtime";

interface Genre {
  id: number;
  name: string;
}

export default async function GenresPage(): Promise<JSX.Element> {
  const genresData: { genres: Genre[] } = await getGenres();
  const genres = genresData.genres;

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-white text-3xl font-bold mb-8">Browse All Genres</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {genres.map((genre: Genre) => (
          <Link
            key={genre.id}
            href={`/genre/${genre.id}?name=${encodeURIComponent(genre.name)}`}
            className="group relative bg-surface border border-white/10 hover:border-primary rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-white font-semibold group-hover:text-primary transition-colors">
              {genre.name}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
