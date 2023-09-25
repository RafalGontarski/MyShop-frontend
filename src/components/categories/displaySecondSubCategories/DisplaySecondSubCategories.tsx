import React, {useEffect, useState} from "react";
import SubCategoryType from "../../../models/types/SubCategoryType";
import {CategoryApi} from "../../../api/CategoryApi";
import {
    SubCatChildDiv,
    SubCategoriesContainer,
    SubCatLink
} from "../displaySubCategoriesNames/DisplaySubCategoriesNames.styles";
import {CategoriesChildrenDiv, ChildImg} from "../DisplayCategoriesInMainPage/DisplayCategoriesInMainPage.styles";
import CatfishIcon from "../../../resources/categoriesIcon/catfishIcon.png";
import {Link} from "react-router-dom";
import SecondSubCategoryType from "../../../models/types/SecondSubCategoryType";

type DisplaySecondSubCategoriesProps = {
    categoryId: number | null | undefined;
    subCategoryId: number | null | undefined;
    subCategoryName: string;
};


export const DisplaySecondSubCategories: React.FC<DisplaySecondSubCategoriesProps> = ({
                                                                                          categoryId,
                                                                                          subCategoryId,
                                                                                          subCategoryName
                                                                                      }) => {
    const [secondSubCategories, setSecondSubCategories] = useState<SecondSubCategoryType[]>([]);

    useEffect(() => {
        if (categoryId !== undefined && subCategoryId !== undefined) {
            CategoryApi.getAllSecondSubCategories(categoryId ?? undefined, subCategoryId ?? undefined)
                .then(data => setSecondSubCategories(data))
                .catch(error => console.error("Błąd podczas pobierania drugorzędnych podkategorii:", error));
        }
        console.log('SecondSubCategories from DisplaySecondSubCategories:', JSON.stringify(secondSubCategories, null, 2));
    }, [categoryId, subCategoryId]);

    return (
        <SubCategoriesContainer>
            <CategoriesChildrenDiv>
                {secondSubCategories.map(secondSubCat => (
                    <SubCatChildDiv key={secondSubCat.name}>
                        <ChildImg
                            src={secondSubCat.iconUrl ? `http://localhost:8080${secondSubCat.iconUrl}` : CatfishIcon}
                            alt={secondSubCat.name + " Icon"}
                        />
                        <SubCatLink
                            as={Link}
                            to={`/categories/${subCategoryName}/${secondSubCat.name}`}
                            underline="none"
                        >
                            {secondSubCat.name}
                        </SubCatLink>
                    </SubCatChildDiv>
                ))}
            </CategoriesChildrenDiv>
        </SubCategoriesContainer>
    );
}