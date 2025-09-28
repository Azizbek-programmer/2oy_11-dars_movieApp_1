import { fetchMovieBySearch } from "../api/fetchApi"

export const useSearchMovie = () => {
  const getMovieBySearch = (params: { query: string }) => ({
    queryKey: ["SearchMovieKey", params],
    queryFn: () => fetchMovieBySearch(params),
  });
  return { getMovieBySearch };
};
