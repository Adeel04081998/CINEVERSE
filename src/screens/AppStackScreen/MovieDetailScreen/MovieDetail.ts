import { useEffect, useState } from "react";
import apiRequest from "@manager/apiRequest";
import { IMAGE_BASE_URL, PLACEHOLDER_IMAGE } from "@constants/constants";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  genres: { id: number; name: string }[];
  overview: string;
}

export const useMovieDetails = (movieId: number) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMovieDetails();
    fetchMovieTrailer();
  }, [movieId]);

  const fetchMovieDetails = async () => {
    try {
      const data = await apiRequest(`/movie/${movieId}`);
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieTrailer = async () => {
    try {
      const data = await apiRequest(`/movie/${movieId}/videos`);
      const trailers = data.results.filter((video: any) => video.type === "Trailer");
      if (trailers.length > 0) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailers[0].key}?autoplay=1`);
      }
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };

  return { movie, trailerUrl, loading };
};
