import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ProductType} from "../../../models/types/ProductType";
import {ProductApi} from "../../../api/ProductApi";
import { Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ProductImg from "../../../resources/categoriesIcon/Akcesoria.png";
import {SecondSubCategoryHeader} from "../categoryHeader/SecondSubCategoryHeader";
import {DisplayProducts} from "../../products/DisplayProductsInSubCategory/DisplayProducts";

type RouteParams = {
    categoryName: string;
    subCategoryName: string;
    secondSubCategoryName?: string;
};

export const SecondSubCategory: React.FC = () => {
    const { categoryName, subCategoryName, secondSubCategoryName } = useParams<RouteParams>();
    const [products, setProducts] = useState<ProductType[]>([]);
    // const [hasSecondSubCategories, setHasSecondSubCategories] = useState<boolean>(false);

    useEffect(() => {
        ProductApi.getAllProducts()
            .then(fetchedProducts => {
                const filteredProducts = fetchedProducts.filter(product =>
                    product.secondSubCategory && product.secondSubCategory.name === secondSubCategoryName
                );
                console.log('Filtered Products:', filteredProducts);
                setProducts(filteredProducts);
            })
            .catch(error => console.error("Błąd podczas pobierania produktów:", error));
    }, [secondSubCategoryName]);

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
            <SecondSubCategoryHeader
                categoryName={categoryName}
                subCategoryName={subCategoryName}
                secondSubCategoryName={secondSubCategoryName}
            />
            <DisplayProducts products={products}/>
        </div>
    );
}
