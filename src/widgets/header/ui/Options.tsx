import { memo } from "react";
import { Select } from "antd";

const { Option } = Select;

export const Options = memo(() => {
  return (
    <section className="flex gap-5 items-center">
      <Select
       className="custom-select w-28"
        defaultValue="rus"
        placeholder="Tilni tanlang"
        style={{ height: "30px", width: "80px", display: "flex", alignItems: "center" }}
      >
        <Option value="rus">Rus</Option>
        <Option value="uzb">Uzb</Option>
        <Option value="eng">Eng</Option>
      </Select>

      <button className="bg-[#C61F1F] rounded-xl py-[16px] px-[64px]">
        Kirish
      </button>
    </section>
  );
});
