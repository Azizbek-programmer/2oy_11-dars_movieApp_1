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
        
        {/* Logo + Stores */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <img src={logo} alt="logo" className="w-32 md:w-40 hover:-translate-y-1 transition-transform" />
          <img src={market} alt="Google Play" className="w-32 md:w-40 hover:-translate-y-1 transition-transform" />
          <img src={store} alt="App Store" className="w-32 md:w-40 hover:-translate-y-1 transition-transform" />
        </div>

        {/* About */}
        <div className="flex flex-col gap-3 w-full sm:w-auto items-center md:items-start">
          <p className="font-semibold mb-2">О нас</p>
          {[
            { img: birbir, text: "Публичная оферта" },
            { img: birikki, text: "Реклама" },
            { img: biruch, text: "F.A.Q" },
            { img: bir4, text: "Контакты" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 cursor-pointer transition-transform  hover:-translate-y-1 hover:text-red-500"
            >
              <img src={item.img} alt="" className="w-5 h-5" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-3 w-full sm:w-auto items-center md:items-start">
          <p className="font-semibold mb-2">Категории</p>
          {[
            { img: ikki1, text: "Кино" },
            { img: ikki2, text: "Театр" },
            { img: ikki3, text: "Концерты" },
            { img: ikki4, text: "Спорт" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 cursor-pointer transition-transform  hover:-translate-y-1 hover:text-red-500"
            >
              <img src={item.img} alt="" className="w-5 h-5" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3 w-full sm:w-auto items-center md:items-start">
          <p className="font-semibold mb-2">Связаться с нами</p>
          <span className="text-red-600 font-bold">+998 (95) 897-33-38</span>
          <p className="font-semibold mt-2">Социальные сети</p>
          <div className="flex gap-3">
            {[insta, facebok, youtube].map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt="social"
                className="w-6 h-6 cursor-pointer transition-transform  hover:-translate-y-1 hover:text-red-500"
              />
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
});
