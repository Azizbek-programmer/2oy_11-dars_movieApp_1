import { useMovie } from "@/entities/movie";
import { MoviePagination } from "@/features/movie-pagination";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieSort } from "@/features/movieSort/ui/MovieSort";
import { MovieCategoryFilter } from "@/features/movieFilter/ui/MovieCategoryFilter";

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const sort_by = searchParams.get("sort_by") ?? "popularity.desc";
  const category = searchParams.get("category") ?? "";

  const { data, isLoading } = getMovies({
    page: page,
    sort_by: sort_by,
    with_genres: category
  });

  const handlePageChange = (newPage: number) => {
    searchParams.set("page", newPage.toString());
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="container py-4 flex gap-4">
        <MovieCategoryFilter/>
        <MovieSort />
      </div>

      <MovieList  movies={data?.results || []} isLoading={isLoading}/>

      <MoviePagination
        page={page}
        total_pages={data?.total_pages}
        onChange={handlePageChange}
      />
    </div>
  );
});
