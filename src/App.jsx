import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage.jsx";
import { Login, Register } from "./Pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./Pages";

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
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
