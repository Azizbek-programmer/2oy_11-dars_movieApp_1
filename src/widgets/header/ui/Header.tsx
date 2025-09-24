import { memo } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import hader_logo from "@/shared/assets/home/LOGOTYPE – BILETICK.svg"
// import { CiSearch } from 'react-icons/ci'
import home from "@/shared/assets/home/home.svg"
import moviesmarket from "@/shared/assets/home/moviemarket.svg"
import serch from "@/shared/assets/home/search.svg"
import movies from "@/shared/assets/home/moviemarket.svg"


export const Header = memo(() => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="bg-slate-200 dark:bg-black dark:text-white">
      <div className="container">
        <div className="flex justify-between py-4 ">
          <img src={hader_logo} alt="logo" onClick={() => navigate('/')} />
          <div className="flex gap-7  items-center">
            <div>
              <img src={home} alt="" />
            <NavLink to={'/'}>Home</NavLink>
            </div>
            <div>
            <img src={movies} alt="" />
            <NavLink to={'/movie'}>Movie</NavLink>
            </div>
            <div>
              <img src={moviesmarket} alt="" />
            <NavLink to={'/bookMark'}>BookMark</NavLink>
            </div>
            <div>
              <img src={serch} alt="" />
            <NavLink to={'/search'}>
              {/* <CiSearch size={22} /> */}
              Serarch
            </NavLink>
            </div>
          </div>
          <section className='flex gap-5'>
            <select id="language" name="language">
              <option value="rus">Rus</option>
              <option value="uzb">Uzb</option>
            </select>
            <button className='bg-[#C61F1F] rounded-xl py-[16px] px-[64px]'>Kirish</button>
          </section>
        </div>
      </div>
      </div>
    </header>
  )
})
