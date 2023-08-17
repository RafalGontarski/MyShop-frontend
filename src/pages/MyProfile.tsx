// MyProfile.tsx
import React from 'react';
import {CustomerCenterText, StyledHandIcon, Welcome} from "../components/drawer/Drawer.styles";
import {
    LineContainer, LineText,
    LinksContainer, ProfileContainer, ProfileDrawerLink, ProfileLine,
    ProfileWelcome,
    ProfileWelcomeText,
    UserData,
    UserDataContainer
} from "../components/drawer/ProfileDrawer.styles";
import {useTranslation} from "react-i18next";


type UserEditProps = {
    open: boolean;
    onClose: () => void;
    onLogoutClick: () => void;
    userId: number | null;
    userName: string | null;
    userSurname: string | null;
    userEmail: string | null;
    userRole: string[] | null;
};


const MyProfile: React.FC<UserEditProps> = ({ open, onClose, onLogoutClick, userId, userName,userSurname, userEmail, userRole }) => {
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
        <div>
            <h1>Witaj w edycji profilu</h1>
            <CustomerCenterText>Centrum Klienta</CustomerCenterText>
            <ProfileContainer>

                <Welcome>
                    <ProfileWelcomeText variant="h4" gutterBottom>
                        {t('loginDrawer.greeting')} {userName}
                    </ProfileWelcomeText>
                    <StyledHandIcon/>
                </Welcome>
                <Welcome>
                    <ProfileWelcomeText variant="h6" gutterBottom>
                        {rolesString}
                    </ProfileWelcomeText>
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
                            href="#"
                            underline="none"
                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        >
                            Dodaj Produkt
                        </ProfileDrawerLink>
                    )}
                    {userRole && (userRole.includes("ADMIN")) && (
                        <LineContainer>
                            <LineText>Panel Właściciela</LineText>
                        </LineContainer>
                    )}
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
                    {userRole && (userRole.includes("ADMIN")) && (

                        <ProfileDrawerLink
                            href="#"
                            underline="none"
                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        >
                            Dodaj Kategorię
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

            {/* Tutaj możesz dodać formularz edycji profilu i inne elementy */}
        </div>
    );
}

export default MyProfile;
