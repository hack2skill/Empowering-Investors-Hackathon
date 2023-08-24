import { useRoutes } from "react-router-dom";
import Blog from "./pages/blog";
import Blogs from "./pages/blogs";
import Home from "./pages/home";

const Router = () =>
  useRoutes([
    {
      path: "/",
      key: "home",
      exact: true,
      element: <Home />,
    },
    {
      path: "/blogs",
      key: "blogs",
      exact: true,
      element: <Blogs />,
    },
    {
      path: "/blog",
      key: "blog",
      exact: true,
      element: <Blog />,
    },
  ]);
export default Router;
