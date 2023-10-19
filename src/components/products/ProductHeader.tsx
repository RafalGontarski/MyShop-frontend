import React from "react";
import {ProductType} from "../../models/types/ProductType";
import {
    BreadcrumbContainer,
    SecondSubCatBreadcrumbs,
    SecondSubCatHeaderContainer,
    SecondSubCatInnerContainer,
    StyledLink,
    SubCatSpan
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
        <SecondSubCatHeaderContainer>
            <SecondSubCatInnerContainer>
                <BreadcrumbContainer>
                    <SecondSubCatBreadcrumbs >
                        <StyledLink
                            to="/">
                            <HomeIcon />
                        </StyledLink>

                        <StyledLink
                            to="/categories">Wszystkie Kategorie</StyledLink>
                        <StyledLink
                            to={`/categories/${category?.name || 'Nieznana kategoria'}`}>{category?.name || 'Nieznana kategoria'}</StyledLink>
                        {subCategory && (
                            <>
                                <StyledLink
                                    to={`/categories/${category?.name}/${subCategory?.name}`}>{subCategory?.name}</StyledLink>
                            </>
                        )}
                        {secondSubCategory && (
                            <>
                                <StyledLink
                                    to={`/categories/${category?.name}/${subCategory?.name}/${secondSubCategory?.name}`}>{secondSubCategory?.name}</StyledLink>
                            </>
                        )}
                        {productName && (
                            <>
                                <StyledLink
                                    to={`/categories/${category?.name}/${subCategory?.name}/${secondSubCategory?.name}/${product?.name}`}>{product?.name}</StyledLink>
                            </>
                        )}
                    </SecondSubCatBreadcrumbs>
                </BreadcrumbContainer>
            </SecondSubCatInnerContainer>
        </SecondSubCatHeaderContainer>
    );
}

