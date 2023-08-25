import {CategoryContextType} from "../../models/types/contextType/CategoryContextType";
import {createContext} from "react";
import CategoryType from "../../models/types/CategoryType";


const defaultCategorySettings: CategoryContextType = {
    categories: [],
    addCategory: (category: CategoryType) => {},
    setCategories: () => {},  // Dodaj tę linię jako pustą funkcję
};

export const CategoryContext = createContext<CategoryContextType>(defaultCategorySettings);

