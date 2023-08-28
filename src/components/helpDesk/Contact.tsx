import React, {useState} from "react";
import {
    Container,
    MenuWrapper,
    MyProfileCenterText, MyProfileContainer,
    MyProfileLeftContainer, Title,
    WrapperMenuButton
} from "../editPages/editPages.styles";
import {
    LineContainer, LineText,
    LinksContainer,
    ProfileDrawerLink, ProfileLine,
    ProfileWelcome,
    UserData,
    UserDataContainer
} from "../tools/drawer/ProfileDrawer.styles";
import {Link} from "react-router-dom";
import {StyledMenuIcon} from "../navbar/Navbar.styles";
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
import CustomButton from "../tools/button/Button";
import {EditLine} from "../editPages/profileEditPanel/ProfileEditPanel.styles";
import {HelpDeskAdvantageChildLink} from "./HelpDeskTools.styles";


export const Contact: React.FC = () => {

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
                        to="/"
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
                    <Title>Kontakt</Title>
                </CategoryTitleContainer>

                <WelcomeText variant="h6" gutterBottom>
                    Jako klient naszego sklepu możesz skontaktować się z naszymi konsultantami.
                </WelcomeText>

                <FormContainer
                    // onSubmit={handleAddCategory}
                >

                    <ProfileImageContainer>
                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Kontakt
                            </WelcomeText>
                            <WelcomeText variant="button" gutterBottom>
                                Tutaj możesz skontaktować się z konsultantem
                            </WelcomeText>
                            {/*<StyledHandIcon/>*/}
                        </ProfilePageWelcome>


                        <CustomButton
                            label={"Skontaktuj się"}
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