import React from "react";
import {ProductType} from "../../models/types/ProductType";
import {
    BreadcrumbContainer,
    ProductBreadcrumbs, ProductHeaderContainer,
    ProductInnerContainer,
    SecondSubCatHeaderContainer,
    StyledProductLink,
} from "../categories/categoryHeader/CategoryHeader.styles";
import HomeIcon from "@mui/icons-material/Home";


interface ProductHeaderProps {
    product: ProductType | null;
    categoryName: string;
    subCategoryName?: string;
    secondSubCategoryName?: string;
    productName?: string;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({
                                                                product,
                                                                categoryName,
                                                                subCategoryName,
                                                                secondSubCategoryName,
                                                                productName
                                                            }) => {

    console.log('Pola z ProductHeader: ', product, categoryName, subCategoryName, secondSubCategoryName, productName);

    // Zmienne pomocnicze dla uproszczenia odwołań
    const category = product?.secondSubCategory?.subCategory?.category || product?.subCategory?.category;
    const subCategory = product?.secondSubCategory?.subCategory || product?.subCategory;
    const secondSubCategory = product?.secondSubCategory;

    return (
        <ProductHeaderContainer>
            <ProductInnerContainer>
                <BreadcrumbContainer>
                    <ProductBreadcrumbs >
                        <StyledProductLink
                            to="/">
                            <HomeIcon />
                        </StyledProductLink>

                        <StyledProductLink
                            to="/categories">Wszystkie Kategorie</StyledProductLink>
                        <StyledProductLink
                            to={`/categories/${category?.name || 'Nieznana kategoria'}`}>{category?.name || 'Nieznana kategoria'}</StyledProductLink>
                        {subCategory && (
                            <>
                                <StyledProductLink
                                    to={`/categories/${category?.name}/${subCategory?.name}`}>{subCategory?.name}</StyledProductLink>
                            </>
                        )}
                        {secondSubCategory && (
                            <>
                                <StyledProductLink
                                    to={`/categories/${category?.name}/${subCategory?.name}/${secondSubCategory?.name}`}>{secondSubCategory?.name}</StyledProductLink>
                            </>
                        )}
                        {productName && (
                            <>
                                <StyledProductLink
                                    to={`/categories/${category?.name}/${subCategory?.name}/${secondSubCategory?.name}/${product?.name}`}>{product?.name}</StyledProductLink>
                            </>
                        )}
                    </ProductBreadcrumbs>
                </BreadcrumbContainer>
            </ProductInnerContainer>
        </ProductHeaderContainer>
    );
}

