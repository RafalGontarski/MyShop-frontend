import React, {useEffect, useState} from "react";
import {
    ActionsContainer,
    BreadcrumbContainer,
    CategoryName,
    HeaderContainer,
    LinksContainer,
    Breadcrumbs,
    InnerContainer, StyledLink, StyledOtherLink, SubCatBreadcrumbs
} from "./CategoryHeader.styles";
import WhiteButton from "../../tools/button/WhiteButton";
import HomeIcon from '@mui/icons-material/Home';
import {CategoryApi} from "../../../api/CategoryApi";
import CategoryType from "../../../models/types/CategoryType";
import styled from "styled-components";


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
                const fetchedCategories = await CategoryApi.getAllCategories();
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

    const VideoBackground = styled.div`
      && {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25.6rem;
        overflow: hidden;
        z-index: -1;
    
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
    
        background: url(http://localhost:8080${imageUrl}) no-repeat center center fixed;
        background-size: cover;

        @media (max-width: 1750px) {
          height: 25.3rem;
        }

        @media (max-width: 1550px) {
          height: 25.1rem;
        }

        @media (max-width: 1300px) {
          height: 24.8rem;
        }

        @media (max-width: 1250px) {
          height: 24rem;
        }

        @media (max-width: 1050px) {
          height: 23.7rem;
        }

        @media (max-width: 940px) {
          height: 16rem;
        }

        @media (max-width: 750px) {
          height: 15.2rem;
        }

        @media (max-width: 600px) {
          height: 13.2rem;
        }

        @media (max-width: 500px) {
          height: 13rem;
        }
      
      }
      
      
    `;

    return (
        <HeaderContainer>
            <VideoBackground>
                <video playsInline autoPlay muted loop>
                    <source src={`http://localhost:8080${imageUrl}`} type="video/mp4" />
                </video>
            </VideoBackground>
            <InnerContainer>
                <BreadcrumbContainer>
                    <SubCatBreadcrumbs>
                        <StyledLink to="/"><HomeIcon /></StyledLink>
                        <StyledLink to="/categories">Wszystkie Kategorie</StyledLink>
                        <StyledLink to={`/categories/${categoryName}`}>{categoryName}</StyledLink>
                        {subCategoryName && (
                            <>
                                <StyledLink
                                    to={`/categories/${categoryName}/${subCategoryName}`}
                                >
                                    {subCategoryName}
                                </StyledLink>
                            </>
                        )}
                        {productName && (
                            <>
                                <span>{productName}</span>
                            </>
                        )}
                    </SubCatBreadcrumbs>


                </BreadcrumbContainer>
                <CategoryName>{productName || subCategoryName || categoryName}</CategoryName>
                <ActionsContainer>
                    <LinksContainer>
                        <StyledOtherLink to="#">NOWOŚCI</StyledOtherLink>
                        <StyledOtherLink to="#">MARKI</StyledOtherLink>
                        <StyledOtherLink to="#">WIEDZA</StyledOtherLink>
                        <StyledOtherLink to="#">KONSULTACJE</StyledOtherLink>
                    </LinksContainer>
                    <WhiteButton label={'Doradztwo'}/>
                    {/*<ActionButton>Przycisk</ActionButton>*/}
                </ActionsContainer>
            </InnerContainer>
        </HeaderContainer>
    );
};
