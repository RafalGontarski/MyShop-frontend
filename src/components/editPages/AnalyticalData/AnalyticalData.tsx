import {StyledTitle} from "./AnalyticalData.styles";
import React from "react";
import {useTranslation} from "react-i18next";
import {
    Container,
    MenuWrapper,
    MyProfileCenterText,
    MyProfileContainer,
    MyProfileLeftContainer, Title, TitleContainer, WrapperMenuButton
} from "../editPages.styles";
import {
    LineContainer, LineText,
    LinksContainer,
    ProfileDrawerLink, ProfileLine,
    ProfileWelcome,
    UserData,
    UserDataContainer
} from "../../tools/drawer/ProfileDrawer.styles";
import {Link} from "react-router-dom";
import {StyledMenuIcon} from "../../navbar/Navbar.styles";
import {useClickContext} from "../../../models/providers/ClickProvider";
import {
    EditLine,
    FormContainer,
    ProfileImageContainer,
    ProfilePageWelcome
} from "../profileEditPanel/ProfileEditPanel.styles";
import {
    HiddenStyledTextField,
    StyledTextField,
    TogglePasswordVisibility,
    WelcomeText
} from "../../tools/drawer/Drawer.styles";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CustomButton from "../../tools/button/Button";
import LinkButton from "../../tools/button/LinkButton";
import {DefaultNavClickData} from "./DefaultNavClickData";

type AnalitycalDataProps = {
    open: boolean;
    onClose: () => void;
    onLogoutClick: () => void;
    openLeftProfileDrawer: () => void;
    userId: number | null;
    userName: string | null;
    userSurname: string | null;
    userEmail: string | null;
    userRole: string[] | null;
};

export const AnalitycalData: React.FC<AnalitycalDataProps> = ({
            open,
            onClose,
            onLogoutClick,
            openLeftProfileDrawer,
            userId,
            userName,
            userSurname,
            userEmail,
            userRole
        }) => {
    const { t } = useTranslation();
    const { linkClicks } = useClickContext();

    function handleLogout() {
        onLogoutClick(); // Wywołaj funkcję przekazaną jako prop
        onClose(); // Zamknij szufladę
    }

    function handleIconClick() {
        openLeftProfileDrawer();
    }


    return (
        <MyProfileContainer>


            <MyProfileLeftContainer>

                <UserDataContainer>
                    <MyProfileCenterText>Centrum Klienta</MyProfileCenterText>
                    <ProfileWelcome>
                        <UserData variant="body1" gutterBottom
                                  style={{ marginRight: '4px' }}
                        >
                            {userName}
                        </UserData>
                        <UserData variant="body1" gutterBottom>
                            {userSurname}
                        </UserData>
                    </ProfileWelcome>
                    <ProfileWelcome>
                        <UserData variant="body1" gutterBottom>
                            {userEmail}
                        </UserData>
                    </ProfileWelcome>
                    <ProfileWelcome>
                        <UserData variant="body1" gutterBottom>
                            Numer klienta {userId}
                        </UserData>
                    </ProfileWelcome>
                </UserDataContainer>

                <LinksContainer>

                    <ProfileDrawerLink
                        as={Link}
                        to="/address-book"
                        underline="none"
                        onClick={onClose}
                    >
                        Książka adresowa
                    </ProfileDrawerLink>

                    <ProfileDrawerLink
                        as={Link}
                        to="/edit-profile"
                        underline="none"
                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                    >
                        Edytuj konto
                    </ProfileDrawerLink>

                    {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                        <LineContainer>
                            <LineText>Panel Managera</LineText>
                        </LineContainer>
                    )}
                    {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                        <ProfileDrawerLink
                            as={Link}
                            to="/graphic"
                            underline="none"
                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        >
                            Grafiki
                        </ProfileDrawerLink>
                    )}
                    {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                        <ProfileDrawerLink
                            as={Link}
                            to="/product-center"
                            underline="none"
                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        >
                            Produkty
                        </ProfileDrawerLink>
                    )}
                    {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                        <ProfileDrawerLink
                            as={Link}
                            to="/categories-center"
                            underline="none"
                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        >
                            Kategorie
                        </ProfileDrawerLink>
                    )}
                    {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                        <ProfileDrawerLink
                            as={Link}
                            to="/analytic-data"
                            underline="none"
                            onClick={onClose}
                        >
                            Statystyki klikalności
                        </ProfileDrawerLink>
                    )}

                    {userRole && (userRole.includes("ADMIN")) && (
                        <LineContainer>
                            <LineText>Panel Właściciela</LineText>
                        </LineContainer>
                    )}

                    {userRole && (userRole.includes("ADMIN")) && (

                        <ProfileDrawerLink
                            as={Link}
                            to="/employee-center"
                            underline="none"
                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        >
                            Pracownicy
                        </ProfileDrawerLink>
                    )}

                    <ProfileLine/>

                    <ProfileDrawerLink
                        href="/"
                        underline="none"
                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        onClick={handleLogout}
                    >
                        Wyloguj
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
                            onClick={handleIconClick}
                        >
                            <StyledMenuIcon />
                        </WrapperMenuButton>
                    </MenuWrapper>


                    <TitleContainer>
                        <Title>Statystyka klikalności</Title>
                    </TitleContainer>

                    <FormContainer>
                        <ProfileImageContainer>

                            <ProfilePageWelcome>
                                <WelcomeText variant="h4" gutterBottom>
                                    Główny Pasek Nawigacyjny (górny navbar)
                                </WelcomeText>
                                <DefaultNavClickData linkClicks={linkClicks}/>
                                {/*<StyledHandIcon/>*/}
                            </ProfilePageWelcome>

                            <EditLine/>

                            <ProfilePageWelcome>
                                <WelcomeText variant="h4" gutterBottom>
                                    Zmień hasło
                                </WelcomeText>
                                <WelcomeText variant="subtitle1" gutterBottom>
                                    Tutaj możesz zmienić hasło
                                </WelcomeText>
                                {/*<StyledHandIcon/>*/}
                            </ProfilePageWelcome>

                            <EditLine/>

                            <ProfilePageWelcome>
                                <WelcomeText variant="h4" gutterBottom>
                                    Zmień nazwę
                                </WelcomeText>
                                <WelcomeText variant="subtitle1" gutterBottom>
                                    Tutaj możesz zmienić nazwę użytkownika
                                </WelcomeText>
                                {/*<StyledHandIcon/>*/}
                            </ProfilePageWelcome>

                            <EditLine/>

                            <ProfilePageWelcome>
                                <WelcomeText variant="h4" gutterBottom>
                                    Zmień adres
                                </WelcomeText>
                                <WelcomeText
                                    variant="subtitle1"
                                    gutterBottom
                                >
                                    Przejdź do książki adresowej
                                </WelcomeText>
                                {/*<StyledHandIcon/>*/}
                            </ProfilePageWelcome>

                            <LinkButton
                                as={Link}
                                to={'/address-book'}
                                label={'KSIĄŻKA ADRESOWA'}
                                // disabled={!isEmailValid || !isPasswordValid}
                                // onClick={combinedHandleLogin}
                            />

                        </ProfileImageContainer>
                    </FormContainer>

                </Container>


            {/* Tutaj możesz dodać formularz edycji profilu i inne elementy */}
        </MyProfileContainer>

    )
}