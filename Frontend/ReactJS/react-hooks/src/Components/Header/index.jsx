import { useState, useContext } from "react";
import { ThemeContext } from "../../Context";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    // negar el valor de darkMode = true
    setDarkMode(!darkMode);
  };

  return (
    <div className="header">
      <h1 style={{ color }}>React hooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "DarkMode" : "LightMode"}
      </button>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "DarkMode 2" : "LightMode 2"}
      </button>
    </div>
  );
}

export { Header };
