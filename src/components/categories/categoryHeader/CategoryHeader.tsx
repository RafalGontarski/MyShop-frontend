import React from "react";
import {useSelectedCategory} from "../../../models/context/SelectedCategoryContext";


interface CategoryHeaderProps {
    categoryName: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ categoryName }) => {
    console.log("Komponent Category Header jest renderowany");
    console.log(categoryName);
    return (
        <div>
            <h1>{categoryName}</h1>
        </div>

    )
};
