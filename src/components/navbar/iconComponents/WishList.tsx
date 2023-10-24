import React, {useEffect, useState} from "react";
import {
    Title,
    Container,
    MenuWrapper,
    WrapperMenuButton,
    MyProfileContainer,
    MyProfileLeftContainer,
} from "../../editPages/editPages.styles";

import {StyledMenuIcon} from "../Navbar.styles";
import {CategoryTitleContainer} from "../../editPages/categoriesEditPanel/CategoryEditPanel.styles";
import {StorageSubtitle, StorageTitle, WelcomeText} from "../../tools/drawer/Drawer.styles";
import {
    FormContainer,
    ProfileImageContainer,
    ProfilePageWelcome
} from "../../editPages/bookAdressEditPanel/AdressBookEditPanel.styles";

import NewStorage from "../../tools/button/NewStorage";
import {StorageContainer} from "./Basket.styles";
import DeleteStorage from "../../tools/button/DeleteStorage";


export const WishList: React.FC = () => {
    // Lokalny stan do przechowywania daty
    const [date, setDate] = useState<string>('');
    const [storages, setStorages] = useState<string[]>([]); // Lokalny stan przechowujący listę dat schowków
    // Lokalny stan dla aktualnie wybranego schowka
    const [selectedStorage, setSelectedStorage] = useState<string | null>(null);


    useEffect(() => {
        // Pobieranie daty z localStorage
        let storedDate = localStorage.getItem('wishListDate');

        // Sprawdzanie, czy data jest już zapisana
        if (!storedDate) {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}.${currentDate.getFullYear()}`;
            localStorage.setItem('wishListDate', formattedDate);
            setDate(formattedDate);
        } else {
            // Sprawdzanie, czy data zawiera myślniki
            if (storedDate.includes('-')) {
                // Konwersja na format DD.MM.YYYY
                const parts = storedDate.split('-');
                storedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
                localStorage.setItem('wishListDate', storedDate);
            }
            setDate(storedDate);
        }

        const storedStorages = localStorage.getItem('wishListStorages');
        if (storedStorages) {
            const parsedStorages: string[] = JSON.parse(storedStorages);
            setStorages(parsedStorages);

            // Jeśli nie ma wybranego schowka, ustaw pierwszy schowek jako wybrany
            if (selectedStorage === null && parsedStorages.length > 0) {
                setSelectedStorage("0");
            }
        }
    }, []);


    const addNewStorage = () => {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}.${currentDate.getFullYear()}`;
        setStorages(prevStorages => {
            const updatedStorages = [...prevStorages, formattedDate];
            localStorage.setItem('wishListStorages', JSON.stringify(updatedStorages));

            // Ustawienie nowo utworzonego schowka jako wybranego schowka
            setSelectedStorage(String(updatedStorages.length - 1));

            return updatedStorages;
        });
    };


    const handleStorageClick = (index: number) => {
        setSelectedStorage(index.toString());
    };


    const handleDeleteStorage = (): void => {
        const deletedStorageIndex: number = selectedStorage !== null ? parseInt(selectedStorage) : -1;

        if (deletedStorageIndex === -1) return;

        let updatedStorages: string[] = [...storages];
        updatedStorages.splice(deletedStorageIndex, 1);
        setStorages(updatedStorages);

        if (updatedStorages.length === 0) {
            setSelectedStorage(null);
        } else if (deletedStorageIndex === updatedStorages.length) {
            setSelectedStorage(String(updatedStorages.length - 1));
        } else {
            setSelectedStorage(String(deletedStorageIndex));
        }
    }



    return (
        <MyProfileContainer>
            <MyProfileLeftContainer>
                <NewStorage label={'Nowy'} onClick={addNewStorage}/>

                {storages.map((storageDate, index) => (
                    <StorageContainer key={storageDate} onClick={() => handleStorageClick(index)}>
                        <StorageTitle variant="h6">
                            Mój schowek z {storageDate}
                        </StorageTitle>
                        <StorageSubtitle variant="body2" style={{color: 'grey'}}>
                            brak produktów • Data ostatniej modyfikacji
                        </StorageSubtitle>
                        <StorageSubtitle variant="body2" style={{color: 'grey'}}>
                            {storageDate}
                        </StorageSubtitle>
                    </StorageContainer>
                ))}
            </MyProfileLeftContainer>

            <Container>
                <MenuWrapper>
                    <WrapperMenuButton
                        edge="start"
                        aria-label="menu"
                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        disableRipple
                        // onClick={handleIconClick}
                    >
                        <StyledMenuIcon />
                    </WrapperMenuButton>
                </MenuWrapper>

                {storages.length > 0 ? (
                    <>
                        <CategoryTitleContainer>
                            <Title style={{borderBottomColor: 'black'}}>
                                Mój schowek z {selectedStorage === null || selectedStorage === "initial" ? date : storages[parseInt(selectedStorage)]}
                            </Title>
                        </CategoryTitleContainer>

                        {storages.length > 0 && (
                            <DeleteStorage label={'Usuń Schowek'} onClick={handleDeleteStorage}/>
                        )}



                        <FormContainer>
                            <ProfileImageContainer style={{backgroundColor: '#f5f5f5'}}>
                                <ProfilePageWelcome style={{backgroundColor: '#f5f5f5'}}>
                                    <WelcomeText variant="h4" style={{color: 'lightgray', backgroundColor: '#f5f5f5'}}>
                                        NIE MASZ NIC DO OBEJRZENIA. PUSTO.
                                    </WelcomeText>
                                </ProfilePageWelcome>
                            </ProfileImageContainer>
                        </FormContainer>
                    </>
                ) : (
                    // Jeśli nie ma żadnych schowków
                    <>
                        <CategoryTitleContainer>
                            <Title style={{borderBottomColor: 'black'}}>
                                Nie masz żadnego schowka
                            </Title>
                        </CategoryTitleContainer>
                        <FormContainer>
                            <ProfileImageContainer style={{backgroundColor: '#f5f5f5'}}>
                                <ProfilePageWelcome style={{backgroundColor: '#f5f5f5'}}>
                                    <WelcomeText variant="h4" style={{color: 'lightgray', backgroundColor: '#f5f5f5'}}>
                                        NIE MASZ SCHOWKÓW. PUSTO.
                                    </WelcomeText>
                                </ProfilePageWelcome>
                            </ProfileImageContainer>
                        </FormContainer>
                    </>
                )}
            </Container>
        </MyProfileContainer>

    )
}