import React from "react";
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


export const Advantages: React.FC = () => {
    return (
        <MyProfileContainer>

            <MyProfileLeftContainer>

                <UserDataContainer>
                </UserDataContainer>

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
                        as={Link}
                        to="/helpDesk/advantages"
                        underline="none"
                        // onClick={onClose}
                    >
                        Atuty
                    </ProfileDrawerLink>


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
                    <Title>Atuty</Title>
                </CategoryTitleContainer>

                <WelcomeText variant="h6" gutterBottom>
                    Oto nasze atuty
                </WelcomeText>

                <FormContainer
                    // onSubmit={handleAddCategory}
                >

                    <ProfileImageContainer>
                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Przeczytaj o naszych atutach
                            </WelcomeText>
                        </ProfilePageWelcome>

                    </ProfileImageContainer>


                </FormContainer>
            </Container>

            {/* Tutaj możesz dodać formularz edycji profilu i inne elementy */}
        </MyProfileContainer>
    )
}