import Link from "next/link";
import { getPoster } from "@/lib/tmdb";
import { JSX } from "react/jsx-runtime";

interface movie {
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  id: number;
}

export default function MovieCard({ movie }: { movie: movie }): JSX.Element {
  const vote_average: string = movie.vote_average.toFixed(1);
  const release_date: string = movie.release_date?.slice(0, 4);

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group relative flex-shrink-0 w-44 md:w-52 rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-primary/40 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/20"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        <img
          src={getPoster(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 bg-background/60 backdrop-blur-md border border-white/10 text-accent text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
          ⭐ {vote_average}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 ease-out">
          <div className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/30">
            <span className="text-white text-lg pl-0.5">▶</span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 bg-transparent backdrop-blur-[5px] rounded-t-xl transition-transform duration-300 ease-out p-3 max-h-[70%] overflow-hidden">
          <p className="text-muted text-xs line-clamp-5">{movie.overview}</p>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-white text-sm font-semibold truncate group-hover:text-primary transition-colors duration-300">
          {movie.title}
        </h3>
        <span className="text-muted text-xs">{release_date || "N/A"}</span>
      </div>
    </Link>
  );
}
