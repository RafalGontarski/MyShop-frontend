import React, {useEffect, useState} from "react";
import {CategoryHeader} from "../categoryHeader/CategoryHeader";
import {useParams} from "react-router-dom";
import {ProductType} from "../../../models/types/ProductType";
import {CategoryApi} from "../../../api/CategoryApi";
import {ProductApi} from "../../../api/ProductApi";


type RouteParams = {
    categoryName: string;
    subCategoryName: string;
};

export const SubCategory: React.FC = () => {
    const { categoryName, subCategoryName } = useParams<RouteParams>();
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        ProductApi.getAllProducts()
            .then(fetchedProducts => {
                const filteredProducts = fetchedProducts.filter(product =>
                    product.subCategory && product.subCategory.name === subCategoryName
                );
                console.log('Filtered Products' + filteredProducts);
                setProducts(filteredProducts);
            })
            .catch(error => console.error("Błąd podczas pobierania produktów:", error));
    }, [subCategoryName]);


    if (!categoryName || !subCategoryName) {
        return <div>Brak kategorii lub podkategorii w URL</div>;
    }

    return (
        <div>
            <CategoryHeader categoryName={categoryName} subCategoryName={subCategoryName} />
            <div>
                <h2>Produkty:</h2>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
