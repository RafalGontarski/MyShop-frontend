import React, {useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import {SubCategoryHeader} from "../categoryHeader/SubCategoryHeader";
import {DisplaySecondSubCategories} from "../displaySecondSubCategories/DisplaySecondSubCategories";

import {CategoryApi} from "../../../api/CategoryApi";
import SecondSubCategoryType from "../../../models/types/SecondSubCategoryType";
import SubCategoryType from "../../../models/types/SubCategoryType";

type RouteParams = {
    categoryName: string;
    subCategoryName: string;
};

export const SubCategory: React.FC = () => {
    const { categoryName, subCategoryName } = useParams<RouteParams>();
    const [, setCategoryId] = useState<number | null>(null);
    const [, setSubCategoryId] = useState<number | null>(null);
    const [, setCurrentSubCategory] = useState<SubCategoryType | null>(null);
    const [secondSubCategories, setSecondSubCategories] = useState<SecondSubCategoryType[]>([]);
    const [hasSecondSubCategories, setHasSecondSubCategories] = useState<boolean>(false);


    useEffect(() => {
        CategoryApi.getAllCategories()
            .then(categories => {
                const category = categories.find(cat => cat.name === categoryName);

                if (!category) {
                    throw new Error("Nie można znaleźć kategorii.");
                }

                if (category.categoryId !== undefined) {
                    setCategoryId(category.categoryId);
                }

                return Promise.all([category, CategoryApi.getAllSubCategories(category.categoryId)]);
            })
            .then(([category, subCategories]) => {
                const subCategory = subCategories.find(sub => sub.name === subCategoryName);
                if (!subCategory) {
                    throw new Error("Nie można znaleźć podkategorii.");
                }
                setCurrentSubCategory(subCategory as SubCategoryType);
                if (subCategory.id !== undefined) {
                    setSubCategoryId(subCategory.id);
                }
                return CategoryApi.getAllSecondSubCategories(category.categoryId, subCategory.id);
            })
            .then(fetchedSecondSubCategories => {
                setSecondSubCategories(fetchedSecondSubCategories);
                setHasSecondSubCategories(fetchedSecondSubCategories.length > 0);
            })
            .catch(error => console.error(error));
    }, [categoryName, subCategoryName]);


    if (!categoryName || !subCategoryName) {
        return <div>Brak kategorii lub podkategorii w URL</div>;
    }

    return (
        <div>
            <SubCategoryHeader
                categoryName={categoryName}
                subCategoryName={subCategoryName}
                hasSecondSubCategories={hasSecondSubCategories}
            />

            {secondSubCategories.length > 0 ? (
                <DisplaySecondSubCategories
                    categoryName={categoryName}
                    secondSubCategories={secondSubCategories}
                    subCategoryName={subCategoryName} />
            ) : (
                <div>Brak drugorzędnych podkategorii dla {subCategoryName}</div>
            )}
        </div>
    );
}
