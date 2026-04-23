import { useEffect, useState } from 'react'
import padLock from './assets/padLock.png'
import './App.css'
import PasswordGenerator from './components/Password/PasswordGenerator'
import ThemeToggle from './components/Theme/ThemeToggle';

function App() {

  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors">
        <section id="center">
          <div className="flex w-full mr-10 mt-2 justify-end">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className="mt-4">
            <img src={padLock} className="base" width="256" height="256" alt="" />

          </div>
          <div >
            <h1 className="text-4xl font-bold text-purple-500 dark:text-purple-500">Password Generator</h1>

            <PasswordGenerator />

          </div>

        </section>


      </div>
    </div>

  )
}

export default App
