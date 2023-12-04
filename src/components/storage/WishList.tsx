import React, {useContext, useEffect, useState} from "react";

import {StorageType} from "../../models/types/StorageType";
import DevImg from '../../resources/categoriesIcon/Akcesoria.png';
import {StorageList} from "./StorageList";
import DeleteStorage from "../tools/button/DeleteStorage";
import AddAllProductsToBasket from "../tools/button/AddAllProductsToBasket";

import {WelcomeText} from "../tools/drawer/Drawer.styles";
import { UserContext } from "../../models/context/UserContexts";
import {StorageContext} from "../../models/context/StorageContext";
import {CategoryTitleContainer} from "../editPages/categoriesEditPanel/CategoryEditPanel.styles";

import {
    Title,
    Container,
    MenuWrapper,
    MyProfileContainer,
    MyProfileLeftContainer,
} from "../editPages/editPages.styles";

import {
    FormContainer,
    ProfilePageWelcome,
    ProfileImageContainer,
} from "../editPages/bookAdressEditPanel/AdressBookEditPanel.styles";

import {
    Sum,
    OtherLink,
    SumAndBtn,
    ProductBox,
    OtherLinks,
    ProductImg,
    ProductName,
    ProductLink,
    SumAndPrice,
    ProductPrice,
    SumStoragePrice,
    ProductPriceLink,
    ProductContainer,
    ProductActionsDiv,
    ProductDescription,
    StyledProductRating,
    ProductManufacturer,
    ProductAvailability,
    ProductInformationDiv,
    ProductInformationLink,
    StorageProductImageDiv,
    StyledDeleteOutlineIcon,
    StyledStorageFilterIcon,
    StorageWrapperMenuButton,
    StyledFilterWrapperTitle,
    StyledAddShoppingCartIcon,
    ProductPriceAndActionsDiv,
    ProductManufacturerAndName,
} from "./WishList.styles";


type StorageProps = {
    openStorageDrawer: () => void;
}

