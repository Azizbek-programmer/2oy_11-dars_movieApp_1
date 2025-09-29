import { lazy, memo } from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
const BookmarkPage = lazy(()=> import("@/pages/bookmark"))
const Search = lazy(()=> import("@/pages/search"))
const Review = lazy(()=> import("@/pages/movie-detail/review"))
const NotFound = lazy(()=> import("@/pages/notFound"))
const Other = lazy(()=> import("@/pages/movie-detail/others"))
const Cast = lazy(()=> import("@/pages/movie-detail/cast"))
const CrewDetail = lazy(()=> import("@/pages/crew-detail"))
const Home = lazy(()=> import("@/pages/home"))
const Movie = lazy(()=> import("@/pages/movie"))
const MovieDetail = lazy(()=> import("@/pages/movie-detail"))
const Login = lazy(()=> import("@/pages/login"))

const AppRouter = () => {
  const router = useRoutes([
    {path: "/", element: <MainLayout/>, children: [
      {path: "", element: <Home/>},
      {path: "/movie", element: <Movie/>},
      {path: "/bookmark", element: <BookmarkPage/>},
      {path: "/*", element: <NotFound/>},
      {path: "/search", element: <Search/>},
      {path: "/login", element: <Login/>},
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