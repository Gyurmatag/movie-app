import { createBrowserRouter, RouterProvider, redirect } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { MoviesPage } from "./components/MoviesPage";
import { LoginPage } from "./components/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { auth } from "./utils/auth";
import "./App.css";

// Loader function to check authentication
const requireAuth = () => {
  if (!auth.isAuthenticated()) {
    throw redirect("/login");
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "movies",
        loader: requireAuth,
        element: (
          <ProtectedRoute>
            <MoviesPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