export const WishList: React.FC<StorageProps> = ({openStorageDrawer}) => {

    // Local state to store the date
    const [date] = useState<string>(new Date().toLocaleDateString());

    const {
        storages,
        storageProducts,
        setStorages,
        setStorageProducts ,
        addNewStorage,
        handleStorageClick,
        selectedStorage,
        setSelectedStorage} = useContext(StorageContext);



    const { currentUser } = useContext(UserContext);
    const userId = currentUser?.id;
    console.log('User Id from WishList: ', userId);

    const storagesKey = `storages_${userId}`;
    // const favoritesKey = `favorites_${userId}`;

    // const storagesKey = `storages_${userId}`;
    const storageProductsKey = `storageProducts_${userId}`;

    const selectedStorageIndex = selectedStorage ? parseInt(selectedStorage) : -1;
    const productsToShow = selectedStorageIndex >= 0 && storageProducts[selectedStorageIndex] ? storageProducts[selectedStorageIndex] : [];

    const totalSum = productsToShow.reduce((acc, product) => acc + product.price, 0);


    useEffect(() => {
        if (currentUser?.id) {
            console.log('current user from useEffect in WishList: ', currentUser.id);
            // Klucze do przechowywania danych użytkownika
            const storagesKey = `storages_${currentUser.id}`;
            const storageProductsKey = `storageProducts_${currentUser.id}`;

            // Ładowanie schowków użytkownika
            const storedStorages = localStorage.getItem(storagesKey);
            if (storedStorages) {
                const parsedStorages = JSON.parse(storedStorages);
                setStorages(parsedStorages);
                // Ustaw pierwszy schowek jako domyślnie wybrany, jeśli istnieje
                if (parsedStorages.length > 0) {
                    setSelectedStorage("0");
                }
            }

            // Ładowanie produktów schowków
            const storedStorageProducts = localStorage.getItem(storageProductsKey);
            if (storedStorageProducts) {
                setStorageProducts(JSON.parse(storedStorageProducts));
            }
        }
    }, [currentUser, setStorages, setStorageProducts, setSelectedStorage]);




    const handleDeleteStorage = (): void => {
        const deletedStorageIndex: number = selectedStorage !== null ? parseInt(selectedStorage) : -1;

        if (deletedStorageIndex === -1) return;

        const updatedStorages: StorageType[] = [...storages];
        updatedStorages.splice(deletedStorageIndex, 1);
        setStorages(updatedStorages);
        localStorage.setItem(storagesKey, JSON.stringify(updatedStorages));

        const updatedStorageProducts = [...storageProducts];
        updatedStorageProducts.splice(deletedStorageIndex, 1);
        setStorageProducts(updatedStorageProducts);
        localStorage.setItem(storageProductsKey, JSON.stringify(updatedStorageProducts));

        if (updatedStorages.length === 0) {
            setSelectedStorage(null);
        } else if (deletedStorageIndex === updatedStorages.length) {
            setSelectedStorage(String(updatedStorages.length - 1));
        } else {
            setSelectedStorage(String(deletedStorageIndex));
        }
    };

    const removeFromFavorites = (productId: number): void => {
        if (selectedStorageIndex !== null) {
            const updatedStorageProducts = [...storageProducts];
            updatedStorageProducts[selectedStorageIndex] = updatedStorageProducts[selectedStorageIndex].filter(product => product.id !== productId);
            setStorageProducts(updatedStorageProducts);
            localStorage.setItem(storageProductsKey, JSON.stringify(updatedStorageProducts));
        }
    };



    function handleIconClick() {
        openStorageDrawer();
    }


    return (
        <MyProfileContainer>
            <MyProfileLeftContainer>
                <StorageList
                    storages={storages}
                    onStorageClick={handleStorageClick}
                    addNewStorage={addNewStorage}
                    handleStorageClick={handleStorageClick}
                />
            </MyProfileLeftContainer>

            <Container>
                <MenuWrapper>
                    <StorageWrapperMenuButton
                        edge="start"
                        aria-label="menu"
                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        disableRipple
                        onClick={handleIconClick}
                    >
                        <StyledStorageFilterIcon />
                        <StyledFilterWrapperTitle>Lista życzeń</StyledFilterWrapperTitle>

                    </StorageWrapperMenuButton>
                </MenuWrapper>

                {storages.length > 0 ? (
                    <>
                        <CategoryTitleContainer>
                            <Title style={{borderBottomColor: 'black'}}>
                                Mój schowek z {(selectedStorage && storages[parseInt(selectedStorage)] && storages.length > 0) ? storages[parseInt(selectedStorage)].date : date}
                            </Title>
                        </CategoryTitleContainer>

                        {storages.length > 0 && (
                            <DeleteStorage label={'Usuń Schowek'} onClick={handleDeleteStorage}/>
                        )}

                        <FormContainer>
                            {
                                productsToShow.length === 0 ? (
                                    <ProfileImageContainer >
                                        <ProfilePageWelcome>
                                            <WelcomeText variant="h4" style={{color: 'lightgray', backgroundColor: '#f5f5f5'}}>
                                                NIE MASZ NIC DO OBEJRZENIA. PUSTO.
                                            </WelcomeText>
                                        </ProfilePageWelcome>
                                    </ProfileImageContainer>
                                ) : (
                                    productsToShow.map(favProduct => (
                                        <ProductContainer key={favProduct.id}>
                                            <ProductBox>
                                                <StorageProductImageDiv>
                                                    <ProductLink
                                                        to={`/categories/${favProduct.secondSubCategory?.subCategory.category.name || 'defaultCategory'}/${favProduct.secondSubCategory?.subCategory.name || 'defaultSub'}/${favProduct.secondSubCategory?.name || 'defaultSecondSub'}/${favProduct.name}`}
                                                    >
                                                        <ProductImg src={DevImg} alt="test" width={120} height={120}/>
                                                    </ProductLink>
                                                </StorageProductImageDiv>

                                                <ProductInformationLink
                                                    to={`/categories/${favProduct.secondSubCategory?.subCategory.category.name || 'defaultCategory'}/${favProduct.secondSubCategory?.subCategory.name || 'defaultSub'}/${favProduct.secondSubCategory?.name || 'defaultSecondSub'}/${favProduct.name}`}
                                                >
                                                    <ProductInformationDiv>
                                                        <ProductManufacturerAndName>
                                                            <ProductManufacturer>{favProduct.producent}</ProductManufacturer>
                                                            <ProductName>{favProduct.name}</ProductName>
                                                        </ProductManufacturerAndName>
                                                        <StyledProductRating size={"small"} name="customized-color" defaultValue={2}/>
                                                        <ProductDescription>{favProduct.description}</ProductDescription>
                                                        <ProductAvailability>Dostępny w magazynie</ProductAvailability>
                                                    </ProductInformationDiv>
                                                </ProductInformationLink>

                                                <ProductPriceAndActionsDiv>
                                                    <ProductPriceLink
                                                        to={`/categories/${favProduct.secondSubCategory?.subCategory.category.name || 'defaultCategory'}/${favProduct.secondSubCategory?.subCategory.name || 'defaultSub'}/${favProduct.secondSubCategory?.name || 'defaultSecondSub'}/${favProduct.name}`}
                                                    >
                                                        <ProductPrice>{favProduct.price} zł</ProductPrice>
                                                    </ProductPriceLink>
                                                    <ProductActionsDiv>
                                                        <StyledDeleteOutlineIcon onClick={() => removeFromFavorites(favProduct.id)}/>
                                                        <StyledAddShoppingCartIcon />
                                                    </ProductActionsDiv>
                                                </ProductPriceAndActionsDiv>
                                            </ProductBox>
                                        </ProductContainer>
                                    ))
                                )
                            }
                        </FormContainer>
                        {
                            storages.length > 0 && productsToShow.length > 0 && (
                                <>
                                    <SumAndBtn>
                                        <SumAndPrice>
                                            <Sum>Suma </Sum>
                                            <SumStoragePrice>{totalSum.toFixed(0)} zł</SumStoragePrice>
                                        </SumAndPrice>
                                        <AddAllProductsToBasket  label={'włożyć wszystko do koszyka'}/>
                                    </SumAndBtn>

                                    <OtherLinks>
                                        <OtherLink>Darmowa wysyłka od 300 zł</OtherLink>
                                        <OtherLink>Ceny zawierają podatek VAT</OtherLink>
                                    </OtherLinks>
                                </>
                            )
                        }
                    </>
                ) : (
                    // If there are no storage compartments
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