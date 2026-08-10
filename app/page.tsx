import GenreList from "@/components/genrelist";
import Hero from "@/components/hero";
import MovieGrid from "@/components/moviegrid";
import { getGenres, getTrending } from "@/lib/tmdb";
import { JSX } from "react/jsx-runtime";
import Loading from "./loading";

interface Genres {
  id: number;
  name: string;
}

interface genreList {
  genres: Genres[];
}

interface MovieResult {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  runtime?: number;
  poster_path: string;
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

  const data = await getTrending();
  const { results }: { results: MovieResult[] } = data;
  const { genres }: genreList = await getGenres();
  const genre = genres.filter((genre: Genres) =>
    featuredGenres.includes(genre.name),
  );

  return (
    <main>
      {results ? <Hero movies={results} /> : <Loading />}
      <MovieGrid title="Trending This Week" movies={results} />
      <GenreList genres={genre} />
    </main>
  );
}
