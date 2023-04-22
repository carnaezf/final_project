import { createContext, useContext, useEffect, useState } from "react";


export const themeContext = createContext();

export function ThemeContext({children}){
    const [theme, setTheme] = useState("light");
  /****************************Modo nocturno y claro */

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        } else {
        setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleTHemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
  /****************************Modo nocturno y claro */

    return(
        <themeContext.Provider value={handleTHemeSwitch}>
            {children}
        </themeContext.Provider>
    )

}