import React, {useState} from "react";

import HomeIcon from "@mui/icons-material/Home";
import {FormControl, InputLabel, SelectChangeEvent} from "@mui/material";

import WhiteButton from "../../tools/button/WhiteButton";
import {useTranslation} from "react-i18next";

import {
    StyledMenuItem,
    LinksContainer,
    FilterContainer,
    SelectContainer,
    StyledTypography,
    StyledFilterIcon,
    ActionsContainer,
    StyledProductLink,
    BreadcrumbContainer,
    SecondSubCategoryName,
    SecondSubCatBreadcrumbs,
    SecondSubCatInnerContainer,
    SecondSubCatHeaderContainer,
    StyledSecondSubCategorySelect,
} from "./CategoryHeader.styles";


interface CategoryHeaderProps {
    categoryName: string;
    subCategoryName?: string;
    secondSubCategoryName?: string;
    productName?: string;
}

export const SecondSubCategoryHeader: React.FC<CategoryHeaderProps> = ({
             categoryName ,
             subCategoryName,
             secondSubCategoryName,
             productName
                                                                 }) => {
    // console.log("categoryName:", categoryName);
    // console.log("subCategoryName:", subCategoryName);
    // console.log("secondSubCategoryName:", secondSubCategoryName);


    const [value, setValue] = useState('');
    const { t } = useTranslation();
    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setValue(event.target.value as string);
    };


    const getTranslationKey = (
        categoryName: string,
        subCategoryName: string | undefined | null,
        secondSubCategoryName: string | undefined | null
    ): string => {
        if (secondSubCategoryName) {
            // Jeśli secondSubCategoryName istnieje, uzyskaj tłumaczenie dla secondSubCategories
            return `secondSubCategories.${secondSubCategoryName}`;
        } else if (subCategoryName) {
            // Jeśli subCategoryName istnieje, ale secondSubCategoryName nie, uzyskaj tłumaczenie dla subCategories
            return `subCategories.${subCategoryName}`;
        } else {
            // W przeciwnym razie uzyskaj tłumaczenie dla categoryHeader.breadCrumbs
            return `categoryHeader.breadCrumbs.${categoryName}`;
        }
    };


    return (
        <SecondSubCatHeaderContainer>
            <SecondSubCatInnerContainer>
                <BreadcrumbContainer>
                    <SecondSubCatBreadcrumbs >
                        <StyledProductLink
                            to="/">
                            <HomeIcon />
                        </StyledProductLink>

                        <StyledProductLink
                            to="/categories">{t(`categoryHeader.breadCrumbs.allCategories`)}</StyledProductLink>
                        <StyledProductLink
                            to={`/categories/${categoryName}`}>{t(`categoryHeader.breadCrumbs.${categoryName}`)}</StyledProductLink>
                        {subCategoryName && (
                            <>
                                <StyledProductLink
                                    to={`/categories/${categoryName}/${subCategoryName}`}>{t(`subCategories.${subCategoryName}`)}</StyledProductLink>
                            </>
                        )}
                        {secondSubCategoryName && (
                            <>
                                <StyledProductLink
                                    to={`/categories/${categoryName}/${subCategoryName}/${secondSubCategoryName}`}>{t(`secondSubCategories.${secondSubCategoryName}`)}</StyledProductLink>
                            </>
                        )}
                        {productName && (
                            <>
                                <StyledProductLink
                                    to={`/categories/${categoryName}/${subCategoryName}/${secondSubCategoryName}/${productName}`}>{productName}</StyledProductLink>
                            </>
                        )}
                    </SecondSubCatBreadcrumbs>


                </BreadcrumbContainer>
                <ActionsContainer>
                    <LinksContainer>
                        <SecondSubCategoryName>{productName || t(getTranslationKey(categoryName, subCategoryName, secondSubCategoryName))}</SecondSubCategoryName>
                    </LinksContainer>
                    <WhiteButton label={t(`categoryHeader.buttons.consulting`)}/>
                </ActionsContainer>

                <ActionsContainer>
                    <FilterContainer>
                        <StyledFilterIcon />
                        <StyledTypography>Filtr</StyledTypography>
                    </FilterContainer>

                    <SelectContainer>
                        <FormControl variant="standard">
                            <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                            <StyledSecondSubCategorySelect<string>
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={value}
                                onChange={handleChange}
                                label="Wybór"
                            >
                                <StyledMenuItem value={0}>dowolność</StyledMenuItem>
                                <StyledMenuItem value={10}>najtańsze</StyledMenuItem>
                                <StyledMenuItem value={20}>najdroższe</StyledMenuItem>
                                <StyledMenuItem value={30}>najwyżej oceniane</StyledMenuItem>
                                <StyledMenuItem value={40}>najnowsze produkty w pierwszej kolejności</StyledMenuItem>
                                <StyledMenuItem value={50}>alfabetycznie (A - Z)</StyledMenuItem>
                                <StyledMenuItem value={60}>alfabetycznie (Z - A)</StyledMenuItem>
                            </StyledSecondSubCategorySelect>
                        </FormControl>
                    </SelectContainer>
                </ActionsContainer>
            </SecondSubCatInnerContainer>
        </SecondSubCatHeaderContainer>
    );
};
