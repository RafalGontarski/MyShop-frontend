import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../../models/types/ProductType";
import { ProductApi } from "../../api/ProductApi";
import { ProductHeader } from "./ProductHeader";


type RouteParams = {
    categoryName: string;
    subCategoryName: string;
    secondSubCategoryName?: string;
    productName: string;
};

export const Product: React.FC = () => {
    const { categoryName, subCategoryName, secondSubCategoryName, productName } = useParams<RouteParams>();
    const [products, setProducts] = useState<ProductType[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
    const [product, setProduct] = useState<ProductType | null>(null);

    console.log('Product log: ', categoryName, subCategoryName, secondSubCategoryName, productName);

    const fetchProductById = async (productId: number) => {
        try {
            const fetchedProduct = await ProductApi.getProductById(productId);
            setProduct(fetchedProduct);
        } catch (error) {
            console.error("Error fetching product:", error);
            setProduct(null);
        }
    }

    useEffect(() => {
        // Debugowanie: Logowanie wszystkich parametrów, aby zobaczyć, co jest przekazywane
        console.log('Params:', categoryName, subCategoryName, secondSubCategoryName, productName);

        // Rest of the code...
    }, [categoryName, subCategoryName, secondSubCategoryName, productName]);

    useEffect(() => {
        const productId = products.find(product => product.name === productName)?.id;
        if (productId !== undefined) {
            fetchProductById(productId);
        } else {
            console.error("Product name not found");
        }
    }, [productName, products]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await ProductApi.getAllProducts();  // zakładając, że masz taką metodę
            setProducts(fetchedProducts);
        };
        fetchProducts();
    }, []);



    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {product ? (
                <>
                    <ProductHeader
                        product={product}
                        categoryName={product.category?.name || "Nieznana kategoria"}
                        subCategoryName={product.subCategory?.name || "Nieznana podkategoria"}
                        secondSubCategoryName={product.secondSubCategory?.name || "Nieznana druga kategoria"}
                        productName={product.name}
                    />
                    <p>{product.description}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};



