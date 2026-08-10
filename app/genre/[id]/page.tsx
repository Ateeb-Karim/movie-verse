import { getGenres, getMoviesByGenres } from "@/lib/tmdb";
import { JSX } from "react/jsx-runtime";
import MovieCard from "@/components/moviecard";
import GenreList from "@/components/genrelist";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
}

interface results {
  results: Movie[];
}

interface Genre {
  id: number;
  name: string;
}

export default async function GenrePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ name?: string }>;
}): Promise<JSX.Element> {
  const { results }: results = await getMoviesByGenres((await params).id);
  const genreName = (await searchParams).name || "Movies";
  const { genres: allgenre }: { genres: Genre[] } = await getGenres();
  const featuredGenre: string[] = [
    "Action",
    "Comedy",
    "Horror",
    "Science Fiction",
    "Drama",
    "Romance",
  ];
  const genre = allgenre.filter((genre: Genre) =>
    featuredGenre.includes(genre.name),
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <GenreList genres={genre} />
      <h1 className="text-white text-3xl font-bold mb-6">{genreName}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {results.map(
          (movie: Movie): JSX.Element => (
            <MovieCard key={movie.id} movie={movie} />
          ),
        )}
      </div>
    </main>
  );
}
