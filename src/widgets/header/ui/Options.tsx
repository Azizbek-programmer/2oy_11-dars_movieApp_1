import { memo } from "react";

export const Options = memo(() => {
  return (
    <section className="flex gap-5">
      <select id="language" name="language">
        <option value="rus">Rus</option>
        <option value="uzb">Uzb</option>
      </select>
      <button className="bg-[#C61F1F] rounded-xl py-[16px] px-[64px]">
        Kirish
      </button>
    </section>
  );
});
