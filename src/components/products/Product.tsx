import React, {useEffect, useState} from "react";
import {ProductHeader} from "./ProductHeader";
import {useParams} from "react-router-dom";
import {ProductType} from "../../models/types/ProductType";
import {ProductApi} from "../../api/ProductApi";


export const Product: React.FC = () => {
    const { subCategoryId } = useParams<{ subCategoryId: string }>();
    const [, setProducts] = useState<ProductType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        ProductApi.getProductsBySubCategoryId(Number(subCategoryId))
            .then(fetchedProducts => {
                setProducts(fetchedProducts);
                const filtered = fetchedProducts.filter(product => product.subCategory.id === Number(subCategoryId));
                setFilteredProducts(filtered);
            })
            .catch(error => console.error("Błąd podczas pobierania produktów:", error));
    }, [subCategoryId]);

    return (
        <div>
            {filteredProducts.map(product => (
                <ProductHeader key={product.id} product={product} />

            ))}
        </div>
    );
}
