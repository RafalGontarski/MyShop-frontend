import React, {useEffect, useState} from "react";
import {CategoryApi} from "../../../api/CategoryApi";
import {SubCatChildDiv, SubCategoriesContainer, SubCatLink} from "./DisplaySubCategoriesNames.styles";
import {
    CategoriesChildrenDiv,
    ChildDiv, ChildImg
} from "../DisplayCategoriesInMainPage/DisplayCategoriesInMainPage.styles";
import {Link} from "react-router-dom";
import CatfishIcon from "../../../resources/categoriesIcon/catfishIcon.png";


type DisplaySubCategoriesNamesProps = {
    categoryId: number | undefined;
    categoryName: string;
};

export const DisplaySubCategoriesNames: React.FC<DisplaySubCategoriesNamesProps> = ({
                                                                                        categoryId,
                                                                                        categoryName}) => {
    const [subCategoriesNames, setSubCategoriesNames] = useState<string[]>([]);

    useEffect(() => {
        if (categoryId !== undefined) {
            CategoryApi.getSubCategoriesNames(categoryId)
                .then(names => setSubCategoriesNames(names))
                .catch(error => console.error("Błąd podczas pobierania podkategorii:", error));
        }
    }, [categoryId]);


    return (
        <SubCategoriesContainer>
            <CategoriesChildrenDiv>
                {subCategoriesNames.map(name => (
                    <SubCatChildDiv key={name}>
                        <ChildImg
                            src={CatfishIcon}
                            alt="Catfish Icon"
                            // style={{ width: '7rem', height: 'auto' }}
                        />
                        <SubCatLink
                            as={Link}
                            to={`/categories/${categoryName}/${name}`}  // Zaktualizowany URL dla subkategorii
                            underline="none"
                        >
                            {name}
                        </SubCatLink>
                    </SubCatChildDiv>
                ))}
            </CategoriesChildrenDiv>
        </SubCategoriesContainer>
    );
}