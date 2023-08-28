import React, {useState} from "react";
import {Link} from "react-router-dom";

import CustomButton from "../tools/button/Button";
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
    LinksContainer,
    ProfileDrawerLink,
    ProfileLine,
    UserDataContainer
} from "../tools/drawer/ProfileDrawer.styles";

import {
    CategoryFormInput,
    CategoryTitleContainer,
    ValidateText
} from "../editPages/categoriesEditPanel/CategoryEditPanel.styles";

import {
    FormContainer,
    ProfileImageContainer,
    ProfilePageWelcome
} from "../editPages/bookAdressEditPanel/AdressBookEditPanel.styles";

import {StyledTextField, WelcomeText} from "../tools/drawer/Drawer.styles";
import {HelpDeskAdvantageChildLink} from "./HelpDeskTools.styles";


export const Example: React.FC = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <MyProfileContainer>

            <MyProfileLeftContainer>

                <LinksContainer>

                    <ProfileDrawerLink
                        as={Link}
                        to="/helpDesk/contact"
                        underline="none"
                        // onClick={onClose}
                    >
                        Kontakt
                    </ProfileDrawerLink>

                    <ProfileDrawerLink
                        underline="none"
                        onClick={() => setIsExpanded(!isExpanded)}
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
                    <Title>Przykład</Title>
                </CategoryTitleContainer>

                <WelcomeText variant="h6" gutterBottom>
                    Przykład komponentu
                </WelcomeText>

                <FormContainer
                    // onSubmit={handleAddCategory}
                >

                    <ProfileImageContainer>
                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Zobacz przykład komponentu
                            </WelcomeText>
                        </ProfilePageWelcome>

                    </ProfileImageContainer>


                </FormContainer>
            </Container>

            {/* Tutaj możesz dodać formularz edycji profilu i inne elementy */}
        </MyProfileContainer>
    )
}