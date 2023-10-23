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
    SubCatHeaderContainer, StyledConsultationsLink
} from "./CategoryHeader.styles";

import WhiteButton from "../../tools/button/WhiteButton";

import {SelectChangeEvent} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {useTranslation} from "react-i18next";

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
    const { t } = useTranslation();
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

                        <StyledLink to="/categories">{t(`categoryHeader.breadCrumbs.allCategories`)}</StyledLink>
                        <StyledLink to={`/categories/${categoryName}`}>{t(`categoryHeader.breadCrumbs.${categoryName}`)}</StyledLink>
                        {subCategoryName && (
                            <>
                                <StyledLink to={`/categories/${categoryName}/${subCategoryName}`}>{t(`subCategories.${subCategoryName}`)}</StyledLink>
                            </>
                        )}
                    </SubCatBreadcrumbs>
                </BreadcrumbContainer>
                <ActionsContainer>
                    <LinksContainer>
                        <SubCategoryName>{t(`subCategories.${subCategoryName}`) || t(`categoryHeader.breadCrumbs.${categoryName}`)}</SubCategoryName>
                    </LinksContainer>
                </ActionsContainer>
                <ActionsContainer>
                    <LinksContainer>
                        <StyledOtherLink to="#">{t(`categoryHeader.links.new`)}</StyledOtherLink>
                        <StyledOtherLink to="#">{t(`categoryHeader.links.brands`)}</StyledOtherLink>
                        <StyledOtherLink to="#">{t(`categoryHeader.links.knowledge`)}</StyledOtherLink>
                        <StyledConsultationsLink to="#">{t(`categoryHeader.links.consultations`)}</StyledConsultationsLink>
                    </LinksContainer>
                    <WhiteButton label={t(`categoryHeader.buttons.consulting`)}/>
                </ActionsContainer>
            </SubCatInnerContainer>
        </SubCatHeaderContainer>
    );
};
