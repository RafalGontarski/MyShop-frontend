import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedCategoryContextType {
    selectedCategory: string | null;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SelectedCategoryContext = createContext<SelectedCategoryContextType | undefined>(undefined);

export const useSelectedCategory = (): SelectedCategoryContextType => {
    const context = useContext(SelectedCategoryContext);

    if (!context) {
        throw new Error('useSelectedCategory must be used within a SelectedCategoryProvider');
    }

    console.log("Aktualna wartość selectedCategory:", context.selectedCategory);

    return context;
};


