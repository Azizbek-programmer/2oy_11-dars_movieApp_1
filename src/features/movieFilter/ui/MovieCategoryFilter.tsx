import { memo } from "react";
import { useMovieCategory } from "../model/useMovieCategory";
import { Select } from "antd";
import { useSearchParams } from "react-router-dom";
import type { IMovieParams } from "@/entities/movie";

const { Option } = Select;

export const MovieCategoryFilter = memo(({ value }: IMovieParams) => {
  const { getCategories } = useMovieCategory();
  const { data: categories } = getCategories();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (val: number | undefined) => {
    if (val) {
      searchParams.set("category", val.toString());
    } else {
      searchParams.delete("category");
    }
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  return (
    <Select
      className="custom-select w-60"
      value={value}
      placeholder="All Categories"
      onChange={handleChange}
      allowClear
    >
      <Option value={undefined}>All Categories</Option>
      {categories?.map((genre: IMovieParams) => (
        <Option key={genre.id} value={genre.id}>
          {genre.name}
        </Option>
      ))}
    </Select>
  );
});
