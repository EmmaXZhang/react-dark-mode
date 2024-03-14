import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light-mode");
  // const [clicked, setClicked] = useState(true);

  function handleModeChange() {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  }

  return (
    <div>
      <Header theme={theme} handleModeChange={handleModeChange} />
      {/* <Header handleModeChange={handleModeChange} buttonText={buttonText} /> */}
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
