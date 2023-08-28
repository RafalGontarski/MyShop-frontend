import React from "react";
import {useSelectedCategory} from "../../../models/context/SelectedCategoryContext";
import {
    ActionButton,
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


interface CategoryHeaderProps {
    categoryName: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ categoryName }) => {
    console.log("Komponent Category Header jest renderowany");
    console.log(categoryName);
    return (
        <HeaderContainer>
            <InnerContainer>
                <BreadcrumbContainer>
                    <Breadcrumbs>
                        <Link to="/">powrót</Link>
                        <span>{"> "}</span>
                        <Link to="/categories">Wszystkie Kategorie</Link>
                        <span>{"> "}</span>
                        <span>{categoryName}</span>
                    </Breadcrumbs>
                </BreadcrumbContainer>
                <CategoryName>{categoryName}</CategoryName>
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
