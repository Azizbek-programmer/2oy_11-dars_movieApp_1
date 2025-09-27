import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";
import MovieCardSkeleton from "./skeleton/MovieSkeleton";

interface Props {
  movie?: IMovie;
  isLoading?: boolean; 
}

export const MovieCard: FC<Props> = memo((props) => {
  const { movie, isLoading } = props;
  const navigate = useNavigate();

  if (isLoading || !movie) {
    return <MovieCardSkeleton />;
  }

  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-xl cursor-pointer hover:scale-104 duration-300"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
        src={createImageUrl(movie.poster_path)}
        alt={movie.title}
        className="w-full h-[320px] object-cover"
      />
      <div className="p-3 space-y-1">
        <h3
          className="line-clamp-1 font-semibold text-lg"
          title={movie.title}
        >
          {movie.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {movie.release_date} • {movie.original_language}
        </p>
        <p className="text-yellow-500 font-medium"> {movie.vote_average}</p>
      </div>
    </div>
  );
});
