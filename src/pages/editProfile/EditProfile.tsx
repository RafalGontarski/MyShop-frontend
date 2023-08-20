import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {StyledMenuIcon} from "../../components/navbar/navbar.styles";

import {
    Title,
    Container,
    MenuWrapper,
    TitleContainer,
    WrapperMenuButton,
    MyProfileContainer,
    MyProfileCenterText,
    MyProfileLeftContainer,
} from "../myprofile.styles";

import {
    UserData,
    LineText,
    ProfileLine,
    LineContainer,
    LinksContainer,
    ProfileWelcome,
    UserDataContainer,
    ProfileDrawerLink,
} from "../../components/drawer/ProfileDrawer.styles";
import {
    EditLine,
    FormContainer,
    ProfilePageWelcome,
    ProfileImageContainer,
} from "./EditProfile.styles";

import {
    WelcomeText,
    StyledTextField,
    HiddenStyledTextField,
    TogglePasswordVisibility,
} from "../../components/drawer/Drawer.styles";


import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import CustomButton from "../../components/button/Button";
import LinkButton from "../../components/button/LinkButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";




type EditProfileProps = {
    open: boolean;
    onClose: () => void;
    onLogoutClick: () => void;
    openLeftProfileDrawer: () => void;
    updateUserEmail: (userId: number, newEmail: string) => Promise<void>;
    updatePassword: (userId: number, newPassword: string) => Promise<void>;
    updateFirstName: (userId: number, newFirstName: string) => Promise<void>;
    userId: number | null;
    userName: string | null;
    userSurname: string | null;
    userEmail: string | null;
    userPassword: string | null;
    userRole: string[] | null;
};

export const EditProfile: React.FC<EditProfileProps> = ({
                        open,
                        onClose,
                        onLogoutClick,
                        openLeftProfileDrawer,
                        updateUserEmail,
                        updatePassword,
                        updateFirstName,
                        userId,
                        userName,
                        userSurname,
                        userEmail,
                        userPassword,
                        userRole
                    }) => {

    console.log(userName);
    console.log(userId);

    const [showActualPassword, setShowActualShowPassword] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);
    const [localProfileImage, setLocalProfileImage] = useState('');
    const [localEmail, setLocalEmail] = useState(userEmail || '');
    const [localPassword, setLocalPassword] = useState<string>(userPassword || "");
    const [localRepeatPassword, setLocalRepeatPassword] = useState('');
    const [localName, setLocalName] = useState(userName || '');
    const [localId, setLocalId] = useState<number>(userId || 0);
    const [localSurname, setLocalSurname] = useState('');
    const [localAddress, setLocalAddress] = useState('');



    // update user

    const [newEmail, setNewEmail] = useState<string>("");

    // translator
    const { t } = useTranslation();

    function handleIconClick() {
        openLeftProfileDrawer();
    }
    function handleLogout() {
        onLogoutClick(); // Wywołaj funkcję przekazaną jako prop
        onClose(); // Zamknij szufladę
    }
    const handleNewEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewEmail(e.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalEmail(event.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalPassword(e.target.value);
    }
    const onShowActualPassword = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        // setActualShowPassword(event.target.value);
    };
    const onPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLocalPassword(event.target.value);
    };
    const onRepeatPasswordChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLocalRepeatPassword(e.target.value);
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalName(e.target.value);
    }
    const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalSurname(e.target.value);
    }
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalAddress(e.target.value);
    }

    const handleMouseDownRepeatActualPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowActualShowPassword(true);
    };
    const handleMouseUpRepeatActualPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowActualShowPassword(false);
    };
    const handleMouseDownPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword(true);
    };
    const handleMouseUpPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword(false);
    };

    const handleMouseDownNewPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowNewPassword(true);
    };
    const handleMouseUpNewPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowNewPassword(false);
    };
    const handleMouseDownRepeatPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowRepeatPassword(true);
    };
    const handleMouseUpRepeatPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowRepeatPassword(false);
    };

    const handleUpdateEmail = async () => {
        if (localPassword && localEmail && localId) {
            await updateUserEmail(localId, localEmail);
            // await updatePassword(localId, localPassword);
            // Możesz dodać tu dodatkowe akcje, np. wyświetlenie komunikatu o powodzeniu
        }
    };

    const handleUpdatePassword = async () => {
        if (localPassword && localId) {
            await updatePassword(localId, localPassword);
            // Możesz dodać tu dodatkowe akcje, np. wyświetlenie komunikatu o powodzeniu
        }
    };

    const handleUpdateFirstName = async () => {
        console.log(localName);
        console.log(localId);
        if (localName && localId) {
            console.log(localId);
            await updateFirstName(localId, localName);
        }
    }




    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Tutaj możesz przesłać dane do serwera lub przetworzyć je w inny sposób
        console.log({
            localEmail,
            localPassword,
            localName,
            localSurname,
            localAddress,
            localProfileImage
        });
    }



