import GenreList from "@/components/genrelist";
import Hero from "@/components/hero";
import MovieGrid from "@/components/moviegrid";
import { getGenres, getTrending } from "@/lib/tmdb";
import { JSX } from "react/jsx-runtime";

interface Genres {
  id: number;
  name: string;
}

interface genreList {
  genres: Genres[];
}

interface MovieResults {
  results: Movie[];
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default async function Home(): Promise<JSX.Element> {
  const featuredGenres = [
    "Action",
    "Comedy",
    "Horror",
    "Science Fiction",
    "Drama",
    "Romance",
  ];

  const { results }: MovieResults = await getTrending();
  const { genres }: genreList = await getGenres();
  const genre = genres.filter((genre: Genres) =>
    featuredGenres.includes(genre.name),
  );

  return (
    <main>
      <Hero movies={results} />
      <MovieGrid title="Trending This Week" movies={results} />
      <GenreList genres={genre} />
    </main>
  );
}
