import { createContext, useState } from "react";

export const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);
    // const toggleTheme = () => setTheme(!theme);
    const data = { theme, setTheme };

    return (
        <ToggleContext.Provider value={data}>{children}</ToggleContext.Provider>
    );
};

export default ToggleProvider;
