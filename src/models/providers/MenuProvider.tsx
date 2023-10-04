// MenuContext.tsx
import React, { createContext, useContext, useState } from 'react';

type MenuContextType = {
    selectedAdvantage: boolean;
    setSelectedAdvantage: React.Dispatch<React.SetStateAction<boolean>>;
    // ... możesz dodać więcej stanów/poleceń według potrzeb
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedAdvantage, setSelectedAdvantage] = useState<boolean>(false);

    return (
        <MenuContext.Provider value={{ selectedAdvantage, setSelectedAdvantage }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext must be used within a MenuProvider');
    }
    return context;
};
