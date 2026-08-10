const BaseURl = "https://api.themoviedb.org/3";
const BaseImage = "https://image.tmdb.org/t/p/w500";

const Header = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  accept: "application/json",
};

const getTrending = async () => {
  const response = await fetch(`${BaseURl}/trending/movie/week`, {
    headers: Header,
    next: {
      revalidate: 3600,
    },
  });

  const data = await response.json();

  return data;
};

const getPopular = async (page: number = 1) => {
  const response = await fetch(`${BaseURl}/movie/popular?page=${page}`, {
    headers: Header,
    next: {
      revalidate: 3600,
    },
  });

  const data = await response.json();

  return data;
};

const getGenres = async () => {
  const response = await fetch(`${BaseURl}/genre/movie/list`, {
    headers: Header,
    next: {
      revalidate: 3600,
    },
  });

  const data = await response.json();

  return data;
};

const SearchMovies = async (query: string) => {
  const response = await fetch(
    `${BaseURl}/search/movie?query=${encodeURIComponent(query)}`,
    {
      headers: Header,
      next: {
        revalidate: 3600,
      },
    },
  );

  const data = await response.json();

  return data;
};

const getMoviesByGenres = async (genreId: string) => {
  const response = await fetch(
    `${BaseURl}/discover/movie?with_genres=${genreId}`,
    {
      headers: Header,
      next: {
        revalidate: 3600,
      },
    },
  );

  const data = await response.json();

  return data;
};

const getMovieDetails = async (id: string) => {
  const response = await fetch(`${BaseURl}/movie/${id}`, {
    headers: Header,
    next: {
      revalidate: 3600,
    },
  });

  const data = await response.json();

  return data;
};

const getMovieCredits = async (id: string) => {
  const response = await fetch(`${BaseURl}/movie/${id}/credits`, {
    headers: Header,
    next: {
      revalidate: 3600,
    },
  });

  const data = await response.json();

  return data;
};

const getMovieVideos = async (id: string) => {
  const response = await fetch(`${BaseURl}/movie/${id}/videos`, {
    headers: Header,
    next: {
      revalidate: 3600,
    },
  });

  const data = await response.json();

  return data;
};

const getPoster = (path: string) => {
  return path ? `${BaseImage}${path}` : "/no-image.jpg";
};

export {
  getTrending,
  getPopular,
  SearchMovies,
  getMoviesByGenres,
  getGenres,
  getMovieDetails,
  getMovieCredits,
  getMovieVideos,
  getPoster,
};
