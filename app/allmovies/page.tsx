import MovieCard from "@/components/moviecard";
import { getPopular } from "@/lib/tmdb";
import Link from "next/link";
import { JSX } from "react";

interface movie {
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  id: number;
}

interface MovieList {
  results: movie[];
  total_pages: number;
}

export default async function AllMoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<JSX.Element> {
  const page = Number((await searchParams).page) || 1;
  const data: MovieList = await getPopular(page);
  const { results: movies, total_pages } = data;

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-white text-3xl font-bold mb-6">All Movies</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {movies.map((movie: movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-10">
        {page > 1 && (
          <Link
            href={`/allmovies?page=${page - 1}`}
            className="bg-surface border border-white/10 hover:border-primary text-white px-5 py-2 rounded-lg transition-colors"
          >
            ← Previous
          </Link>
        )}
        <span className="text-muted text-sm">
          Page {page} of {Math.min(total_pages, 500)}
        </span>
        {page < total_pages && (
          <Link
            href={`/allmovies?page=${page + 1}`}
            className="bg-surface border border-white/10 hover:border-primary text-white px-5 py-2 rounded-lg transition-colors"
          >
            Next →
          </Link>
        )}
      </div>
    </main>
  );
}
