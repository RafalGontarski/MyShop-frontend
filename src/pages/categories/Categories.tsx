import React from "react";
import {useTranslation} from "react-i18next";
import {
    Container,
    MenuWrapper,
    MyProfileCenterText,
    MyProfileComponents,
    MyProfileContainer,
    MyProfileLeftContainer, Title, TitleContainer, WrapperMenuButton
} from "../myprofile.styles";
import {StyledHandIcon, Welcome} from "../../components/drawer/Drawer.styles";
import {
    LineContainer, LineText,
    LinksContainer, ProfileDrawerLink, ProfileLine,
    ProfileWelcome,
    ProfileWelcomeText,
    UserData,
    UserDataContainer
} from "../../components/drawer/ProfileDrawer.styles";
import {Link} from "react-router-dom";
import {StyledMenuIcon} from "../../components/navbar/navbar.styles";



type EditCategoriesProps = {
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

export const Categories: React.FC<EditCategoriesProps> = ({
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
    console.log("Renderowanie komponentu CategoriesCenter");

    const { t } = useTranslation();

    function handleLogout() {
        console.log("logout");
        onLogoutClick(); // Wywołaj funkcję przekazaną jako prop
        onClose(); // Zamknij szufladę
    }

    function handleIconClick() {
        openLeftProfileDrawer();
    }


    let rolesString = "";
    if (userRole) {
        rolesString = userRole.join(', ');
    }

    return (
        <MyProfileContainer>


            <MyProfileLeftContainer>
                <MyProfileCenterText>Centrum Klienta</MyProfileCenterText>
                <Welcome>
                    <ProfileWelcomeText variant="h4" gutterBottom>
                        {t('loginDrawer.greeting')} {userName}
                    </ProfileWelcomeText>
                    <StyledHandIcon/>
                </Welcome>
                {/*<Welcome>*/}
                {/*    <ProfileWelcomeText variant="h6" gutterBottom>*/}
                {/*        {rolesString}*/}
                {/*    </ProfileWelcomeText>*/}
                {/*</Welcome>*/}

                <UserDataContainer>
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
                            Number klienta {userId}
                        </UserData>
                    </ProfileWelcome>
                </UserDataContainer>

                <LinksContainer>

                    <ProfileDrawerLink
                        as={Link}
                        to="/edit-profile"
                        underline="none"
                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                    >
                        Edytuj Konto
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
                    {userRole && (userRole.includes("ADMIN")) && (
                        <LineContainer>
                            <LineText>Panel Właściciela</LineText>
                        </LineContainer>
                    )}
                    {userRole && (userRole.includes("ADMIN")) && (
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

            <Container>
                <TitleContainer>
                    <Title>Kategorie</Title>
                </TitleContainer>
            </Container>

            {/* Tutaj możesz dodać formularz edycji profilu i inne elementy */}
        </MyProfileContainer>

    )
}