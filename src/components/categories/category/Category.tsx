import React, {useEffect} from "react";
import {CategoryHeader} from "../categoryHeader/CategoryHeader";
import {useParams} from "react-router-dom";
import {useSelectedCategory} from "../../../models/context/SelectedCategoryContext";


export const Category: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const { selectedCategory, setSelectedCategory } = useSelectedCategory();

    useEffect(() => {
        if (categoryName && categoryName !== selectedCategory) {
            setSelectedCategory(categoryName);
        }
    }, [categoryName]);

    // console.log("selectedCategory w komponencie Category:", selectedCategory);

    return (
        <div>
            <CategoryHeader categoryName={selectedCategory || ''} />
            {/* Inne komponenty lub treści dla kategorii */}
        </div>
    );
};