// Theme context to keep track of the user's selected theme across routes

import type { Theme } from "../types/theme";
import { createContext, useState, useEffect } from "react";
import getUserTheme from "../utils/getUserTheme";

export const ThemeContext = createContext<{
    theme: Theme,
    setTheme: (theme: Theme) => void
}>({
    theme: "light",
    setTheme: (_: Theme) => {}
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // Set light as the default theme
    const [theme, setTheme] = useState<Theme>(getUserTheme);

    // Apply theme to page when it changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;