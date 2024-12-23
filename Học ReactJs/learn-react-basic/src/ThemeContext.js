import { createContext, useState } from "react";


const ThemeContext = createContext()


function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    const handleClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme,
        handleClick
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }