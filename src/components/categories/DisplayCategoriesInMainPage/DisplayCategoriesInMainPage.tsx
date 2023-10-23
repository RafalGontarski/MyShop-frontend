import {
    CategoriesChildrenDiv, ChildDiv, ChildImg,
    DisplayCategoriesInMainPageContainer,
    DisplayCategoriesInMainPageTitle
} from "./DisplayCategoriesInMainPage.styles";
import React, {useEffect, useState} from 'react';
import {CategoryApi} from "../../../api/CategoryApi";
import CategoryType from "../../../models/types/CategoryType";

import {ProfileDrawerLink} from "../../tools/drawer/ProfileDrawer.styles";
import {Link, useNavigate, useParams} from "react-router-dom";
import { useSelectedCategory } from "../../../models/context/SelectedCategoryContext";
import {useTranslation} from "react-i18next";


export const DisplayCategoriesInMainPage: React.FC = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const { setSelectedCategory } = useSelectedCategory();
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        async function fetchCategories() {
            try {
                const categoriesFromApi: CategoryType[] = await CategoryApi.getAllCategories();
                console.log("Pobrane kategorie z API:", categoriesFromApi);
                setCategories(categoriesFromApi);
            } catch (error) {
                console.error("Błąd podczas pobierania kategorii:", error);
            }
        }

        fetchCategories();
    }, []);

    useEffect(() => {
        console.log("Categories from DisplayCategoriesInMainPage: ", categories);
    }, [categories]);




    const handleCategoryClick = (categoryName: string) => {
        setSelectedCategory(categoryName);
        navigate(`/categories/${categoryName}`);
    };

    return (
        <DisplayCategoriesInMainPageContainer>
            <DisplayCategoriesInMainPageTitle>
                {t(`categoryTitleInMainPage.categories`)}
            </DisplayCategoriesInMainPageTitle>

            <CategoriesChildrenDiv>
                {categories.map(category => (
                    <ChildDiv
                        key={category.name}
                        onClick={() => handleCategoryClick(category.name)}>
                        <ChildImg
                            src={`http://localhost:8080${category.iconUrl}`}
                            alt={category.name + " Icon"}
                        />
                        <ProfileDrawerLink
                            key={category.name}
                            as={Link}
                            to={`/categories/${category.name}`}  // Jest nadal użyteczne dla dostępności i SEO
                            underline="none"
                        >
                            {t(`categoryNavbar.${category.name}`)}
                        </ProfileDrawerLink>
                    </ChildDiv>
                ))}
            </CategoriesChildrenDiv>
        </DisplayCategoriesInMainPageContainer>
    );
}





