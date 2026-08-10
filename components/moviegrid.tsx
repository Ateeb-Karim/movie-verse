import MovieCard from "./moviecard";
import { JSX } from "react/jsx-runtime";

interface movie {
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  id: number;
}

export default function MovieGrid({
  title,
  movies,
}: {
  title: string;
  movies: movie[];
}): JSX.Element {
  if (!movies?.length) {
    return <div className="text-white text-2xl">No movie found</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 tracking-tight">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
        {movies.map(
          (movie: movie, i: number): JSX.Element => (
            <div
              key={movie.id}
              className="animate-in fade-in slide-in-from-bottom-2"
              style={{
                animationDelay: `${i * 60}ms`,
                animationDuration: "400ms",
                animationFillMode: "backwards",
              }}
            >
              <MovieCard movie={movie} />
            </div>
          ),
        )}
      </div>
    </section>
  );
}
