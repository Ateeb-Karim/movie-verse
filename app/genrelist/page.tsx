import GenreList from "@/components/genrelist";
import { getGenres } from "@/lib/tmdb";
import { JSX } from "react/jsx-runtime";

interface Genre {
  id: number;
  name: string;
}

interface genreList {
  genres: Genre[];
}

export default async function GenresPage(): Promise<JSX.Element> {
  const { genres: allGenres }: genreList = await getGenres();
  const featuredGenres = [
    "Action",
    "Comedy",
    "Horror",
    "Science Fiction",
    "Drama",
    "Romance",
  ];

  const genre = allGenres.filter((genre: Genre) =>
    featuredGenres.includes(genre.name),
  );

  return (
    <div>
      <GenreList genres={genre} />
    </div>
  );
}
