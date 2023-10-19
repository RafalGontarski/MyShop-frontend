import React, {useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import {SubCategoryHeader} from "../categoryHeader/SubCategoryHeader";
import {DisplaySecondSubCategories} from "../displaySecondSubCategories/DisplaySecondSubCategories";

import {CategoryApi} from "../../../api/CategoryApi";
import SecondSubCategoryType from "../../../models/types/SecondSubCategoryType";
import {ProductApi} from "../../../api/ProductApi";
import {ProductType} from "../../../models/types/ProductType";

import {DisplayProducts} from "../../products/DisplayProductsInSubCategory/DisplayProducts";
import {SecondSubCategoryHeader} from "../categoryHeader/SecondSubCategoryHeader";

type RouteParams = {
    categoryName: string;
    subCategoryName: string;
};

export const SubCategory: React.FC = () => {
    const { categoryName, subCategoryName } = useParams<RouteParams>();
    const [secondSubCategories, setSecondSubCategories] = useState<SecondSubCategoryType[]>([]);
    const [hasSecondSubCategories, setHasSecondSubCategories] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductType[]>([]);

    // console.log("Pole secondSubCategories: " + JSON.stringify(secondSubCategories));
    // console.log("Pole hasSecondSubCategories: " + hasSecondSubCategories);
    // console.log("Producty dla SubKategori: " + products);

    useEffect(() => {
        // console.log("Rozpoczęcie useEffect dla categoryName:", categoryName, "i subCategoryName:", subCategoryName);

        CategoryApi.getAllCategories()
            .then(categories => {
                // console.log("Otrzymane wszystkie kategorie:", categories);
                const category = categories.find(cat => cat.name === categoryName);

                if (!category) {
                    throw new Error("Nie można znaleźć kategorii.");
                }

                return Promise.all([category, CategoryApi.getAllSubCategories(category.categoryId)]);
            })
            .then(([category, subCategories]) => {
                // console.log("Otrzymane podkategorie dla kategorii:", category, "Są to:", subCategories);
                const subCategory = subCategories.find(sub => sub.name === subCategoryName);

                if (!subCategory) {
                    throw new Error("Nie można znaleźć podkategorii.");
                }

                return { category, subCategory };
            })
            .then(({ category, subCategory }) => {
                return Promise.all([
                    CategoryApi.getAllSecondSubCategories(category.categoryId, subCategory.id),
                    subCategory
                ]);
            })
            .then(([fetchedSecondSubCategories, subCategory]) => {
                // console.log("Otrzymane drugorzędne podkategorie:", fetchedSecondSubCategories);
                setSecondSubCategories(fetchedSecondSubCategories);

                const hasSecondSubs = fetchedSecondSubCategories.length > 0;
                setHasSecondSubCategories(hasSecondSubs);

                // console.log('HasSecondSubs: ', hasSecondSubs);
                if (!hasSecondSubs) {
                    // console.log("Nie ma drugorzędnych podkategorii. Pobieranie produktów dla subCategory.id:", subCategory.id);
                    return ProductApi.getProductsBySubCategoryId(subCategory.id!);
                }

                return [];
            })
            .then(fetchedProducts => {
                // console.log("Otrzymane produkty:", fetchedProducts);
                setProducts(fetchedProducts);
            })
            .catch(error => console.error("Wystąpił błąd w useEffect:", error));
    }, [categoryName, subCategoryName]);


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            // behavior: 'smooth'
        });
    }, []);

    if (!categoryName || !subCategoryName) {
        return <div>Brak kategorii lub podkategorii w URL</div>;
    }

    return (
        <div>
            {hasSecondSubCategories ? (
                <SubCategoryHeader
                    categoryName={categoryName}
                    subCategoryName={subCategoryName}
                    hasSecondSubCategories={hasSecondSubCategories}
                />
            ) : (
                <SecondSubCategoryHeader
                    categoryName={categoryName}
                    subCategoryName={subCategoryName}
                    // Jeśli nie masz secondSubCategoryName, przekaż null lub pusty string
                    secondSubCategoryName={undefined}
                />
            )}

            {hasSecondSubCategories ? (
                <DisplaySecondSubCategories
                    categoryName={categoryName}
                    secondSubCategories={secondSubCategories}
                    subCategoryName={subCategoryName} />
            ) : (
                <DisplayProducts products={products} />
            )}
        </div>
    );
}
