import { Drawer } from "@mui/material";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

// styled component
import {
    Welcome,
    IconClose,
    ButtonClose,
    StyledHandIcon,
    StyledIconClose,
    CustomerCenterText,
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


    return (
        <Drawer
            anchor={'left'}
            open={open}
            onClose={onClose}
        >
            <ProfileMainContainer role="presentation">


                <IconClose>
                    <CustomerCenterText>{t(`profileDrawer.center`)}</CustomerCenterText>
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
                                {t(`profileDrawer.clientNumber`)} {userId}
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
                            {t(`profileDrawer.addressBook`)}
                        </ProfileDrawerLink>

                        <ProfileDrawerLink
                            as={Link}
                            to="/edit-profile"
                            underline="none"
                            onClick={onClose}
                        >
                            {t(`profileDrawer.editAccount`)}
                        </ProfileDrawerLink>

                        {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                            <LineContainer>
                                <LineText>{t(`profileDrawer.managerPanel`)}</LineText>
                            </LineContainer>
                        )}
                        {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                            <ProfileDrawerLink
                                as={Link}
                                to="/graphic"
                                underline="none"
                                onClick={onClose}
                            >
                                {t(`profileDrawer.graphics`)}
                            </ProfileDrawerLink>
                        )}
                        {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                            <ProfileDrawerLink
                                as={Link}
                                to="/product-center"
                                underline="none"
                                onClick={onClose}
                            >
                                {t(`profileDrawer.products`)}
                            </ProfileDrawerLink>
                        )}
                        {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                            <ProfileDrawerLink
                                as={Link}
                                to="/categories-center"
                                underline="none"
                                onClick={onClose}
                            >
                                {t(`profileDrawer.categories`)}
                            </ProfileDrawerLink>
                        )}
                        {userRole && (userRole.includes("ADMIN") || userRole.includes("MANAGER")) && (
                            <ProfileDrawerLink
                                as={Link}
                                to="/analytic-data"
                                underline="none"
                                onClick={onClose}
                            >
                                {t(`profileDrawer.clickThroughStatistics`)}
                            </ProfileDrawerLink>
                        )}

                        {userRole && (userRole.includes("ADMIN")) && (
                            <LineContainer>
                                <LineText>{t(`profileDrawer.ownerPanel`)}</LineText>
                            </LineContainer>
                        )}
                        {userRole && (userRole.includes("ADMIN")) && (

                            <ProfileDrawerLink
                                as={Link}
                                to="/employee-center"
                                underline="none"
                                onClick={onClose}
                            >
                                {t(`profileDrawer.employees`)}
                            </ProfileDrawerLink>
                        )}

                        <ProfileLine/>

                        <ProfileDrawerLink
                            // as={Link}
                            href="/"
                            underline="none"
                            onClick={handleLogout}
                        >
                            {t(`profileDrawer.logout`)}
                        </ProfileDrawerLink>

                    </LinksContainer>

                </ProfileContainer>
            </ProfileMainContainer>
        </Drawer>
    )

}