import { memo } from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Options = memo(() => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <section className="flex items-center gap-2 mx-2">
      <div className="flex items-center">
        <Select
          className="
            custom-select
            w-[82px] text-xs
            sm:w-[110px] sm:text-sm
            md:w-[130px] md:text-base
          "
          style={{ height: "40px" }}
          value={i18n.language}
          onChange={handleChange}
          options={[
            { value: "ru", label: "Rus" },
            { value: "uz", label: "Uzb" },
            { value: "en", label: "Eng" },
          ]}
        />
      </div>
      <button
        onClick={() => navigate("/login")}
        className="
          bg-[#C61F1F] rounded-lg text-white font-medium
          h-[40px] text-xs w-[82px]
          sm:text-sm sm:w-[110px]
          md:text-base md:w-[130px]
          transition
          flex items-center justify-center
        "
      >
        Kirish
      </button>
    </section>
  );
});
