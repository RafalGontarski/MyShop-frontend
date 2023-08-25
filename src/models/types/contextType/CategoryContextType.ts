import CategoryType from "../CategoryType";


export type CategoryContextType = {
    categories: CategoryType[];
    addCategory: (category: CategoryType) => void;
    setCategories: (categories: CategoryType[]) => void;
};
