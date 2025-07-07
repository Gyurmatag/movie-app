import { createBrowserRouter, RouterProvider, redirect } from "react-router";
import { Layout } from "./components/Layout";
import { MoviesPage } from "./pages/MoviesPage";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { auth } from "./utils/auth";
import "./App.css";
import { HomePage } from "./pages/HomePage";

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
