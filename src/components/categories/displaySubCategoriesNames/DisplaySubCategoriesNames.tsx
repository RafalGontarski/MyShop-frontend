import React, {useEffect, useState} from "react";
import {SubCatChildDiv, SubCategoriesContainer, SubCatLink} from "./DisplaySubCategoriesNames.styles";
import {
    CategoriesChildrenDiv,
    ChildImg
} from "../DisplayCategoriesInMainPage/DisplayCategoriesInMainPage.styles";
import {Link} from "react-router-dom";
import CatfishIcon from "../../../resources/categoriesIcon/catfishIcon.png";
import {CategoryApi} from "../../../api/CategoryApi";
import SubCategoryType from "../../../models/types/SubCategoryType";


type DisplaySubCategoriesProps = {
    categoryId: number | undefined;
    subCategoryName: string;
};

export const DisplaySubCategoriesNames: React.FC<DisplaySubCategoriesProps> = ({
                                                                                        categoryId,
                                                                                   subCategoryName}) => {
    const [subCategories, setSubCategories] = useState<SubCategoryType[]>([]);

    useEffect(() => {
        if (categoryId !== undefined) {
            CategoryApi.getAllSubCategories(categoryId)
                .then(names => setSubCategories(names))
                .catch(error => console.error("Błąd podczas pobierania podkategorii:", error));
        }
        console.log('SubCategories from DisplaySubCategoriesNames:', JSON.stringify(subCategories, null, 2));

    }, [categoryId]);



    return (
        <SubCategoriesContainer>
            <CategoriesChildrenDiv>
                {subCategories.map(subCat => (
                    <SubCatChildDiv key={subCat.name}>
                        <ChildImg
                            src={subCat.iconUrl ? `http://localhost:8080${subCat.iconUrl}` : CatfishIcon}
                            alt={subCat.name + " Icon"}
                        />
                        <SubCatLink
                            as={Link}
                            to={`/categories/${subCategoryName}/${subCat.name}`}  // Zaktualizowany URL dla subkategorii
                            underline="none"
                        >
                            {subCat.name}
                        </SubCatLink>
                    </SubCatChildDiv>
                ))}

            </CategoriesChildrenDiv>
        </SubCategoriesContainer>
    );
}