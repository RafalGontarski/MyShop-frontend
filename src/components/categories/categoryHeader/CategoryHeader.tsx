import React, {useEffect, useState} from "react";
import {
    ActionsContainer,
    BreadcrumbContainer,
    CategoryName,
    HeaderContainer,
    LinksContainer,
    Breadcrumbs,
    InnerContainer
} from "./CategoryHeader.styles";
import {Link} from "react-router-dom";
import WhiteButton from "../../tools/button/WhiteButton";
import HomeIcon from '@mui/icons-material/Home';
import {CategoryApi} from "../../../api/CategoryApi";
import CategoryType from "../../../models/types/CategoryType";


interface CategoryHeaderProps {
    categoryName: string;
    subCategoryName?: string;
    productName?: string;
}


export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
                                      categoryName ,
                                      subCategoryName,
                                      productName
                                }) => {
    // console.log("categoryName:", categoryName);
    // console.log("subCategoryName:", subCategoryName);

    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await CategoryApi.getAllCategoriesName();
                setCategories(fetchedCategories);
                console.log("Fetched categories:", JSON.stringify(fetchedCategories, null, 2));

            } catch (error) {
                console.error("Błąd podczas pobierania kategorii:", error);
            }
        };

        fetchCategories();
    }, []);

    const currentCategory = categories.find(cat => cat.name === categoryName);
    const imageUrl = currentCategory?.imageUrl || ''; // jeśli nie znajdzie kategorii, domyślnie imageUrl będzie puste

    console.log('ImageURL: ' + imageUrl);

    return (
        <HeaderContainer style={{
            backgroundImage: `url(http://localhost:8080${imageUrl})`
        }}>
            <InnerContainer>
                <BreadcrumbContainer>
                    <Breadcrumbs>
                        <Link to="/"><HomeIcon /></Link>
                        <span>{"> "}</span>
                        <Link to="/categories">Wszystkie Kategorie</Link>
                        <span>{"> "}</span>
                        <Link to={`/categories/${categoryName}`}>{categoryName}</Link>
                        {subCategoryName && (
                            <>
                                <span>{"> "}</span>
                                <Link to={`/categories/${categoryName}/${subCategoryName}`}>{subCategoryName}</Link>
                            </>
                        )}
                        {productName && (
                            <>
                                <span>{"> "}</span>
                                <span>{productName}</span>
                            </>
                        )}
                    </Breadcrumbs>


                </BreadcrumbContainer>
                <CategoryName>{productName || subCategoryName || categoryName}</CategoryName>
                <ActionsContainer>
                    <LinksContainer>
                        <Link to="#">NOWOŚCI</Link>
                        <Link to="#">MARKI</Link>
                        <Link to="#">PORADNIK</Link>
                    </LinksContainer>
                    <WhiteButton label={'Doradztwo'}/>
                    {/*<ActionButton>Przycisk</ActionButton>*/}
                </ActionsContainer>
            </InnerContainer>
        </HeaderContainer>
    );
};
