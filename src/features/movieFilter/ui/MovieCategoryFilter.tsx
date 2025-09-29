import { memo } from "react";
import { useMovieCategory } from "../model/useMovieCategory";
import { Select } from "antd";
import { useSearchParams } from "react-router-dom";
import type { IMovieParams } from "@/entities/movie";
import { useTranslation } from "react-i18next";

const { Option } = Select;

export const MovieCategoryFilter = memo(({ value }: IMovieParams) => {
  const { t } = useTranslation();
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
      placeholder={t("category.placeholder")}
      onChange={handleChange}
      allowClear
    >
      <Option value={undefined}>{t("category.all")}</Option>
      {categories?.map((genre: IMovieParams) => (
        <Option key={genre.id} value={genre.id}>
          {genre.name}
        </Option>
      ))}
    </Select>
  );
});
