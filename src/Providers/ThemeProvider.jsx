import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({ type: "light" });

function ThemeProvider({ children }) {
  const [type, setType] = useState("light");
  console.log(type);
  const toggleTheme = () => {
    setType((prevType) => (prevType === "light" ? "dark" : "light"));
  };
  const value = useMemo(() => ({ type, toggleTheme }), [type]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
