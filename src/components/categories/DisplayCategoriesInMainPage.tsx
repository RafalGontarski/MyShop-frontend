import {
    DisplayCategoriesInMainPageContainer,
    DisplayCategoriesInMainPageTitle
} from "./DisplayCategoriesInMainPage.styles";
import React, {useEffect, useState} from 'react';
import {CategoryApi} from "../../api/CategoryApi";
import CategoryType from "../../models/CategoryType";

import MenuLink from "../link/MenuLink";
import {ProfileDrawerLink} from "../drawer/ProfileDrawer.styles";
import { Link } from "react-router-dom";


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


            <div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {categories.map(category => (
                    <div style={{
                        flex: '1 1 calc(33.333% - 10px)', // Odejmujemy trochę miejsca na marginesy
                        margin: '5px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <ProfileDrawerLink
                            key={category.name}
                            as={Link}
                            to={`/categories/${category.name}`}  // Przykładowy URL dla kategorii
                            underline="none"
                            // onClick={onClose}  // Zamknij szufladę po kliknięciu w kategorię
                        >
                            {category.name}
                        </ProfileDrawerLink>
                    </div>
                ))}
            </div>



        </DisplayCategoriesInMainPageContainer>
    );
}





