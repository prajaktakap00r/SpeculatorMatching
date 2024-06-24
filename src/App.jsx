import "./App.css";

import {
  HomePage,
  DashboardLayout,
  Login,
  Register,
  Error,
  Landing,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
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
