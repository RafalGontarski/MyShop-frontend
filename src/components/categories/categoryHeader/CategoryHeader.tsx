import React from "react";
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
    console.log("categoryName:", categoryName);
    console.log("subCategoryName:", subCategoryName);

    return (
        <HeaderContainer>
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
