import {CategoryContext} from "../context/CategoryContexts";
import {useState} from "react";
import CategoryType from "../models/CategoryType";

type CategoryProviderProps = {
    children: React.ReactNode;
    // ... inne propsy
};

const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    // const newCategories = [...prevCategories, newCategory];

    const addCategory = (category: CategoryType) => {
        setCategories((prevCategories) => [...prevCategories, category]);
    };

    return (
        // <CategoryContext.Provider value={{ categories, addCategory }}>
        //     {children}
        // </CategoryContext.Provider>
        <div></div>
    );
};