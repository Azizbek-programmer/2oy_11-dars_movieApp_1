import { MovieCard, type IMovie } from "@/entities/movie";
import { memo, type FC } from "react";

interface Props {
  movies: IMovie[];
  isLoading?: boolean; 
}

export const MovieList: FC<Props> = memo((props) => {
  const { movies, isLoading } = props;

  return (
    <div className="container grid lg:grid-cols-4 gap-3 md:grid-cols-3 grid-cols-2">
      {isLoading
        ? Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="w-full h-[320px] bg-gray-300 dark:bg-slate-700 animate-pulse rounded-xl"
            />
          ))
        : movies?.map((item: IMovie) => (
            <MovieCard key={item.id} movie={item} />
          ))}
    </div>
  );
});
