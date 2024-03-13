import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light-mode");
  const [clicked, setClicked] = useState(true);
  const buttonText = clicked ? "Light Mode" : "Dark Mode";

  function handleModeChange() {
    setClicked(!clicked);
    setTheme(clicked ? "dark-mode" : "light-mode");
  }

  return (
    <div>
      <Header handleModeChange={handleModeChange} buttonText={buttonText} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
