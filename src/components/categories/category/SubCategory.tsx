import React, {useEffect, useState} from "react";
import {CategoryHeader} from "../categoryHeader/CategoryHeader";
import {useParams} from "react-router-dom";
import {ProductType, SubCategoryType} from "../../../models/types/ProductType";
import {CategoryApi} from "../../../api/CategoryApi";
import {ProductApi} from "../../../api/ProductApi";
import {SubCategoryHeader} from "../categoryHeader/SubCategoryHeader";
import { Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ProductImg from '../../../resources/categoriesIcon/catfishIcon.png';
import {useSelectedCategory} from "../../../models/context/SelectedCategoryContext";
import CategoryType from "../../../models/types/CategoryType";
import {DisplaySubCategoriesNames} from "../displaySubCategoriesNames/DisplaySubCategoriesNames";
import {DisplaySecondSubCategories} from "../displaySecondSubCategories/DisplaySecondSubCategories";
import SecondSubCategoryType from "../../../models/types/SecondSubCategoryType";

type RouteParams = {
    categoryName: string;
    subCategoryName: string;
};

export const SubCategory: React.FC = () => {
    const { categoryName, subCategoryName } = useParams<RouteParams>();

    const [categoryId, setCategoryId] = useState<number | null>(null);
    const [subCategoryId, setSubCategoryId] = useState<number | null>(null);
    const [currentSubCategory, setCurrentSubCategory] = useState<SubCategoryType | null>(null);
    const [secondSubCategories, setSecondSubCategories] = useState<SecondSubCategoryType[]>([]);

    useEffect(() => {
        // Najpierw pobieramy wszystkie kategorie główne.
        CategoryApi.getAllCategories()
            .then(categories => {
                // Następnie szukamy kategorii, której nazwa pasuje do tej w URL.
                const category = categories.find(cat => cat.name === categoryName);

                if (!category) {
                    throw new Error("Nie można znaleźć kategorii.");
                }

                if (category.categoryId !== undefined) {
                    setCategoryId(category.categoryId);
                }

                // Jeśli kategoria została znaleziona, pobieramy jej podkategorie.
                return Promise.all([category, CategoryApi.getAllSubCategories(category.categoryId)]);
            })
            .then(([category, subCategories]) => {
                // Następnie szukamy podkategorii, której nazwa pasuje do tej w URL.
                const subCategory = subCategories.find(sub => sub.name === subCategoryName);

                if (!subCategory) {
                    throw new Error("Nie można znaleźć podkategorii.");
                }

                setCurrentSubCategory(subCategory as SubCategoryType);
                if (subCategory.id !== undefined) {
                    setSubCategoryId(subCategory.id);
                }
                // Jeśli podkategoria została znaleziona, pobieramy jej drugorzędne podkategorie.
                return CategoryApi.getAllSecondSubCategories(category.categoryId, subCategory.id);
            })
            .then(fetchedSecondSubCategories => {
                setSecondSubCategories(fetchedSecondSubCategories);
            })
            .catch(error => console.error(error));
    }, [categoryName, subCategoryName]);


    if (!categoryName || !subCategoryName) {
        return <div>Brak kategorii lub podkategorii w URL</div>;
    }

    return (
        <div>
            <SubCategoryHeader categoryName={categoryName} subCategoryName={subCategoryName} />

            {secondSubCategories.length > 0 ? (
                secondSubCategories.map(secondSub => (
                    // Tutaj możesz wyświetlić nazwę lub cokolwiek chcesz z drugorzędnych podkategorii.
                    // <div key={secondSub.id}>
                    //     {secondSub.name}
                    // </div>
                    <DisplaySecondSubCategories
                        categoryId={categoryId ?? undefined}
                        subCategoryId={subCategoryId ?? undefined}
                        subCategoryName={secondSub.name} />

                ))
            ) : (
                <div>Brak drugorzędnych podkategorii dla {subCategoryName}</div>
            )}
        </div>
    );
}
