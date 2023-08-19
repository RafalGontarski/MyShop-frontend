import React, {useState} from "react";
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
    AddressTitleContainer,
    EditLine,
    FormContainer,
    InputContainer,
    InputField,
    InputLabel,
    ProfileImage,
    ProfileImageContainer, ProfilePageWelcome,
    SubmitButton,
    UploadButton
} from "./Adress.styles";
import CustomButton from "../../components/button/Button";
import {
    HiddenStyledTextField,
    StyledHandIcon,
    StyledTextField,
    TogglePasswordVisibility,
    Welcome,
    WelcomeText
} from "../../components/drawer/Drawer.styles";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CountrySelector from "../../components/selectors/CountrySelect";


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

export const Address: React.FC<EditProfileProps> = ({
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

    const [showActualPassword, setShowActualShowPassword] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);
    const [localProfileImage, setLocalProfileImage] = useState(''); // domyślny URL zdjęcia profilowego
    const [localEmail, setLocalEmail] = useState('');
    const [localPassword, setLocalPassword] = useState('');
    const [localRepeatPassword, setLocalRepeatPassword] = useState('');
    const [localName, setLocalName] = useState('');
    const [localSurname, setLocalSurname] = useState('');
    const [localAddress, setLocalAddress] = useState('');
    const [country, setCountry] = useState('');
    const { t } = useTranslation();

    function handleIconClick() {
        openLeftProfileDrawer();
    }

    function handleLogout() {
        onLogoutClick(); // Wywołaj funkcję przekazaną jako prop
        onClose(); // Zamknij szufladę
    }



    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalEmail(e.target.value);
    }

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

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setLocalProfileImage(reader.result as string);

        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setLocalProfileImage('');
        }
    }


    const onCountryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setCountry(event.target.value);
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

    const handleMouseDownRepeatPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowRepeatPassword(true);
    };

    const handleMouseUpRepeatPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowRepeatPassword(false);
    };

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
                <AddressTitleContainer>
                    <Title>Książka adresowa</Title>
                    {/*<CustomButton*/}
                    {/*    label={"Dodaj adres"}*/}
                    {/*    // disabled={!isEmailValid || !isPasswordValid}*/}
                    {/*    // onClick={combinedHandleLogin}*/}
                    {/*/>*/}
                </AddressTitleContainer>

                <FormContainer onSubmit={handleSubmit}>

                    <ProfileImageContainer>
                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Zmień adres faktury
                            </WelcomeText>
                            {/*<StyledHandIcon/>*/}
                        </ProfilePageWelcome>

                        <StyledTextField
                            size={"small"}
                            label={t('registrationDrawer.firstName')}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={localEmail}
                            onChange={handleEmailChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <StyledTextField
                            size={"small"}
                            label={t('registrationDrawer.lastName')}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={localEmail}
                            onChange={handleEmailChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <StyledTextField
                            size={"small"}
                            label={t('registrationDrawer.streetAndNumber')}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={localEmail}
                            onChange={handleEmailChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <StyledTextField
                            size={"small"}
                            label={t('registrationDrawer.postalCode')}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={localEmail}
                            onChange={handleEmailChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <StyledTextField
                            size={"small"}
                            label={t('registrationDrawer.city')}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={localEmail}
                            onChange={handleEmailChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <CountrySelector onChange={onCountryChange}/>


                        <CustomButton
                            label={"Zapisz"}
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