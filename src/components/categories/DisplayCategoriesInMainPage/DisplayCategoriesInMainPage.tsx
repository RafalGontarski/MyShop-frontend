import {
    CategoriesChildrenDiv, ChildDiv, ChildImg,
    DisplayCategoriesInMainPageContainer,
    DisplayCategoriesInMainPageTitle
} from "./DisplayCategoriesInMainPage.styles";
import React, {useEffect, useState} from 'react';
import {CategoryApi} from "../../../api/CategoryApi";
import CategoryType from "../../../models/types/CategoryType";

import MenuLink from "../../tools/link/menuLink/MenuLink";
import {ProfileDrawerLink} from "../../tools/drawer/ProfileDrawer.styles";
import { Link } from "react-router-dom";
import CatfishIcon from "../../../resources/categoriesIcon/catfishIcon.png";


export const DisplayCategoriesInMainPage: React.FC = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await CategoryApi.getAllCategoriesName();
                setCategories(fetchedCategories);
            } catch (error) {
                console.error("Błąd podczas pobierania kategorii:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <DisplayCategoriesInMainPageContainer>
            <DisplayCategoriesInMainPageTitle>
                Kategorie
            </DisplayCategoriesInMainPageTitle>


            <CategoriesChildrenDiv>
                {categories.map(category => (
                    <ChildDiv key={category.name}>
                            <ChildImg
                                src={CatfishIcon}
                                alt="Catfish Icon"
                                style={{ width: '7rem', height: 'auto' }}
                            />

                            <ProfileDrawerLink

                                as={Link}
                                to={`/categories/${category.name}`}  // Przykładowy URL dla kategorii
                                underline="none"
                                // onClick={onClose}  // Zamknij szufladę po kliknięciu w kategorię
                            >
                                {category.name}
                            </ProfileDrawerLink>
                    </ChildDiv>
                ))}
            </CategoriesChildrenDiv>



        </DisplayCategoriesInMainPageContainer>
    );
}





