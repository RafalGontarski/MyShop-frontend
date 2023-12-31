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
import {CategoryFormInput, CategoryTitleContainer, ValidateText} from "./CategoryEditPanel.styles";
import {FormContainer, ProfileImageContainer, ProfilePageWelcome} from "../bookAdressEditPanel/AdressBookEditPanel.styles";
import {StyledTextField, WelcomeText} from "../../tools/drawer/Drawer.styles";
import CountrySelector from "../../tools/selectors/CountrySelect";
import CustomButton from "../../tools/button/Button";
import {EditLine} from "../profileEditPanel/ProfileEditPanel.styles";
import CategoryType from "../../../models/types/CategoryType";
import {CategoryApi} from "../../../api/CategoryApi";


type EditCategoriesProps = {
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

export const CategoriesEditPanel: React.FC<EditCategoriesProps> = ({
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

    const [localCategoryName, setLocalCategoryName] = useState<string>("");
    const {t} = useTranslation();

    const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalCategoryName(e.target.value);
    };
    function handleLogout() {
        onLogoutClick(); // Wywołaj funkcję przekazaną jako prop
        onClose(); // Zamknij szufladę
    }
    function handleIconClick() {
        openLeftProfileDrawer();
    }
    const handleAddCategory = async () => {
        // e.preventDefault();

        // Tutaj możesz przesłać dane do serwera:
        try {
            const newCategory: CategoryType = {
                name: localCategoryName,
                // ... inne pola kategorii, jeśli są potrzebne
            };
            await CategoryApi.addCategory(newCategory);  // Zakładam, że masz taką funkcję w API
            console.log("Kategoria dodana pomyślnie!");
            setLocalCategoryName("");  // Opcjonalnie: wyczyść pole formularza po dodaniu kategorii
        } catch (error) {
            console.error("Błąd podczas dodawania kategorii:", error);
        }
        window.location.href = '/';
    };


    return (
        <MyProfileContainer>


            <MyProfileLeftContainer>

                <UserDataContainer>
                    <MyProfileCenterText>{t(`profileDrawer.center`)}</MyProfileCenterText>
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
                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        onClick={handleLogout}
                    >
                        {t(`profileDrawer.logout`)}
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
                <CategoryTitleContainer>
                    <Title>Kategorie</Title>
                </CategoryTitleContainer>

                <FormContainer
                    onSubmit={handleAddCategory}
                >

                    <ProfileImageContainer>
                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Dodaj nową kategorię sklepu
                            </WelcomeText>
                            <WelcomeText variant="button" gutterBottom>
                                Tutaj możesz dodać kategorię
                            </WelcomeText>
                            {/*<StyledHandIcon/>*/}
                        </ProfilePageWelcome>


                        <CategoryFormInput>
                            <WelcomeText variant="caption" gutterBottom>
                                Nazwa kategorii, która będzie wyświetlana użytkownikom.
                            </WelcomeText>
                            <StyledTextField
                                size={"small"}
                                label={'Nazwa Kategorii'}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={localCategoryName}
                                onChange={handleCategoryNameChange}
                                // onChange={(e) => onEmailChange(e)}
                            />
                            <ValidateText variant="caption" gutterBottom>
                                miejsce walidacji
                            </ValidateText>
                        </CategoryFormInput>


                        <CategoryFormInput>
                            <WelcomeText variant="caption" gutterBottom>
                                Krótki opis kategorii, który może pomóc użytkownikom zrozumieć, jakie produkty znajdują się w danej kategorii.
                            </WelcomeText>
                            <StyledTextField
                                size={"small"}
                                label={'Krótki opis kategorii'}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                // value={localFirstName}
                                // onChange={handleNameChange}
                                // onChange={(e) => onEmailChange(e)}
                            />
                            <ValidateText variant="caption" gutterBottom>
                                miejsce walidacji
                            </ValidateText>
                        </CategoryFormInput>

                        <CategoryFormInput>
                            <WelcomeText variant="caption" gutterBottom>
                                Dla sklepów, które mają hierarchię kategorii (np. "Elektronika" &rarr; "Telewizory").
                            </WelcomeText>
                            <StyledTextField
                                size={"small"}
                                label={'Kategoria nadrzędna'}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                // value={localFirstName}
                                // onChange={handleNameChange}
                                // onChange={(e) => onEmailChange(e)}
                            />
                            <ValidateText variant="caption" gutterBottom>
                                miejsce walidacji
                            </ValidateText>
                        </CategoryFormInput>

                        <CategoryFormInput>
                            <WelcomeText variant="caption" gutterBottom>
                                Graficzna reprezentacja kategorii.
                            </WelcomeText>
                            <StyledTextField
                                size={"small"}
                                label={'Ikona kategorii'}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                // value={localFirstName}
                                // onChange={handleNameChange}
                                // onChange={(e) => onEmailChange(e)}
                            />
                            <StyledTextField
                                size={"small"}
                                label={'Grafika kategorii'}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                // value={localFirstName}
                                // onChange={handleNameChange}
                                // onChange={(e) => onEmailChange(e)}
                            />
                            <ValidateText variant="caption" gutterBottom>
                                miejsce walidacji
                            </ValidateText>
                        </CategoryFormInput>

                        <CategoryFormInput>
                            <WelcomeText variant="caption" gutterBottom>
                                Unikalny fragment URL dla kategorii, który może być używany do nawigacji (np. "elektronika", "telewizory").
                            </WelcomeText>
                            <StyledTextField
                                size={"small"}
                                label={'Slug/URL'}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                // value={localFirstName}
                                // onChange={handleNameChange}
                                // onChange={(e) => onEmailChange(e)}
                            />
                            <ValidateText variant="caption" gutterBottom>
                                miejsce walidacji
                            </ValidateText>
                        </CategoryFormInput>

                        <CategoryFormInput>
                            <WelcomeText variant="caption" gutterBottom>
                                Jeśli chcesz kontrolować kolejność, w jakiej kategorie są wyświetlane (np. w menu).
                            </WelcomeText>
                            <StyledTextField
                                size={"small"}
                                label={'Kolejność wyświetlania'}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                // value={localFirstName}
                                // onChange={handleNameChange}
                                // onChange={(e) => onEmailChange(e)}
                            />
                            <ValidateText variant="caption" gutterBottom>
                                miejsce walidacji
                            </ValidateText>
                        </CategoryFormInput>

                        <CustomButton
                            label={"Dodaj Kategorię"}
                            // type="submit"
                            // disabled={!isEmailValid || !isPasswordValid}
                            onClick={handleAddCategory}
                        />


                        <EditLine/>

                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Edytuj kategorię
                            </WelcomeText>
                            {/*<StyledHandIcon/>*/}
                        </ProfilePageWelcome>

                        <StyledTextField
                            size={"small"}
                            label={'Nazwa Kategorii'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            // value={localFirstName}
                            // onChange={handleNameChange}
                            // onChange={(e) => onEmailChange(e)}
                        />


                        <CustomButton
                            label={"Zapisz zmiany"}
                            // disabled={!isEmailValid || !isPasswordValid}
                            // onClick={handleUpdateAddressBook}
                        />

                        <EditLine/>

                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                Usuń kategorię
                            </WelcomeText>
                            {/*<StyledHandIcon/>*/}
                        </ProfilePageWelcome>

                        <StyledTextField
                            size={"small"}
                            label={'Nazwa Kategorii'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            // value={localFirstName}
                            // onChange={handleNameChange}
                            // onChange={(e) => onEmailChange(e)}
                        />


                        <CustomButton
                            label={"Usuń"}
                            // disabled={!isEmailValid || !isPasswordValid}
                            // onClick={handleUpdateAddressBook}
                        />

                    </ProfileImageContainer>


                </FormContainer>
            </Container>

            {/* Tutaj możesz dodać formularz edycji profilu i inne elementy */}
        </MyProfileContainer>

    )
}