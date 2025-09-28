import { memo, useState } from "react";
import { useSearchMovie } from "../model/useSearchMovie";
import { MovieList } from "@/widgets/movie-list";
import { Empty, Input } from "antd";
import useDebounce from "@/shared/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";

export const SearchMovie = memo(() => {
  const [value, setValue] = useState("");
  const { getMovieBySearch } = useSearchMovie();
  const debounceValue = useDebounce(value, 800);

  const { data, isFetching } = useQuery(
    getMovieBySearch({ query: debounceValue })
  );

  return (
    <div>
      <div className="container">
        <Input
          className="custom-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search movies..."
        />
        <br />
        <br />
      </div>

      <MovieList movies={data?.results} />

      {!data?.results?.length && debounceValue && !isFetching && (
        <Empty description="No movies found" />
      )}
    </div>
  );
});
