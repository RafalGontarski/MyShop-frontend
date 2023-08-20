import React, { useContext, useEffect } from "react";
import { CategoryNavbarContainer } from "./CategoryNavbar.styles";
import { CategoryContext } from "../../context/CategoryContexts";
import { CategoryApi } from "../../api/CategoryApi";
import CategoryNavbarLinkButton from "../button/CategoryNavbarLinkButton";
import {Link} from "react-router-dom";

// Zakładam, że CategoryType został już zdefiniowany wcześniej
type CategoryType = {
    name: string;
    // ... inne pola kategorii, jeśli są potrzebne
};

export const CategoryNavbar: React.FC = () => {
    const { categories, setCategories } = useContext(CategoryContext);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const categoriesFromApi: CategoryType[] = await CategoryApi.getAllCategoriesName();
                console.log("Ustawiam kategorie na:", categoriesFromApi);
                setCategories(categoriesFromApi);
                console.log("Po ustawieniu kategorii:", categories);
            } catch (error) {
                console.error("Błąd podczas pobierania kategorii:", error);
            }
        }

        fetchCategories();
    }, [setCategories]);

    return (
        <CategoryNavbarContainer>
            {categories.map((category) => (
                <CategoryNavbarLinkButton
                    key={category.name}
                    label={category.name}
                    as={Link}
                    to={`/categories/${category.name}`}
                    // Jeśli chcesz, żeby przycisk miał jakąś funkcję onClick, możesz ją tutaj dodać
                    // onClick={() => handleCategoryClick(category)}
                    // Jeśli chcesz, żeby przycisk przekierowywał do jakiegoś URL, możesz użyć atrybutu "to"
                    // to={`/category/${category.name}`}
                />
            ))}
        </CategoryNavbarContainer>
    );
};



