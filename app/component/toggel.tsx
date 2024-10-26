// ThemeToggle.tsx

"use client"; // This directive makes this component a client component

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load user's preference from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.body.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="text-white hover:underline">
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
