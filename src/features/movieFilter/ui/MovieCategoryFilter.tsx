import { memo } from "react";
import { useMovieCategory } from "../model/useMovieCategory";
import { Select } from "antd";
// import { useSearchParams } from "react-router-dom";

const { Option } = Select;

interface Props {
  onChange: (genreId: number | undefined) => void;
  value?: number;
}
export const MovieCategoryFilter = memo(({ onChange, value }: Props) => {
  const { getCategories } = useMovieCategory();
  const { data: categories } = getCategories();

  // const [searchParams, setSearchParams] = useSearchParams();

  // const onChange: PaginationProps["onChange"] = (p) => {
  //   searchParams.set("page", p.toString());
  //   setSearchParams(searchParams);
  // };

  return (
    <Select
      value={value}
      placeholder="All Categories"
      style={{ width: 200 }}
      onChange={(val) => onChange(val || undefined)}
      allowClear
    >
      <Option>All Categories</Option>
      {categories?.map((genre: { id: number; name: string }) => (
        <Option key={genre.id} value={genre.id}>
          {genre.name}
        </Option>
      ))}
    </Select>
  );
});
