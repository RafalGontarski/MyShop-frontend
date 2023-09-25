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
import { useNavigate } from "react-router-dom";
import CatfishIcon from "../../../resources/categoriesIcon/catfishIcon.png";


export const DisplayCategoriesInMainPage: React.FC = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const navigate = useNavigate();

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

    const handleCategoryClick = (categoryName: string) => {
        navigate(`/categories/${categoryName}`);
    };

    return (
        <DisplayCategoriesInMainPageContainer>
            <DisplayCategoriesInMainPageTitle>
                Kategorie
            </DisplayCategoriesInMainPageTitle>

            <CategoriesChildrenDiv>
                {categories.map(category => (
                    <ChildDiv key={category.name} onClick={() => handleCategoryClick(category.name)}>
                        <ChildImg
                            src={`http://localhost:8080${category.iconUrl}`}
                            alt={category.name + " Icon"}
                        />
                        <ProfileDrawerLink
                            // to={`/categories/${category.name}`}  // Jest nadal użyteczne dla dostępności i SEO
                            underline="none"
                        >
                            {category.name}
                        </ProfileDrawerLink>
                    </ChildDiv>
                ))}
            </CategoriesChildrenDiv>
        </DisplayCategoriesInMainPageContainer>
    );
}





