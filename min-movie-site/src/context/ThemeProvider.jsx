import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheam] = useState("light");
  function toggelTheme() {
    setTheam((prev) => (prev == "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggelTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
