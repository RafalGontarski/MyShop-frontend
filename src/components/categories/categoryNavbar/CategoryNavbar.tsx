import React, { useContext, useEffect } from "react";
import { CategoryNavbarContainer } from "./CategoryNavbar.styles";
import { CategoryContext } from "../../../models/context/CategoryContexts";
import { CategoryApi } from "../../../api/CategoryApi";
import CategoryNavbarLinkButton from "../../tools/button/CategoryNavbarLinkButton";
import {Link} from "react-router-dom";
import {useSelectedCategory} from "../../../models/context/SelectedCategoryContext";

// Zakładam, że CategoryType został już zdefiniowany wcześniej
type CategoryType = {
    name: string;
    // ... inne pola kategorii, jeśli są potrzebne
};

const CategoryNavbarComponent: React.FC = () => {
    console.log("Renderowanie CategoryNavbar");

    const { categories, setCategories } = useContext(CategoryContext);
    const { setSelectedCategory } = useSelectedCategory();

    useEffect(() => {
        async function fetchCategories() {
            try {
                const categoriesFromApi: CategoryType[] = await CategoryApi.getAllCategories();
                console.log("Pobrane kategorie z API:", categoriesFromApi);
                setCategories(categoriesFromApi);
                console.log("Kategorie po aktualizacji:", categories);
            } catch (error) {
                console.error("Błąd podczas pobierania kategorii:", error);
            }
        }

        fetchCategories();
    }, []);

    return (
        <CategoryNavbarContainer>
            {categories.map((category) => (
                <CategoryNavbarLinkButton
                    key={category.name}
                    label={category.name}
                    as={Link}
                    to={`/categories/${category.name}`}
                    onClick={() => {
                        console.log("Kliknięto w kategorię:", category.name);
                        setSelectedCategory(category.name);
                    }}
                />
            ))}
        </CategoryNavbarContainer>
    );
};

export const CategoryNavbar = React.memo(CategoryNavbarComponent);




