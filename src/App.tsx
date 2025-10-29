import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { ThemeToggle } from "./components";
import './App.css'

function App() {

  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Likhith Kolayari</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>
    <main className="space-y-12">
      <Home/>
    </main>
    </div>
  )
}

export default App
