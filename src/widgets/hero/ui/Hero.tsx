import { memo, useState, type Key } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useMovie } from "../../../entities/movie";
import { useNavigate } from "react-router-dom";

export const Hero = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mb-12 px-1 sm:px-2 md:px-0">
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
        className="mySwiper2 rounded-xl shadow-lg w-full
          h-[220px] xs:h-[260px] sm:h-[360px] md:h-[460px] lg:h-[540px]"
      >
        {data?.results?.map(
          (movie: {
            id: Key;
            backdrop_path: string;
            title?: string;
            vote_average: number;
          }) => (
            <SwiperSlide key={movie.id}>
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />

                {/* overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* content */}
                <div className="absolute bottom-5 sm:bottom-10 left-1/2 
                  transform -translate-x-1/2 text-center text-white 
                  space-y-2 sm:space-y-3 w-full px-2 sm:px-4">

                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold line-clamp-1">
                    {movie.title}
                  </h2>

                  <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base">
                    <span className="text-yellow-400 font-semibold">
                      ⭐ {movie.vote_average.toFixed(1)}
                    </span>
                  </div>

                  <button
                    onClick={() => navigate(`/movie/${movie.id}`)}
                    className="bg-red-600 hover:bg-red-700 px-3 sm:px-4 py-1 sm:py-2 
                      rounded-lg text-xs sm:text-sm font-medium transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>

      {/* Thumbnails */}
      <div className="max-w-5xl mx-auto mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={6}
          slidesPerView={2.3}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 8 },
            640: { slidesPerView: 4, spaceBetween: 8 },
            768: { slidesPerView: 5, spaceBetween: 10 },
            1024: { slidesPerView: 6, spaceBetween: 12 },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper h-14 xs:h-16 sm:h-20"
        >
          {data?.results?.map(
            (movie: {
              id: Key;
              poster_path: string;
              title?: string;
            }) => (
              <SwiperSlide key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover 
                    rounded-lg cursor-pointer"
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
});
