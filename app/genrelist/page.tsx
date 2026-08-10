import GenreList from "@/components/genrelist";
import { getGenres } from "@/lib/tmdb";
import { JSX } from "react/jsx-runtime";

interface Genre {
  id: number;
  name: string;
}

interface Genres {
  genres: Genre[];
}

export default async function GenresPage(): Promise<JSX.Element> {
  const featuredGenres = [
    "Action",
    "Comedy",
    "Horror",
    "Science Fiction",
    "Drama",
    "Romance",
  ];

  const allGenres: Genres = await getGenres();
  const genre = allGenres.genres.filter((genre: Genre) =>
    featuredGenres.includes(genre.name),
  );

  return <GenreList genres={genre} />;
}
