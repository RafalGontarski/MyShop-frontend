import React, {useState} from "react";

import {
    SubCatChildDiv,
    SubCategoriesContainer,
    SubCatLink
} from "../displaySubCategoriesNames/DisplaySubCategoriesNames.styles";
import {CategoriesChildrenDiv, ChildImg} from "../DisplayCategoriesInMainPage/DisplayCategoriesInMainPage.styles";
import CatfishIcon from "../../../resources/categoriesIcon/catfishIcon.png";
import {Link, useNavigate} from "react-router-dom";
import SecondSubCategoryType from "../../../models/types/SecondSubCategoryType";
import {useTranslation} from "react-i18next";

type DisplaySecondSubCategoriesProps = {
    categoryName: string;
    secondSubCategories: SecondSubCategoryType[]; // Dodane
    subCategoryName: string;
};


export const DisplaySecondSubCategories: React.FC<DisplaySecondSubCategoriesProps> = ({
          categoryName,
          secondSubCategories: incomingSecondSubCategories,
          subCategoryName
                                                                                      }) => {
    const [secondSubCategories, ] = useState<SecondSubCategoryType[]>(incomingSecondSubCategories);
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleSecondSubCategoryClick = (categoryName: string, subCategoryName: string, secondSubCat: string) => {
        navigate(`/categories/${categoryName}/${subCategoryName}/${secondSubCat}`);
    };

    return (
        <SubCategoriesContainer>
            <CategoriesChildrenDiv>
                {secondSubCategories.map(secondSubCat => (
                    <SubCatChildDiv
                        key={secondSubCat.id?.toString() || secondSubCat.name}
                        onClick={() => handleSecondSubCategoryClick(
                            categoryName,
                            subCategoryName,
                            secondSubCat.name
                        )}
                    >
                        <ChildImg
                            src={secondSubCat.iconUrl ? `http://localhost:8080${secondSubCat.iconUrl}` : CatfishIcon}
                            alt={secondSubCat.name + " Icon"}
                        />
                        <SubCatLink
                            as={Link}
                            to={`/categories/${categoryName}/${subCategoryName}/${secondSubCat.name}`} // Dodane categoryName
                            underline="none"
                        >
                            {t(`secondSubCategories.${secondSubCat.name}`)}
                        </SubCatLink>
                    </SubCatChildDiv>
                ))}
            </CategoriesChildrenDiv>
        </SubCategoriesContainer>
    );
}