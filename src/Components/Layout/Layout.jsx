import { useContext } from "react";
import cn from "classnames";
import { ThemeContext } from "../../Providers/ThemeProvider";

function Layout({ children }) {
  const { type } = useContext(ThemeContext);
  return (
    <div
      className={cn("layout", {
        dark: type === "dark",
      })}
    >
      {children}
    </div>
  );
}

export default Layout;
