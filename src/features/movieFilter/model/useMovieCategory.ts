import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/api";

export const useMovieCategory = () => {
  const getCategories = () =>
    useQuery({
      queryKey: ["categories"],
      queryFn: async () => {
        const { data } = await api.get("genre/movie/list");
        return data.genres;
      },
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    });

  return { getCategories };
};
