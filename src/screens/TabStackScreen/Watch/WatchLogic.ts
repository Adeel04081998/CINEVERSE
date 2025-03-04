import { useEffect, useState } from 'react';
import apiRequest from '@manager/apiRequest';
import { goToAppStack } from '@navigation/NavigationService';
import RouteName from '@navigation/RouteName';

const useWatchLogic = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async () => {
        try {
            const data = await apiRequest('/movie/upcoming');
            setMovies(data.results);
        } catch (error) {
            console.error('Failed to fetch movies:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleSearchPress = () => {
        goToAppStack(RouteName.SearchCategoriesScreen, { data: movies });
    };

    const handleMoviePress = (movieId: number) => {
        goToAppStack(RouteName.MovieDetailScreen, { movieId });
    };

    return { movies, loading, handleSearchPress, handleMoviePress };
};

export default useWatchLogic;
