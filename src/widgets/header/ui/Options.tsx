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
    <section className="flex gap-3 items-center flex-wrap sm:flex-nowrap">
      {/* Select */}
      <Select
        className="custom-select 
          w-24 text-sm
          sm:w-28 sm:text-base
        "
        value={i18n.language}
        onChange={handleChange}
        placeholder="Til"
        style={{ height: "30px" }}
        options={[
          { value: "ru", label: "Rus"},
          { value: "uz", label: "Uzb" },
          { value: "en", label: "Eng" },
        ]}
      />

      {/* Button */}
      <button
        onClick={() => navigate("/login")}
        className="
          bg-[#C61F1F] rounded-xl text-white font-medium
          py-2 px-3 text-sm
          w-24
          sm:py-[14px] sm:px-[40px] sm:text-base
          sm:w-28
          transition
        "
      >
        Kirish
      </button>
    </section>
  );
});
