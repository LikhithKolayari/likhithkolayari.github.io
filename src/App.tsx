import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { ThemeToggle } from "./components";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(localStorage.theme || "light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMobile = window.matchMedia("(max-width: 640px)").matches;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <TabGroup vertical={isMobile}>
        <header className="sticky top-0 z-10 flex w-full justify-between px-4 py-4 bg-white dark:bg-gray-900 shadow-md">
          <div className="md:flex flex-grow justify-center">
            <div className="bg-gray-800 dark:bg-gray-800 md:rounded-full px-6 py-2">
              <TabList className="flex flex-col gap-4 items-center sm:flex-row">
                <Tab key="home" className="tab-item">
                  HOME
                </Tab>
                <Tab key="about_me" className="tab-item">
                  ABOUT ME
                </Tab>
                <Tab key="my_journey" className="tab-item">
                  MY JOURNEY
                </Tab>
                <Tab key="contact" className="tab-item">
                  CONTACT
                </Tab>
                {/* <div className="h-6 w-px bg-gray-700 dark:bg-white mx-2"></div>
                <ThemeToggle theme={theme} setTheme={setTheme} /> */}
              </TabList>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 w-full">
          <TabPanels>
            <TabPanel>
              <Home />
            </TabPanel>
            <TabPanel>Placeholder for About me section</TabPanel>
            <TabPanel>Placeholder for My journey section</TabPanel>
            <TabPanel>Placeholder for Contact section</TabPanel>
          </TabPanels>
        </main>
      </TabGroup>
    </div>
  );
}

export default App;
