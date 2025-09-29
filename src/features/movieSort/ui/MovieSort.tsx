import { Select } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const onChange = (value: string) => {
    searchParams.set("sort_by", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const options = [
    { value: "original_title.asc", label: t("sort.titleAZ") },
    { value: "original_title.desc", label: t("sort.titleZA") },
    { value: "popularity.asc", label: t("sort.popularityAsc") },
    { value: "popularity.desc", label: t("sort.popularityDesc") },
    { value: "revenue.asc", label: t("sort.revenueAsc") },
    { value: "revenue.desc", label: t("sort.revenueDesc") },
    { value: "primary_release_date.asc", label: t("sort.releaseDateAsc") },
    { value: "primary_release_date.desc", label: t("sort.releaseDateDesc") },
    { value: "title.asc", label: t("sort.titleAZ") },
    { value: "title.desc", label: t("sort.titleZA") },
    { value: "vote_average.asc", label: t("sort.voteAverageAsc") },
    { value: "vote_average.desc", label: t("sort.voteAverageDesc") },
    { value: "vote_count.asc", label: t("sort.voteCountAsc") },
    { value: "vote_count.desc", label: t("sort.voteCountDesc") },
  ];

  return (
    <Select
      className="custom-select w-60"
      placeholder={t("sort.placeholder")}
      onChange={onChange}
      options={options}
    />
  );
});
