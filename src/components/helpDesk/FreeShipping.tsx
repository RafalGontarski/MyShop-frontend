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
    // isExpanded: boolean;
    // toggleExpanded: () => void;
}

export const FreeShipping: React.FC<FreeShippingProps> = () => {

    const [isExpanded, setIsExpanded] = useState<boolean>(
        () => window.sessionStorage.getItem("isExpanded") === "true"
    );

    const toggleExpanded = () => {
        const newValue = !isExpanded;
        setIsExpanded(newValue);
        window.sessionStorage.setItem("isExpanded", String(newValue));
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            // behavior: 'smooth'
        });
    }, []);

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
                        as={Link}
                        to="/helpDesk/contact"
                        underline="none"
                        // onClick={onClose}
                    >
                        Często zadawane pytania
                    </ProfileDrawerLink>
                    <ProfileDrawerLink
                        as={Link}
                        to="/helpDesk/contact"
                        underline="none"
                        // onClick={onClose}
                    >
                        Koszt dostaw i czas oczekiwania
                    </ProfileDrawerLink>
                    <ProfileDrawerLink
                        as={Link}
                        to="/helpDesk/contact"
                        underline="none"
                        // onClick={onClose}
                    >
                        Zwrot produktu
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
                                to="/helpDesk/refund"
                                underline="none"
                            >
                                30-dniowa gwarancja zwrotu pieniędzy
                            </HelpDeskAdvantageChildLink>
                            <HelpDeskAdvantageChildLink
                                as={Link}
                                to="/helpDesk/threeYearsGuarantee"
                                underline="none"
                            >
                                3-letnia gwarancja Thomann
                            </HelpDeskAdvantageChildLink>
                            <HelpDeskAdvantageChildLink
                                as={Link}
                                to="/helpDesk/guarantee"
                                underline="none"
                            >
                                Gwarancja Satysfakcji
                            </HelpDeskAdvantageChildLink>
                            <HelpDeskAdvantageChildLink
                                as={Link}
                                to="/helpDesk/securePayments"
                                underline="none"
                            >
                                Bezpieczne płatności
                            </HelpDeskAdvantageChildLink>
                            <HelpDeskAdvantageChildLink
                                as={Link}
                                to="/helpDesk/warehouse"
                                underline="none"
                            >
                                Największy magazyn logistyczny w Europie
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