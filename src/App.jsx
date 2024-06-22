import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage.jsx";
import { Login, Register } from "./Pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./Pages";
import About from "./Pages/About";

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
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
