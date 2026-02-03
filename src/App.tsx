import { useEffect, useState } from "react";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import "./App.css";

function App() {
  const [theme] = useState(localStorage.theme || "light");

  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 640px)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
    } else {
      // Safari fallback
      mq.addListener(handler);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handler);
      } else {
        // Safari fallback
        mq.removeListener(handler);
      }
    };
  }, []);

  const NavTabs = ({ listClass = "" }: { listClass?: string }) => (
    <TabList className={listClass}>
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
  );

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <TabGroup vertical={isMobile}>
        {!isMobile && (
          <header className="sticky top-0 z-10 flex w-full justify-between px-4 py-4 bg-white dark:bg-gray-900 shadow-md">
            <div className="md:flex flex-grow justify-center">
              <div className="bg-gray-800 dark:bg-gray-800 md:rounded-full px-6 py-2">
                <NavTabs listClass="flex flex-row gap-4 items-center" />
              </div>
            </div>
          </header>
        )}
        <main className="container mx-auto px-4 pt-8 w-full pb-24 sm:pb-8">
          <TabPanels>
            <TabPanel>
              <Home />
            </TabPanel>
            <TabPanel>
              <AboutMe />
            </TabPanel>
            <TabPanel>Placeholder for My journey section</TabPanel>
            <TabPanel>Placeholder for Contact section</TabPanel>
          </TabPanels>
        </main>
        {isMobile && (
          <footer className="mobile-footer-nav fixed bottom-0 left-0 right-0 z-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-3">
            <div className="max-w-screen-md mx-auto">
              <NavTabs listClass="flex flex-row items-center justify-between gap-2" />
            </div>
          </footer>
        )}
      </TabGroup>
    </div>
  );
}

export default App;
