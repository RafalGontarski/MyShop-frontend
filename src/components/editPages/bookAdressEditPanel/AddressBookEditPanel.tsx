import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {StyledMenuIcon} from "../../navbar/Navbar.styles";

import {
    Title,
    Container,
    MenuWrapper,
    TitleContainer,
    WrapperMenuButton,
    MyProfileContainer,
    MyProfileCenterText,
    MyProfileLeftContainer,
} from "../editPages.styles";

import {
    UserData,
    LineText,
    ProfileLine,
    LineContainer,
    LinksContainer,
    ProfileWelcome,
    UserDataContainer,
    ProfileDrawerLink,
} from "../../tools/drawer/ProfileDrawer.styles";
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
} from "./AdressBookEditPanel.styles";
import CustomButton from "../../tools/button/Button";
import {
    HiddenStyledTextField,
    StyledHandIcon,
    StyledTextField,
    TogglePasswordVisibility,
    Welcome,
    WelcomeText
} from "../../tools/drawer/Drawer.styles";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CountrySelector from "../../tools/selectors/CountrySelect";
import {AddressBookUpdateRequest} from "../../../api/user/AddressBookUpdateRequest";


type AddressProps = {
    open: boolean;
    onClose: () => void;
    onLogoutClick: () => void;
    openLeftProfileDrawer: () => void;
    updateAddressBook: (
        userId: number,
        newFirstName: string,
        newLastName: string,
        newAddress: string,
        newPostalCode: string,
        newCity: string,
        newCountry: string
    ) => Promise<void>;
    userId: number | null;
    userName: string | null;
    userSurname: string | null;
    userAddress: string | null;
    userPostalCode: string | null;
    userCity: string | null;
    userCountry: string | null;
    userEmail: string | null;
    userRole: string[] | null;
};

export const AddressBookEditPanel: React.FC<AddressProps> = ({
                        open,
                        onClose,
                        onLogoutClick,
                        openLeftProfileDrawer,
                        updateAddressBook,
                        userId,
                        userName,
                        userSurname,
                        userAddress,
                        userPostalCode,
                        userCity,
                        userCountry,
                        userEmail,
                        userRole
                    }) => {



    const [localId, setLocalId] = useState<number>(userId || 0);
    const [localFirstName, setLocalFirstName] = useState(userName || '');
    const [localLastName, setLocalLastName] = useState(userSurname || '');
    const [localAddress, setLocalAddress] = useState(userAddress || '');
    const [localPostalCode, setLocalPostalCode] = useState(userPostalCode || '');
    const [localCity, setLocalCity] = useState(userCity || '');
    const [localCountry, setLocalCountry] = useState(userCountry || '');
    const { t } = useTranslation();

    function handleIconClick() {
        openLeftProfileDrawer();
    }

    function handleLogout() {
        onLogoutClick(); // Wywołaj funkcję przekazaną jako prop
        onClose(); // Zamknij szufladę
    }



    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalFirstName(e.target.value);
    }

    const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalLastName(e.target.value);
    }

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalAddress(e.target.value);
    }

    const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalPostalCode(e.target.value);
    }

    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalCity(e.target.value);
    }


    const onCountryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLocalCountry(event.target.value);
    }


    const handleUpdateAddressBook = async () => {
        if (localId &&
            localFirstName &&
            localLastName &&
            localAddress &&
            localPostalCode &&
            localCity &&
            localCountry) {

            await updateAddressBook(
                localId,
                localFirstName,
                localLastName,
                localAddress,
                localPostalCode,
                localCity,
                localCountry);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Tutaj możesz przesłać dane do serwera lub przetworzyć je w inny sposób
        console.log({
            localName: localFirstName,
            localSurname: localLastName,
            localAddress,
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
                            value={localFirstName}
                            onChange={handleNameChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <StyledTextField
                            size={"small"}
                            label={t('registrationDrawer.lastName')}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={localLastName}
                            onChange={handleSurnameChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <StyledTextField
                            size={"small"}
                            label={t('registrationDrawer.streetAndNumber')}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={localAddress}
                            onChange={handleAddressChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <StyledTextField
                            size={"small"}
                            label={t('registrationDrawer.postalCode')}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={localPostalCode}
                            onChange={handlePostalCodeChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <StyledTextField
                            size={"small"}
                            label={t('registrationDrawer.city')}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={localCity}
                            onChange={handleCityChange}
                            // onChange={(e) => onEmailChange(e)}
                        />

                        <CountrySelector onChange={onCountryChange}/>


                        <CustomButton
                            label={"Zapisz"}
                            // disabled={!isEmailValid || !isPasswordValid}
                            onClick={handleUpdateAddressBook}
                        />

                    </ProfileImageContainer>


                </FormContainer>
            </Container>

            {/* Tutaj możesz dodać formularz edycji profilu i inne elementy */}
        </MyProfileContainer>

    )
}