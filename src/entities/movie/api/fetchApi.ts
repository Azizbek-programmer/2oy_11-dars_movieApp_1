import { api } from "@/shared/api";
import type { IMovieParams } from "../model/types";

export const fetchMovies = async (params?: IMovieParams) => {
  const { data } = await api.get("discover/movie", {
    params: {
      ...params,
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
