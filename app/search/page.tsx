import MovieCard from "@/components/moviecard";
import { SearchMovies } from "@/lib/tmdb";
import { JSX } from "react/jsx-runtime";

interface SearchParams {
  q: string;
}

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<JSX.Element> {
  const query = (await searchParams).q || "";
  const movies: Movie[] = query ? (await SearchMovies(query)).results : [];

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-white text-2xl font-bold mb-6">
        {movies.length > 0
          ? `Results for "${query}"`
          : `No results found for "${query}"`}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
