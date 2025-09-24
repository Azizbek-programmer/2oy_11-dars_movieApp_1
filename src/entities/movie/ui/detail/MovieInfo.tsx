import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image, Tag } from "antd";

interface Props {
  id: string;
}

export const MovieInfo: FC<Props> = memo((props) => {
  const { id } = props;
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");

  return (
    <div className="dark:text-white">
      <section className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
        <img
          src={createImageUrl(data?.backdrop_path)}
          alt={data?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <h1 className="absolute bottom-5 left-5 text-4xl font-bold text-white">
          {data?.title}
        </h1>
      </section>

      <section className="container py-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={createImageUrl(data?.poster_path)}
            alt={data?.title}
            className="w-[200px] rounded-lg shadow-md"
          />
          <div className="flex-1 space-y-3">
            <h2 className="text-3xl font-semibold">{data?.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 italic">
              {data?.overview}
            </p>
            <div className="flex flex-wrap gap-2">
              {data?.genres?.map((genre: any) => (
                <Tag key={genre.id} color="red">
                  {genre.name}
                </Tag>
              ))}
            </div>
            <p><span className="font-medium">Release:</span> {data?.release_date}</p>
            <p><span className="font-medium">Budget:</span> {data?.budget?.toLocaleString()} USD</p>
            <p><span className="font-medium">Rating:</span> ⭐ {data?.vote_average?.toFixed(1)} ({data?.vote_count})</p>
            {data?.homepage && (
              <a
                href={data.homepage}
                target="_blank"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Official Website
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="container py-6">
        <h3 className="text-xl font-semibold mb-3">Images</h3>
        <div className="flex overflow-x-auto gap-3 pb-2">
          {imageData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
            <Image
              key={inx}
              className="min-w-[200px] rounded-lg shadow-md"
              src={createImageUrl(item.file_path)}
              alt=""
            />
          ))}
        </div>
      </section>
    </div>
  );
});
