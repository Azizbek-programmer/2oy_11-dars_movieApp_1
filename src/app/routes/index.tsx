import { lazy, memo } from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
const Search = lazy(()=> import("@/pages/search"))
const Review = lazy(()=> import("@/pages/movie-detail/review"))
const NotFound = lazy(()=> import("@/pages/notFound"))
const Other = lazy(()=> import("@/pages/movie-detail/others"))
const Cast = lazy(()=> import("@/pages/movie-detail/cast"))
const CrewDetail = lazy(()=> import("@/pages/crew-detail"))
const Home = lazy(()=> import("@/pages/home"))
const Movie = lazy(()=> import("@/pages/movie"))
const MovieDetail = lazy(()=> import("@/pages/movie-detail"))

const AppRouter = () => {
  const router = useRoutes([
    {path: "/", element: <MainLayout/>, children: [
      {path: "", element: <Home/>},
      {path: "/movie", element: <Movie/>},
      {path: "/*", element: <NotFound/>},
      {path: "/search", element: <Search/>},
      {path: "/movie/:id", element: <MovieDetail/>, children: [
        {index: true, element: <Review/>},
        {path: "other", element: <Other/>},
        {path: "cast", element: <Cast/>},
      ]},
      {path: "/crew/:id", element: <CrewDetail/>}
    ]}
  ])
  return router
};

export default memo(AppRouter);