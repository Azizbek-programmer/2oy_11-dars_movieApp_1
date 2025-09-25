import { memo } from "react";
import { NavLink } from "react-router-dom";
import home from "@/shared/assets/home/home.svg";
import moviesmarket from "@/shared/assets/home/moviemarket.svg";
import serch from "@/shared/assets/home/search.svg";
import movies from "@/shared/assets/home/moviemarket.svg";

export const Navigation = memo(() => {
  return (
    <div className="flex gap-8 items-center">
      
      <div className="flex flex-col items-center text-white-700 hover:text-red-500 transition">
        <img src={home} alt="Home" className="w-6 h-6" />
        <NavLink to={"/"}>Home</NavLink>
      </div>

      <div className="flex flex-col items-center text-white-700 hover:text-red-500 transition">
        <img src={movies} alt="Movie" className="w-6 h-6" />
        <NavLink to={"/movie"}>Movie</NavLink>
      </div>

      <div className="flex flex-col items-center text-white-700 hover:text-red-500 transition">
        <img src={moviesmarket} alt="BookMark" className="w-6 h-6" />
        <NavLink to={"/bookMark"}>BookMark</NavLink>
      </div>

      <div className="flex flex-col items-center text-white-700 hover:text-red-500 transition">
        <img src={serch} alt="Search" className="w-6 h-6" />
        <NavLink to={"/search"}>Search</NavLink>
      </div>

    </div>
  );
});
