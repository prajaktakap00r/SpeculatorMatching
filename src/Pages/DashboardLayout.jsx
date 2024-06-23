import { useState, createContext, useContext, useEffect } from "react";
import { checkDefaultTheme } from "../App";
const DashboardContext = createContext();

export default function DashboardLayout() {
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };
  return <h1>hlo</h1>;
}
export const useDashboardContext = () => useContext(DashboardContext);
