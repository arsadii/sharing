import { Moon, Sun } from "phosphor-react";
import { useState } from "react";
import ButtonWrapper from "./components/ButtonWrapper";
import Display from "./components/Display";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`flex justify-center items-center ${darkMode && "dark"}`}>
      <div className="px-4 w-96 min-h-screen flex flex-col dark:bg-zinc-900">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 ${
            darkMode ? "bg-gray-600" : "bg-gray-100"
          }  w-max rounded-xl`}
        >
          {darkMode ? (
            <Sun size={16} className="text-gray-100" weight="fill" />
          ) : (
            <Moon size={16} className="text-gray-400" weight="fill" />
          )}
        </button>
        <Display />
        <ButtonWrapper />
      </div>
    </main>
  );
}

export default App;
