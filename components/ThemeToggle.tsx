"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />; // placeholder

  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
      <button
        onClick={() => setTheme("light")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "light" ? "bg-white dark:bg-gray-700 shadow-md text-yellow-600" : "text-gray-500 hover:text-yellow-600"
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "dark" ? "bg-white dark:bg-gray-700 shadow-md text-indigo-400" : "text-gray-500 hover:text-indigo-400"
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "system" ? "bg-white dark:bg-gray-700 shadow-md text-gray-700 dark:text-gray-300" : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  );
}