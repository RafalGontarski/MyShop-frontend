import React, {useEffect, useState} from "react";
import {CategoryHeader} from "../categoryHeader/CategoryHeader";
import {useParams} from "react-router-dom";
import {useSelectedCategory} from "../../../models/context/SelectedCategoryContext";
import {DisplaySubCategoriesNames} from "../displaySubCategoriesNames/DisplaySubCategoriesNames";
import {CategoryApi} from "../../../api/CategoryApi";
import CategoryType from "../../../models/types/CategoryType";



export const Category: React.FC = () => {
    const { categoryName, subCategoryName } = useParams<{ categoryName: string; subCategoryName?: string }>();
    const { selectedCategory, setSelectedCategory } = useSelectedCategory();
    const [currentCategory, setCurrentCategory] = useState<CategoryType | null>(null);
    const [, setSubCategoriesNames] = useState<string[]>([]);

    useEffect(() => {
        if (categoryName && categoryName !== selectedCategory) {
            setSelectedCategory(categoryName);
        }
    }, [categoryName]);

    useEffect(() => {
        CategoryApi.getAllCategoriesName()
            .then(categories => {
                const category = categories.find(cat => cat.name === selectedCategory);
                setCurrentCategory(category || null);
            })
            .catch(error => console.error("Błąd podczas pobierania kategorii:", error));
    }, [selectedCategory]);

    useEffect(() => {
        if (currentCategory) {
            CategoryApi.getAllSubCategoriesNames(currentCategory.categoryId)
                .then(names => setSubCategoriesNames(names))
                .catch(error => console.error("Błąd podczas pobierania podkategorii:", error));
        }
    }, [currentCategory]);

    console.log("selectedCategory w komponencie Category:", selectedCategory);

    return (
        <div>
            <CategoryHeader categoryName={selectedCategory || ''} subCategoryName={subCategoryName || ''}/>


            {currentCategory ? <DisplaySubCategoriesNames
                categoryId={currentCategory.categoryId}
                subCategoryName={selectedCategory || ''}
            /> : null}
        </div>
    );
};