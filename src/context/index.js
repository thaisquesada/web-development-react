// não retornamos um component, mas sim um provider

import { createContext, useState } from "react";

export const ThemeContext = createContext();

// provider = componente que ficará em volta do nosso App.js
export const ThemeProvider = ({children}) => {
    const [selectedTheme, setSelectedTheme] = useState(
        localStorage.getItem('selectedTheme')
    );

    return (
        <ThemeContext.Provider value={{
            selectedTheme,
            setSelectedTheme,
          }}>
            {children}
        </ThemeContext.Provider>
    )
}