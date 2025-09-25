import { memo, useState, type Key } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useMovie } from '../../../entities/movie';

export const Hero = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="container mx-auto mb-12 px-2 md:px-0">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-xl shadow-lg w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px]"
      >
        {data?.results?.map((movie: { id: Key | null | undefined; backdrop_path: any; title: string | undefined }) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={8}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 4, spaceBetween: 8 },
          768: { slidesPerView: 5, spaceBetween: 10 },
          1024: { slidesPerView: 6, spaceBetween: 12 },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4 h-16 sm:h-20"
      >
        {data?.results?.map((movie: { id: Key | null | undefined; poster_path: any; title: string | undefined }) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
