import { useMovie } from "@/entities/movie";
import { MoviePagination } from "@/features/movie-pagination";
import { MovieList } from "@/widgets/movie-list";
import { memo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCategoryFilter } from "@/features/movieFilter/ui/MovieCategoryFilter";
import MovieSort from "@/features/movieSort";

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGenre, setSelectedGenre] = useState<number | undefined>();
  
  

  const page = searchParams.get("page") ?? "1";
  const sort_by = searchParams.get("sort_by") ?? "popularity.desc";

  const { data } = getMovies({
    page: page as string,
    with_genres: selectedGenre ? selectedGenre.toString() : undefined,
    sort_by: sort_by
  });

  const handlePageChange = (newPage: number) => {
    searchParams.set("page", newPage.toString());
    setSearchParams(searchParams);
  };

  const handleGenreChange = (genreId: number | undefined) => {
    setSelectedGenre(genreId);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="container py-4 flex justify-start gap-8">
        <MovieCategoryFilter value={selectedGenre} onChange={handleGenreChange} />
        <MovieSort/>
      </div>
      <MovieList movies={data?.results} />

      <MoviePagination 
        page={page} 
        total_pages={data?.total_pages} 
        onChange={handlePageChange} 
      />
    </div>
  );
});
