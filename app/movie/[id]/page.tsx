import {
  getMovieDetails,
  getMovieCredits,
  getMovieVideos,
  getPoster,
} from "@/lib/tmdb";
import Link from "next/link";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  runtime?: number;
  genres?: Genre[];
}

interface Cast {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

interface Video {
  type: string;
  site: string;
  key: string;
}

interface Credit {
  id?: number;
  cast: Cast[];
}

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const movie: Movie = await getMovieDetails((await params).id);
  const credits: Credit = await getMovieCredits((await params).id);
  const videos = await getMovieVideos((await params).id);

  const trailer = videos.results?.find(
    (video: Video) => video.type === "Trailer" && video.site === "YouTube",
  );
  const cast = credits.cast?.slice(0, 6) as Cast[];

  return (
    <main className="relative">
      <div className="relative h-[50vh] w-full">
        <img
          src={getPoster(movie.backdrop_path)}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>
      <div className="max-w-5xl mx-auto px-6 -mt-32 relative z-10 flex flex-col md:flex-row gap-8">
        <img
          src={getPoster(movie.poster_path)}
          alt={movie.title}
          className="w-48 md:w-64 rounded-xl shadow-2xl border border-white/10 flex-shrink-0"
        />
        <div className="flex-1 pt-4 md:pt-32">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {movie.title}
          </h1>
          <div className="flex items-center gap-4 mt-3 text-muted text-sm">
            <span className="text-accent font-semibold">
              ⭐ {movie.vote_average?.toFixed(1)}
            </span>
            <span>{movie.release_date}</span>
            <span>{movie.runtime} min</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {movie.genres?.map((g: Genre, i: number) => (
              <span
                key={i}
                className="bg-surface border border-white/10 text-white text-xs px-3 py-1 rounded-full"
              >
                {g.name}
              </span>
            ))}
          </div>
          <p className="text-muted mt-6 leading-relaxed max-w-2xl">
            {movie.overview}
          </p>
          {trailer && (
            <Link
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              ▶ Watch Trailer
            </Link>
          )}
        </div>
      </div>
      {cast?.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-white text-2xl font-bold mb-4">Cast</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {cast.map((actor: Cast, i: number) => (
              <div key={i} className="text-center">
                <img
                  src={getPoster(actor.profile_path)}
                  alt={actor.name}
                  className="w-full aspect-square object-cover rounded-full border border-white/10 mb-2"
                />
                <p className="text-white text-sm font-medium truncate">
                  {actor.name}
                </p>
                <p className="text-muted text-xs truncate">{actor.character}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
