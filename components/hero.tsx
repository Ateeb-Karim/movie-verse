"use client";

import { useState, useEffect, useCallback } from "react";
import { getPoster } from "@/lib/tmdb";
import { JSX } from "react/jsx-runtime";

interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  runtime?: number;
}

export default function Hero({ movies }: { movies: Movie[] }): JSX.Element {
  const slides = movies.slice(0, 5);
  const [index, setIndex] = useState<number>(0);

  const next = useCallback((): void => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = (): void => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  if (!slides.length) {
    return <div className="text-white text-2xl">No movie found</div>;
  }

  const movie: Movie = slides[index];
  const vote_average: string = movie.vote_average.toFixed(1);
  const release_date: string = movie.release_date.slice(0, 4);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-b-2xl group">
      {slides.map(
        (movie: Movie, i: number): JSX.Element => (
          <img
            key={movie.id}
            src={getPoster(movie.backdrop_path)}
            alt={movie.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ),
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-transparent" />
      <div
        key={movie.id}
        className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-end px-6 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <span className="text-accent text-sm font-semibold mb-2 uppercase tracking-wider">
          Featured
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-2xl leading-tight">
          {movie.title}
        </h1>
        <div className="flex items-center gap-4 mt-4 text-muted text-sm">
          <span className="text-accent font-semibold">⭐ {vote_average}</span>
          <span>{release_date}</span>
        </div>
        <p className="text-muted max-w-xl mt-4 line-clamp-3">
          {movie.overview}
        </p>
      </div>
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-background/80"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-background/80"
      >
        ›
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map(
          (_, i: number): JSX.Element => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ),
        )}
      </div>
    </section>
  );
}
