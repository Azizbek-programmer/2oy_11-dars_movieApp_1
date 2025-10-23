import { memo } from "react"
import hader_logo from "@/shared/assets/home/LOGOTYPE – BILETICK.svg";
import {useNavigate } from "react-router-dom";

export const Logo = memo(() => {
    const navigate = useNavigate();
  return (
    <img src={hader_logo} alt="logo" onClick={() => navigate("/")} />
  )
})
