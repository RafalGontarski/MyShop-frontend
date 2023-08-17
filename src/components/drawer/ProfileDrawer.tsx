import { Drawer } from "@mui/material";
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

import {LinksContainer, ProfileContainer, ProfileDrawerLink, ProfileLine} from "./ProfileDrawer.styles";



type DrawerProps = {
    open: boolean;
    onClose: () => void;
    onLogoutClick: () => void;
    userName: string | null;
    userRole: string[] | null;
};

export const ProfileDrawer: React.FC<DrawerProps> = ({ open, onClose, onLogoutClick, userName, userRole }) => {
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
            <MainContainer role="presentation">


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
                        <WelcomeText variant="h4" gutterBottom>
                            {t('loginDrawer.greeting')} {userName}
                        </WelcomeText>
                        <StyledHandIcon/>
                    </Welcome>
                    <Welcome>
                        <WelcomeText variant="h6" gutterBottom>
                            {rolesString}
                        </WelcomeText>
                    </Welcome>

                    <LinksContainer>
                        {userRole && (userRole.includes("ADMIN")) && (
                            <ProfileDrawerLink
                                href="#"
                                underline="none"
                                onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                            >
                                Zatrudnij pracownika
                            </ProfileDrawerLink>
                        )}
                        {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                            <ProfileDrawerLink
                                href="#"
                                underline="none"
                                onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                            >
                                Dodaj Produkt
                            </ProfileDrawerLink>
                        )}
                        <ProfileDrawerLink
                            href="#"
                            underline="none"
                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        >
                            Edytuj Konto
                        </ProfileDrawerLink>

                        <ProfileLine/>

                        <ProfileDrawerLink
                            href="#"
                            underline="none"
                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                            onClick={handleLogout}
                        >
                            Wyloguj
                        </ProfileDrawerLink>

                    </LinksContainer>

                </ProfileContainer>
            </MainContainer>
        </Drawer>
    )

}