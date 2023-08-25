import React, {ReactNode, useState} from "react";
import { SelectedCategoryContext } from "../context/SelectedCategoryContext";


interface SelectedCategoryProviderProps {
    children: ReactNode;
}

export const SelectedCategoryProvider: React.FC<SelectedCategoryProviderProps> = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <SelectedCategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </SelectedCategoryContext.Provider>
    );
};