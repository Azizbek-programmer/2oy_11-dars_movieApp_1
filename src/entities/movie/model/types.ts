export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  original_language: string;
  adult: boolean;
  genre_ids: number[];
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieParams {
  id?: string;
  name?: string;
  page?: string;
  sort_by?: string;
  with_genres?: string;
  value?: number;
}

