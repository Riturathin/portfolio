import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all shadow-md ${
        theme === "dark"
          ? "bg-yellow-400 hover:bg-yellow-500 text-black"
          : "bg-gray-800 hover:bg-gray-700 text-white"
      }`}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
