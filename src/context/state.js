import React, { createContext, useContext, useState } from 'react';
export const AppContext = createContext();

export function AppWrapper({ children }) {

    const [duviState, setDuviState] = useState({
            step: "Home",
            data: {
            }
        }
    );
    return (
        <AppContext.Provider value={{ duviState, setDuviState }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return React.useContext(AppContext);
}

