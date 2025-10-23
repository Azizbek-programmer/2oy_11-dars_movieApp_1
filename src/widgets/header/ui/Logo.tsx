import { memo } from "react";
import { useNavigate } from "react-router-dom";
import hader_logo from "@/shared/assets/home/LOGOTYPE – BILETICK.svg";

export const Logo = memo(() => {
  const navigate = useNavigate();
  return (
    <img
      src={hader_logo}
      alt="logo"
      onClick={() => navigate("/")}
      className="
        cursor-pointer
        w-[90px] 
        xs:w-[110px]
        sm:w-[140px]
        md:w-[160px]
        mx-2
      "
    />
  );
});
