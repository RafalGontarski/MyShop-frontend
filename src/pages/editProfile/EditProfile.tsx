import React from "react";
import {
    MyProfileCenterText,
    MyProfileComponents,
    MyProfileContainer,
    MyProfileLeftContainer
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
import {useTranslation} from "react-i18next";
import {TitleContainer, EditProfileContainer, Title, MenuWrapper, WrapperMenuButton} from "./EditProfile.styles";
import {StyledMenuButton, StyledMenuIcon} from "../../components/navbar/navbar.styles";


type EditProfileProps = {
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

export const EditProfile: React.FC<EditProfileProps> = ({
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
    console.log("Renderowanie komponentu EditProfile");

    const [leftProfileDrawerOpen, setLeftProfileDrawerOpen] = React.useState(false);

    const { t } = useTranslation();

    const handleLeftDrawerOpen = () => {
        console.log("LeftDrawerOpener");
        setLeftProfileDrawerOpen(true);
    };

    function handleIconClick() {
        openLeftProfileDrawer();
    }


    function handleLogout() {
        console.log("logout");
        onLogoutClick(); // Wywołaj funkcję przekazaną jako prop
        onClose(); // Zamknij szufladę
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
                            href="/product-center"
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
                            to="/employee-center"
                            underline="none"
                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        >
                            Pracownicy
                        </ProfileDrawerLink>
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

                    <ProfileLine/>

                    <ProfileDrawerLink
                        as={Link}
                        to="/"
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

            <EditProfileContainer>

                <TitleContainer>
                    <Title>Edytuj konto klienta</Title>
                </TitleContainer>


            </EditProfileContainer>

            {/* Tutaj możesz dodać formularz edycji profilu i inne elementy */}
        </MyProfileContainer>

    )
}