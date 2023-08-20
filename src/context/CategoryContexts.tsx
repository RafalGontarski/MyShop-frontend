import {CategoryContextType} from "../models/context/CategoryContextType";
import {createContext} from "react";
import CategoryType from "../models/CategoryType";


const defaultCategorySettings: CategoryContextType = {
    categories: [],
    addCategory: (category: CategoryType) => {},
    setCategories: () => {},  // Dodaj tę linię jako pustą funkcję
};

export const CategoryContext = createContext<CategoryContextType>(defaultCategorySettings);

