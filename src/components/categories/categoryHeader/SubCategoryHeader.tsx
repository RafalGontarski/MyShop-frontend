import React, {useState} from "react";
import {
    ActionsContainer,
    BreadcrumbContainer,
    LinksContainer,
    SubCatBreadcrumbs,
    SubCategoryName,
    SubCatInnerContainer,
    StyledLink,
    StyledOtherLink,
    SubCatHeaderContainer
} from "./CategoryHeader.styles";

import WhiteButton from "../../tools/button/WhiteButton";

import {SelectChangeEvent} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

interface CategoryHeaderProps {
    categoryName: string;
    subCategoryName?: string;
    hasSecondSubCategories?: boolean;
    // productName?: string;
}

export const SubCategoryHeader: React.FC<CategoryHeaderProps> = ({
                                      categoryName ,
                                      subCategoryName,
                                      hasSecondSubCategories,
                                      // productName
                                }) => {
    // console.log("categoryName:", categoryName);
    // console.log("subCategoryName:", subCategoryName);

    const [, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setValue(event.target.value as string);
    };


    return (
        <SubCatHeaderContainer>
            <SubCatInnerContainer>
                <BreadcrumbContainer>
                    <SubCatBreadcrumbs hasSubCategories={hasSecondSubCategories}>
                        <StyledLink to="/">
                            <HomeIcon />
                        </StyledLink>

                        <StyledLink to="/categories">Wszystkie Kategorie</StyledLink>
                        <StyledLink to={`/categories/${categoryName}`}>{categoryName}</StyledLink>
                        {subCategoryName && (
                            <>
                                <StyledLink to={`/categories/${categoryName}/${subCategoryName}`}>{subCategoryName}</StyledLink>
                            </>
                        )}
                    </SubCatBreadcrumbs>
                </BreadcrumbContainer>
                <ActionsContainer>
                    <LinksContainer>
                        <SubCategoryName>{subCategoryName || categoryName}</SubCategoryName>
                    </LinksContainer>
                </ActionsContainer>
                <ActionsContainer>
                    <LinksContainer>
                        <StyledOtherLink to="#">NOWOŚCI</StyledOtherLink>
                        <StyledOtherLink to="#">MARKI</StyledOtherLink>
                        <StyledOtherLink to="#">WIEDZA</StyledOtherLink>
                        <StyledOtherLink to="#">KONSULTACJE</StyledOtherLink>
                    </LinksContainer>
                    <WhiteButton label={'Doradztwo'}/>
                </ActionsContainer>
            </SubCatInnerContainer>
        </SubCatHeaderContainer>
    );
};
