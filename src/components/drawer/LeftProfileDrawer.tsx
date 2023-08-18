import { Drawer, Link } from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
import CustomButton from "../button/Button";

// styled component
import {
    Line,
    Welcome,
    IconClose,
    RememberMe,
    WelcomeText,
    ButtonClose,
    MainContainer,
    StyledHandIcon,
    StyledIconClose,
    RememberMeCheckBox,
    LoginFormContainer,
    CustomerCenterText,
    StyledFormControlLabel,
}
    from "./Drawer.styles";

import {
    LineContainer, LineText,
    LinksContainer,
    ProfileContainer,
    ProfileDrawerLink,
    ProfileLine, ProfileMainContainer, ProfileWelcome,
    ProfileWelcomeText, UserData, UserDataContainer
} from "./ProfileDrawer.styles";



type DrawerProps = {
    open: boolean;
    onClose: () => void;
    onLogoutClick: () => void;
    userId: number | null;
    userName: string | null;
    userSurname: string | null;
    userEmail: string | null;
    userRole: string[] | null;
};

export const LeftProfileDrawer: React.FC<DrawerProps> = ({ open, onClose, onLogoutClick, userId, userName,userSurname, userEmail, userRole }) => {
    const { t } = useTranslation();

    function handleLogout() {
        console.log("logout xd");
        onLogoutClick(); // Wywołaj funkcję przekazaną jako prop
        onClose(); // Zamknij szufladę
    }


    let rolesString = "";
    if (userRole) {
        rolesString = userRole.join(', ');
    }


    return (
        <Drawer
            anchor={'left'}
            open={open}
            onClose={onClose}
        >
            <ProfileMainContainer role="presentation">


                <IconClose>
                    <CustomerCenterText>Centrum Klienta</CustomerCenterText>
                    <ButtonClose
                        onClick={onClose}
                        disableRipple
                    >

                        <StyledIconClose/>
                    </ButtonClose>
                </IconClose>



                <ProfileContainer>

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
                            href="/edit-profile"
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
                                href="/product-center"
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
                                href="/employee-center"
                                underline="none"
                                onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                            >
                                Pracownicy
                            </ProfileDrawerLink>
                        )}
                        {userRole && (userRole.includes("ADMIN")) && (

                            <ProfileDrawerLink
                                href="/categories-center"
                                underline="none"
                                onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                            >
                                Kategorie
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

                </ProfileContainer>
            </ProfileMainContainer>
        </Drawer>
    )

}