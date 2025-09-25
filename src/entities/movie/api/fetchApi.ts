import { api } from "@/shared/api";
import type { IMovieParams } from "../model/types";

export const fetchMovies = async (params?: IMovieParams) => {
  const { data } = await api.get("discover/movie", {
    params: {
      ...params,
      without_genres: "18,36,27,10402,10749",
      // sort_by: "vote_count.desc"
      
    },
  });
  return data;
};

export const fetchMovieById = async (id: string) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const fetchMovieInfo = async (id: string, path: string) => {
  const response = await api.get(`/movie/${id}/${path}`);
  return response.data;
};
