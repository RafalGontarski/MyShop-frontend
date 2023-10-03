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
import {WelcomeText} from "../tools/drawer/Drawer.styles";
import CustomButton from "../tools/button/Button";
import {HelpDeskAdvantageChildLink} from "./HelpDeskTools.styles";


interface FreeShippingProps {
    // isExpanded: boolean;
    // toggleExpanded: () => void;
}

export const SecurePayments: React.FC<FreeShippingProps> = () => {

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
                    <Title>Bezpieczne płatności</Title>
                </CategoryTitleContainer>

                <WelcomeText variant="h6" gutterBottom>
                    Twoje dane są całkowicie bezpieczne. Informacje na temat adresu i karty kredytowej przesyłane są na nasz serwer za pomocą szyfrowanego połączenia i mogą być widoczne jedynie dla Twojego asystenta sprzedaży i webmastera. Jeśli przestrzega się poniższych zasad podczas kupowania w internecie, nie może wydarzyć się nic złego:
                </WelcomeText>

                <FormContainer
                    // onSubmit={handleAddCategory}
                >

                    <ProfileImageContainer>
                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Nasza obietnica
                            </WelcomeText>
                            <WelcomeText variant="button" gutterBottom>
                                Tutaj możesz skontaktować się z konsultantem
                            </WelcomeText>
                            {/*<StyledHandIcon/>*/}
                        </ProfilePageWelcome>


                        <CustomButton
                            label={"Zwrot produktu"}
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