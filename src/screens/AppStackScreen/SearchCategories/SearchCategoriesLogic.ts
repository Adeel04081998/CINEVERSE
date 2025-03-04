import { useState } from 'react';
export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
}

export const useSearchCategories = (initialData: Movie[]) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(initialData);
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.length === 0) {
      setFilteredMovies(initialData);
    } else {
      const filtered = initialData.filter((movie) =>
        movie?.title?.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return {
    loading,
    filteredMovies,
    searchText,
    handleSearch,
    setLoading,
    setFilteredMovies,
    setSearchText
  };
};
