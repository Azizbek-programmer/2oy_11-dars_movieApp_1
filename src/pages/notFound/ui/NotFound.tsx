import { memo } from "react";
import page404 from "@/shared/assets/404_page.webp";
import { useNavigate } from "react-router-dom";

export const NotFound = memo(() => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen">
      <img
        src={page404}
        alt="404 Not Found"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <h1 className="text-[50px]">Page not found</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
});