// ...



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
                    <Title>Edytuj konto klienta</Title>
                </TitleContainer>

                <FormContainer onSubmit={handleSubmit}>

                    <ProfileImageContainer>

                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Zmień e-mail
                            </WelcomeText>
                            <WelcomeText variant="subtitle1" gutterBottom>
                                Tutaj możesz zmienić e-mail
                            </WelcomeText>
                            {/*<StyledHandIcon/>*/}
                        </ProfilePageWelcome>

                        <HiddenStyledTextField
                            size={"small"}
                            label={'Dotychczasowe hasło'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type={showPassword ? 'text' : 'password'}
                            value={userPassword}
                            onChange={handlePasswordChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <TogglePasswordVisibility
                                            aria-label="toggle password visibility"
                                            onMouseDown={handleMouseDownPassword} // Pokaż hasło
                                            onMouseUp={handleMouseUpPassword} // Ukryj hasło
                                            disableRipple
                                        >
                                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </TogglePasswordVisibility>
                                    </InputAdornment>

                                ),
                            }}
                        />

                        <StyledTextField
                            size={"small"}
                            label={t('loginDrawer.email')}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={localEmail}
                            onChange={handleEmailChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <CustomButton
                            label={"Zapisz e-mail"}
                            // disabled={!isEmailValid || !isPasswordValid}
                            onClick={handleUpdateEmail}
                        />

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

                        <HiddenStyledTextField
                            size={"small"}
                            label={'Dotychczasowe hasło'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type={showActualPassword ? 'text' : 'password'}
                            value={userPassword}
                            onChange={(e) => onShowActualPassword(e)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <TogglePasswordVisibility
                                            aria-label="toggle password visibility"
                                            onMouseDown={handleMouseDownRepeatActualPassword} // Pokaż hasło
                                            onMouseUp={handleMouseUpRepeatActualPassword} // Ukryj hasło
                                            disableRipple
                                        >
                                            {showActualPassword ? <Visibility/> : <VisibilityOff/>}
                                        </TogglePasswordVisibility>
                                    </InputAdornment>

                                ),
                            }}
                        />

                        <HiddenStyledTextField
                            size={"small"}
                            label={'Nowe hasło'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type={showNewPassword ? 'text' : 'password'}
                            onChange={(e) => onPasswordChange(e)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <TogglePasswordVisibility
                                            aria-label="toggle password visibility"
                                            onMouseDown={handleMouseDownNewPassword} // Pokaż hasło
                                            onMouseUp={handleMouseUpNewPassword} // Ukryj hasło
                                            disableRipple
                                        >
                                            {showNewPassword ? <Visibility/> : <VisibilityOff/>}
                                        </TogglePasswordVisibility>
                                    </InputAdornment>

                                ),
                            }}
                        />

                        <HiddenStyledTextField
                            size={"small"}
                            label={'Powtórz nowe hasło'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type={showRepeatPassword ? 'text' : 'password'}
                            onChange={(e) => onRepeatPasswordChange(e)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <TogglePasswordVisibility
                                            aria-label="toggle password visibility"
                                            onMouseDown={handleMouseDownRepeatPassword} // Pokaż hasło
                                            onMouseUp={handleMouseUpRepeatPassword} // Ukryj hasło
                                            disableRipple
                                        >
                                            {showRepeatPassword ? <Visibility/> : <VisibilityOff/>}
                                        </TogglePasswordVisibility>
                                    </InputAdornment>

                                ),
                            }}
                        />

                        <CustomButton
                            label={"Zapisz hasło"}
                            // disabled={!isEmailValid || !isPasswordValid}
                            onClick={handleUpdatePassword}
                        />

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

                        <StyledTextField
                            size={"small"}
                            label={'Imię'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={localName}
                            onChange={handleNameChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <CustomButton
                            label={"Zapisz nazwę"}
                            // disabled={!isEmailValid || !isPasswordValid}
                            onClick={handleUpdateFirstName}
                        />

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