import { memo } from "react";
import logo from "@/shared/assets/home/LOGOTYPE – BILETICK.svg";
import market from "@/shared/assets/footer/playMarket.png";
import store from "@/shared/assets/footer/appStore.png";
import birbir from "@/shared/assets/footer/1.1.svg";
import birikki from "@/shared/assets/footer/1.2svg.svg";
import biruch from "@/shared/assets/footer/1.3.svg";
import bir4 from "@/shared/assets/footer/1.4.svg";
import ikki1 from "@/shared/assets/footer/2.1.svg";
import ikki2 from "@/shared/assets/footer/2.2.svg";
import ikki3 from "@/shared/assets/footer/2.3.svg";
import ikki4 from "@/shared/assets/footer/2.4.svg";
import insta from "@/shared/assets/footer/instagram-line.svg";
import facebok from "@/shared/assets/footer/facebook-circle-line.svg";
import youtube from "@/shared/assets/footer/youtube-line.svg";

export const Footer = memo(() => {
  return (
    <footer className="py-8 bg-slate-200 dark:bg-black dark:text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <img src={logo} alt="logo" className="w-32 md:w-40" />
          <img src={market} alt="Google Play" className="w-32 md:w-40" />
          <img src={store} alt="App Store" className="w-32 md:w-40" />
        </div>
        <div className="flex flex-col gap-3 w-full sm:w-auto items-center md:items-start">
          <p className="font-semibold mb-2">О нас</p>
          <div className="flex items-center gap-2"><img src={birbir} alt="" /><span>Публичная оферта</span></div>
          <div className="flex items-center gap-2"><img src={birikki} alt="" /><span>Реклама</span></div>
          <div className="flex items-center gap-2"><img src={biruch} alt="" /><span>F.A.Q</span></div>
          <div className="flex items-center gap-2"><img src={bir4} alt="" /><span>Контакты</span></div>
        </div>
        <div className="flex flex-col gap-3 w-full sm:w-auto items-center md:items-start">
          <p className="font-semibold mb-2">Категории</p>
          <div className="flex items-center gap-2"><img src={ikki1} alt="" /><span>Кино</span></div>
          <div className="flex items-center gap-2"><img src={ikki2} alt="" /><span>Театр</span></div>
          <div className="flex items-center gap-2"><img src={ikki3} alt="" /><span>Концерты</span></div>
          <div className="flex items-center gap-2"><img src={ikki4} alt="" /><span>Спорт</span></div>
        </div>
        <div className="flex flex-col gap-3 w-full sm:w-auto items-center md:items-start">
          <p className="font-semibold mb-2">Связаться с нами</p>
          <span className="text-red-600 font-bold">+998 (95) 897-33-38</span>
            <p className="font-semibold mt-2">Социальные сети</p>
          <div className="flex gap-3">
            <img src={insta} alt="Instagram" className="w-6 h-6" />
            <img src={facebok} alt="Facebook" className="w-6 h-6" />
            <img src={youtube} alt="YouTube" className="w-6 h-6" />
          </div>
        </div>

      </div>
    </footer>
  );
});
