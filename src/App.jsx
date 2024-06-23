import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import { DashboardLayout, Login, Register } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages";
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "profile",
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
