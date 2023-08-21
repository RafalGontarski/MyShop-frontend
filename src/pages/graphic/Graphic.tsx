import React, {ChangeEvent, useState} from "react";
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
    LineText,
    UserData,
    ProfileLine,
    LineContainer,
    LinksContainer,
    ProfileWelcome,
    UserDataContainer,
    ProfileDrawerLink,
} from "../../components/drawer/ProfileDrawer.styles";
import {FormContainer, ProfileImageContainer, ProfilePageWelcome} from "../adress/Adress.styles";
import {StyledTextField, WelcomeText} from "../../components/drawer/Drawer.styles";
import {CategoryFormInput, ValidateText} from "../categories/Category.styles";
import CustomButton from "../../components/button/Button";
import {CarouselImageApi} from "../../api/CarouselImageApi";

type GraphicProps = {
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

export const Graphics: React.FC<GraphicProps> = ({
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

    const { t } = useTranslation();
    const [selectedFile, setSelectedFile] = useState<Blob | null>(null);


    const handleAddImage = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            try {
                const response = await CarouselImageApi.addNewCarouselImg(formData);
                console.log(response.data);
                // Możesz dodać jakieś powiadomienie dla użytkownika, że grafika została dodana pomyślnie
            } catch (error) {
                console.error("Error uploading image:", error);
                // Możesz dodać jakieś powiadomienie o błędzie dla użytkownika
            }
        } else {
            console.warn("No file selected");
            // Możesz dodać jakieś powiadomienie dla użytkownika, żeby wybrał plik
        }
    }




    function handleLogout() {
        onLogoutClick(); // Wywołaj funkcję przekazaną jako prop
        onClose(); // Zamknij szufladę
    }

    function handleIconClick() {
        openLeftProfileDrawer();
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                const imagePreview = document.getElementById('imagePreview') as HTMLImageElement;
                imagePreview.src = reader.result as string;
            }
            reader.readAsDataURL(file);
        }
    }




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
                    <Title>Grafiki</Title>
                </TitleContainer>

                <FormContainer
                    // onSubmit={handleAddCategory}
                >

                    <ProfileImageContainer>
                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Dodaj nową grafikę karuzeli
                            </WelcomeText>
                            <WelcomeText variant="button" gutterBottom>
                                Tutaj możesz dodać grafikę
                            </WelcomeText>
                            {/*<StyledHandIcon/>*/}
                        </ProfilePageWelcome>


                        <CategoryFormInput>
                            <WelcomeText variant="caption" gutterBottom>
                                Wybierz grafikę, która będzie wyświetlana w karuzeli.
                            </WelcomeText>

                            {/* Podgląd obrazu */}
                            <div style={{ display: 'flex', justifyContent: 'center'}}>
                                <img
                                    id="imagePreview"
                                    // alt="Podgląd obrazu"
                                    style={{ width: '100%', maxHeight: '200px', marginBottom: '10px', borderRadius: '1rem' }}
                                />
                            </div>

                            {/* Input do przesyłania obrazów */}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ marginBottom: '10px' }}
                            />
                            {/*<StyledTextField*/}
                            {/*    size={"small"}*/}
                            {/*    label={'Nazwa Kategorii'}*/}
                            {/*    variant="outlined"*/}
                            {/*    fullWidth*/}
                            {/*    margin="normal"*/}
                            {/*    // value={localCategoryName}*/}
                            {/*    // onChange={handleCategoryNameChange}*/}
                            {/*    // onChange={(e) => onEmailChange(e)}*/}
                            {/*/>*/}
                            <ValidateText variant="caption" gutterBottom>
                                miejsce walidacji
                            </ValidateText>
                        </CategoryFormInput>

                        <CustomButton
                            label={"Dodaj do karuzeli"}
                            // type="submit"
                            // disabled={!isEmailValid || !isPasswordValid}
                            onClick={handleAddImage}
                        />
                    </ProfileImageContainer>
                </FormContainer>

            </Container>

            {/* Tutaj możesz dodać formularz edycji profilu i inne elementy */}
        </MyProfileContainer>

    )
}