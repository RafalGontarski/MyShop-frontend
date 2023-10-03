import React, {useEffect, useState} from "react";
import {
    Container,
    MenuWrapper,
    MyProfileContainer,
    MyProfileLeftContainer, Title,
    WrapperMenuButton
} from "../editPages/editPages.styles";
import {
    LinksContainer,
    ProfileDrawerLink, ProfileLine,
} from "../tools/drawer/ProfileDrawer.styles";
import {Link} from "react-router-dom";
import {StyledMenuIcon} from "../navbar/Navbar.styles";
import {
    CategoryTitleContainer,
} from "../editPages/categoriesEditPanel/CategoryEditPanel.styles";
import {
    FormContainer,
    ProfileImageContainer,
    ProfilePageWelcome
} from "../editPages/bookAdressEditPanel/AdressBookEditPanel.styles";
import {StyledSubtitle, WelcomeText} from "../tools/drawer/Drawer.styles";
import CustomButton from "../tools/button/Button";
import {HelpDeskAdvantageChildLink} from "./HelpDeskTools.styles";


interface FreeShippingProps {
    // isExpanded: boolean;
    // toggleExpanded: () => void;
}

export const FrequentlyAskedQuestions: React.FC<FreeShippingProps> = () => {

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
                        to="/helpDesk/service"
                        underline="none"
                        // onClick={onClose}
                    >
                        Zestawienie
                    </ProfileDrawerLink>
                    <ProfileDrawerLink
                        as={Link}
                        to="/helpDesk/contact"
                        underline="none"
                        // onClick={onClose}
                    >
                        Kontakt
                    </ProfileDrawerLink>
                    <ProfileDrawerLink
                        as={Link}
                        to="/helpDesk/questions"
                        underline="none"
                        // onClick={onClose}
                    >
                        Często zadawane pytania
                    </ProfileDrawerLink>
                    <ProfileDrawerLink
                        as={Link}
                        to="/helpDesk/delivery"
                        underline="none"
                        // onClick={onClose}
                    >
                        Koszt dostaw i czas oczekiwania
                    </ProfileDrawerLink>
                    <ProfileDrawerLink
                        as={Link}
                        to="/helpDesk/repairService"
                        underline="none"
                        // onClick={onClose}
                    >
                        Serwis i naprawa asortymentu
                    </ProfileDrawerLink>
                    <ProfileDrawerLink
                        as={Link}
                        to="/helpDesk/productRefund"
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
                                to="/helpDesk/moneyRefund"
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
                        to="/helpDesk/guide"
                        underline="none"
                        // onClick={onClose}
                    >
                        Poradniki
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
                    <Title>Często zadawane pytania</Title>
                </CategoryTitleContainer>

                <StyledSubtitle
                    variant="subtitle2"
                    gutterBottom>
                    Na tej stronie znajdują się odpowiedzi na najczęściej zadawane pytania dotyczące firmy Thomann, sklepu oraz procesu zamawiania. Jeśli masz dalsze pytania to prosimy o kontakt telefoniczny lub przez email.                </StyledSubtitle>

                <FormContainer
                    // onSubmit={handleAddCategory}
                >

                    <ProfileImageContainer>
                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Najczęściej zadawane pytania                            </WelcomeText>
                            <WelcomeText variant="button" gutterBottom>
                                Jak mogę zapłacić?
                            </WelcomeText>
                            {/*<StyledHandIcon/>*/}
                        </ProfilePageWelcome>


                        <CustomButton
                            label={"Serwis gwarancyjny"}
                            // type="submit"
                            // disabled={!isEmailValid || !isPasswordValid}
                        />

                    </ProfileImageContainer>


                </FormContainer>
            </Container>

            {/* Tutaj możesz dodać formularz edycji profilu i inne elementy */}
        </MyProfileContainer>
    )
}