import React, {useEffect, useState} from "react";
import {CategoryHeader} from "../categoryHeader/CategoryHeader";
import {useParams} from "react-router-dom";
import {useSelectedCategory} from "../../../models/context/SelectedCategoryContext";
import {DisplaySubCategoriesNames} from "../displaySubCategoriesNames/DisplaySubCategoriesNames";
import {CategoryApi} from "../../../api/CategoryApi";
import CategoryType from "../../../models/types/CategoryType";



export const Category: React.FC = () => {
    const { categoryName, subCategoryName } = useParams<{ categoryName: string; subCategoryName?: string }>();
    const { selectedCategory } = useSelectedCategory();

    const initialCategory: CategoryType | null = JSON.parse(localStorage.getItem('currentCategory') || 'null');
    const initialSubCategoriesNames: string[] = JSON.parse(localStorage.getItem('subCategoriesNames') || '[]');

    const [currentCategory, setCurrentCategory] = useState<CategoryType | null>(initialCategory);
    const [subCategoriesNames, setSubCategoriesNames] = useState<string[]>(initialSubCategoriesNames);

    useEffect(() => {
        CategoryApi.getAllCategories()
            .then(categories => {
                const category = categories.find(cat => cat.name === categoryName);
                setCurrentCategory(category || null);
            })
            .catch(error => console.error("Błąd podczas pobierania kategorii:", error));
    }, [categoryName]);

    useEffect(() => {
        if (currentCategory) {
            CategoryApi.getAllSubCategoriesNames(currentCategory.categoryId)
                .then(names => {
                    console.log("Pobrane nazwy podkategorii:", names); // dodaj ten log
                    setSubCategoriesNames(names);
                })
                .catch(error => console.error("Błąd podczas pobierania podkategorii:", error));
        }
    }, [currentCategory]);


    useEffect(() => {
        localStorage.setItem('currentCategory', JSON.stringify(currentCategory));
    }, [currentCategory]);

    useEffect(() => {
        localStorage.setItem('subCategoriesNames', JSON.stringify(subCategoriesNames));
    }, [subCategoriesNames]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            // behavior: 'smooth'
        });
    }, []);

    console.log("selectedCategory w komponencie Category:", selectedCategory);

    return (
        <>
            {categoryName && <CategoryHeader
                categoryName={categoryName}
                subCategoryName={subCategoryName || ''} />}


            {currentCategory && <DisplaySubCategoriesNames
                categoryId={currentCategory.categoryId}
                subCategoryName={categoryName || ''} />}
        </>
    );
};