import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { MoviesPage } from "./components/MoviesPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <MoviesPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
