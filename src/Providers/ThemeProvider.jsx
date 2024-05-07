import { createContext, useMemo, useState, useEffect } from "react";

export const ThemeContext = createContext({ type: "light" });
export const BlurContext = createContext({ type: "blur" });

function ThemeProvider({ children }) {
  const [type, setType] = useState("light");
  const [isBlurred, setIsBlurred] = useState("");
  const toggleBlur = () => {
    setIsBlurred((prevType) => (prevType === "" ? "blur" : ""));
  };

  useEffect(() => {
    if (isBlurred) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isBlurred]);
  const toggleTheme = () => {
    setType((prevType) => (prevType === "light" ? "dark" : "light"));
  };
  const value = useMemo(() => ({ type, toggleTheme }), [type]);
  const blurValue = useMemo(() => ({ isBlurred, toggleBlur }), [isBlurred]);
  return (
    <ThemeContext.Provider value={value}>
      <BlurContext.Provider value={blurValue}>{children}</BlurContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
