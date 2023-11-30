import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../../models/types/ProductType";
import { ProductApi } from "../../api/ProductApi";
import { ProductHeader } from "./ProductHeader";
import ProductImg from "../../resources/categoriesIcon/Akcesoria.png";
import {
    Information,
    ProductLeftContainer,
    ProductMainContainer, ProductName,
    ProductPrice,
    ProductRightContainer, StyledProductImg,
    StyledRating
} from "./Product.styles";
import {Typography} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import {QuantitySelector} from "../tools/selectors/QuantitySelector";
import AddToBasketButton from "../tools/button/AddToBasketButton";
import UpDownIcon from '../../resources/icons/UpDownIcon.png';

type RouteParams = {
    categoryName: string;
    subCategoryName: string;
    secondSubCategoryName?: string;
    productName: string;
};

export const Product: React.FC = () => {
    const { categoryName, subCategoryName, secondSubCategoryName, productName } = useParams<RouteParams>();
    const [products, setProducts] = useState<ProductType[]>([]);
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

    const handleSelectNumber = (number: number) => {
        console.log('Selected number:', number);
    };

    const LabelWithIcon = () => (
        <div>
            1 <img src={UpDownIcon} alt="UpDown Icon" />
        </div>
    );

    useEffect(() => {
        // Debugging: Logging all parameters to see what is being passed
        console.log('Params:', categoryName, subCategoryName, secondSubCategoryName, productName);

        // Rest of the code...
    }, [categoryName, subCategoryName, secondSubCategoryName, productName]);

    useEffect(() => {
        if (products.length > 0) {
            const productId = products.find(product => product.name === productName)?.id;
            if (productId !== undefined) {
                fetchProductById(productId);
            } else {
                console.error("Product name not found");
            }
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
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Skeleton variant="circular" width={40} height={40} />
        </div>;
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

                    <ProductMainContainer>
                        <ProductLeftContainer>
                            <ProductName>{product.name}</ProductName>
                            <StyledRating name="customized-color" defaultValue={2} />
                            <Information>{product.producent}</Information>
                            {/*<>{product.imageUrl}</>*/}
                            <StyledProductImg src={ProductImg} alt="productImg" />
                            <Information>{product.description}</Information>
                        </ProductLeftContainer>
                        <ProductRightContainer>
                            <ProductPrice>{product.price} zł</ProductPrice>
                            <Information>Zawiera podatek VAT, nie zawiera kosztów wysyłki 49 zł</Information>
                            <Typography variant="body2" color="green">
                                {/*{product.status}*/}
                                Dostępny w magazynie
                            </Typography>
                            <Information>Wysyłka spodziewana do dnia:</Information>


                                <QuantitySelector label={<LabelWithIcon />} onSelectNumber={handleSelectNumber} />
                                <AddToBasketButton label={'Do Koszyka'}/>

                        </ProductRightContainer>
                    </ProductMainContainer>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};



