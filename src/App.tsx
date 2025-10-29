import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { ThemeToggle } from "./components";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import './App.css'

function App() {

  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <TabGroup>
        <header className="sticky top-0 z-10 flex w-full justify-center px-4 py-4 bg-white dark:bg-gray-900 shadow-md">
          <TabList className="flex gap-4">
            <Tab key="home" className="tab-item">HOME</Tab>
            <Tab key="about_me" className="tab-item">ABOUT ME</Tab>
            <Tab key="my_journey" className="tab-item">MY JOURNEY</Tab>
            <Tab key="contact" className="tab-item">CONTACT</Tab>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </TabList>
        </header>
        
        <main className="container mx-auto px-4 py-8 w-full">
          <TabPanels>
            <TabPanel><Home/></TabPanel>
            <TabPanel>About me section</TabPanel>
            <TabPanel>My journey section</TabPanel>
            <TabPanel>Contact section</TabPanel>
          </TabPanels>
        </main>
      </TabGroup>
    </div>
  )
}

export default App
