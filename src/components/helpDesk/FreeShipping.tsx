import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import {StyledMenuIcon} from "../navbar/Navbar.styles";

import {
    Container,
    MenuWrapper,
    MyProfileContainer,
    MyProfileLeftContainer,
    Title,
    WrapperMenuButton
} from "../editPages/editPages.styles";

import {
    ProfileLine,
    LinksContainer,
    ProfileDrawerLink,
} from "../tools/drawer/ProfileDrawer.styles";

import {
    CategoryTitleContainer,
} from "../editPages/categoriesEditPanel/CategoryEditPanel.styles";

import {
    FormContainer,
    ProfileImageContainer,
    ProfilePageWelcome
} from "../editPages/bookAdressEditPanel/AdressBookEditPanel.styles";

import {WelcomeText} from "../tools/drawer/Drawer.styles";
import {HelpDeskAdvantageChildLink} from "./HelpDeskTools.styles";


interface FreeShippingProps {
    isExpanded: boolean;
    toggleExpanded: () => void;
}

export const FreeShipping: React.FC<FreeShippingProps> = ({ isExpanded, toggleExpanded }) => {

    const location = useLocation();


    // useEffect(() => {
    //     // Definiujemy ścieżki, dla których menu "Atuty" powinno pozostać rozwinięte
    //     const atutyPaths = ['/helpDesk/freeShipping', '/helpDesk/guarantee'];
    //
    //     // Jeśli aktualna ścieżka jest jednym z powyższych, wykonaj funkcję toggleExpanded
    //     if (atutyPaths.includes(location.pathname)) {
    //         toggleExpanded();
    //     }
    //     // Jeśli chcesz, żeby menu zwijało się dla innych ścieżek, odkomentuj poniższą linię
    //     // else { toggleExpanded(); } // Chociaż wydaje się, że może to nie działać zgodnie z oczekiwaniami w pewnych przypadkach.
    // }, [location.pathname, toggleExpanded]);

    return (
        <MyProfileContainer>
            <MyProfileLeftContainer>
                <LinksContainer>
                    <ProfileDrawerLink
                        as={Link}
                        to="/helpDesk/contact"
                        underline="none"
                    >
                        Kontakt
                    </ProfileDrawerLink>
                    <ProfileDrawerLink
                        underline="none"
                        onClick={toggleExpanded}
                    >
                        Atuty {isExpanded ? '-' : '+'}
                    </ProfileDrawerLink>
                    {isExpanded && (
                        <>
                            <HelpDeskAdvantageChildLink
                                as={Link}
                                to="/helpDesk/freeShipping"
                                underline="none"
                            >
                                Darmowa wysyłka od 300 zł
                            </HelpDeskAdvantageChildLink>
                            <HelpDeskAdvantageChildLink
                                as={Link}
                                to="/helpDesk/guarantee"
                                underline="none"
                            >
                                Gwarancja Satysfakcji
                            </HelpDeskAdvantageChildLink>
                        </>
                    )}


                    <ProfileLine/>

                    <ProfileDrawerLink
                        as={Link}
                        to="/helpDesk/example"
                        underline="none"
                        // onClick={onClose}
                    >
                        Przykład
                    </ProfileDrawerLink>


                </LinksContainer>

            </MyProfileLeftContainer>



            <Container>
                <MenuWrapper>
                    <WrapperMenuButton
                        edge="start"
                        aria-label="menu"
                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        disableRipple
                        // onClick={handleIconClick}
                    >
                        <StyledMenuIcon />
                    </WrapperMenuButton>
                </MenuWrapper>
                <CategoryTitleContainer>
                    <Title>Darmowa wysyłka od 300 zł</Title>
                </CategoryTitleContainer>

                <WelcomeText variant="h6" gutterBottom>
                    Darmowa przesyłka to nasz atut
                </WelcomeText>

                <FormContainer
                    // onSubmit={handleAddCategory}
                >

                    <ProfileImageContainer>
                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Przeczytaj o naszej darmowej przesyłce
                            </WelcomeText>
                        </ProfilePageWelcome>

                    </ProfileImageContainer>


                </FormContainer>
            </Container>

            {/* Tutaj możesz dodać formularz edycji profilu i inne elementy */}
        </MyProfileContainer>
    )
}