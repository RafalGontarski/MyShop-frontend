import { Drawer } from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
import CustomButton from "../button/Button";
import {Link} from "react-router-dom";

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

export const ProfileDrawer: React.FC<DrawerProps> = ({ open, onClose, onLogoutClick, userId, userName,userSurname, userEmail, userRole }) => {
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
            anchor={'right'}
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
                            onClick={onClose}
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
                                onClick={onClose}
                            >
                                Grafiki
                            </ProfileDrawerLink>
                        )}
                        {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                            <ProfileDrawerLink
                                as={Link}
                                to="/product-center"
                                underline="none"
                                onClick={onClose}
                            >
                                Produkty
                            </ProfileDrawerLink>
                        )}
                        {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                            <ProfileDrawerLink
                                as={Link}
                                to="/categories-center"
                                underline="none"
                                onClick={onClose}
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
                                onClick={onClose}
                            >
                                Pracownicy
                            </ProfileDrawerLink>
                        )}

                        <ProfileLine/>

                        <ProfileDrawerLink
                            // as={Link}
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