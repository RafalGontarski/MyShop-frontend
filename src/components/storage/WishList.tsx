import React, {useEffect, useState} from "react";
import {
    Title,
    Container,
    MenuWrapper,
    MyProfileContainer,
    MyProfileLeftContainer,
} from "../editPages/editPages.styles";

import {CategoryTitleContainer} from "../editPages/categoriesEditPanel/CategoryEditPanel.styles";
import {WelcomeText} from "../tools/drawer/Drawer.styles";
import {
    FormContainer,
    ProfileImageContainer,
    ProfilePageWelcome
} from "../editPages/bookAdressEditPanel/AdressBookEditPanel.styles";

import {
    ProductBox,
    ProductContainer,
    ProductImg,
    ProductLink,
    ProductInformationDiv,
    ProductManufacturerAndName,
    ProductManufacturer,
    StorageProductImageDiv,
    ProductName,
    ProductDescription,
    ProductAvailability,
    ProductActionsDiv,
    ProductPrice,
    ProductPriceAndActionsDiv,
    StyledProductRating,
    StyledDeleteOutlineIcon,
    StyledAddShoppingCartIcon,
    ProductInformationLink,
    ProductPriceLink,
    StyledStorageFilterIcon,
    StorageWrapperMenuButton,
    StyledFilterWrapperTitle, SumAndBtn, OtherLinks, OtherLink, Sum
} from "./WishList.styles";
import DeleteStorage from "../tools/button/DeleteStorage";

import DevImg from '../../resources/categoriesIcon/Akcesoria.png';
import {ProductType} from "../../models/types/ProductType";
import {StorageList} from "./StorageList";
import {useStorage} from "../../hooks/UseStorage";
import {StorageType} from "../../models/types/StorageType";
import Typography from "@mui/material/Typography";
import AddAllProductsToBasket from "../tools/button/AddAllProductsToBasket";


type StorageProps = {
    openStorageDrawer: () => void;
}

export const WishList: React.FC<StorageProps> = ({openStorageDrawer}) => {

    // Local state to store the date
    const [date] = useState<string>(new Date().toLocaleDateString());
    const [
        favorites,
        setFavorites] = useState<ProductType[]>([]);
    const {
        storages,
        storageProducts,
        setStorages,
        setStorageProducts ,
        addNewStorage,
        handleStorageClick,
        selectedStorage,
        setSelectedStorage} = useStorage();



    useEffect(() => {
        const storedStorages = localStorage.getItem('wishListStorages');
        if (storedStorages) {
            const parsedStorages: StorageType[] = JSON.parse(storedStorages);
            setStorages(parsedStorages);

            // If there is no clipboard selected, set the first clipboard as selected
            if (selectedStorage === null && parsedStorages.length > 0) {
                setSelectedStorage("0");
            }
        }
        // Additionally, we can upload products to stock here
        const storedStorageProducts = localStorage.getItem('storageProducts');
        if (storedStorageProducts) {
            setStorageProducts(JSON.parse(storedStorageProducts));
        }
    }, []);

    useEffect(() => {
        const storedFavorites: ProductType[] = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(storedFavorites);
    }, []);

    useEffect(() => {
        const storedStorageProducts = localStorage.getItem('storageProducts');
        if (storedStorageProducts) {
            setStorageProducts(JSON.parse(storedStorageProducts));
        }
    }, [setStorageProducts]);

    useEffect(() => {
        if (selectedStorage !== null) {
            localStorage.setItem('selectedStorage', selectedStorage);
        }
    }, []);


    const handleDeleteStorage = (): void => {
        const deletedStorageIndex: number = selectedStorage !== null ? parseInt(selectedStorage) : -1;

        if (deletedStorageIndex === -1) return;

        const updatedStorages: StorageType[] = [...storages];
        updatedStorages.splice(deletedStorageIndex, 1);
        setStorages(updatedStorages);
        localStorage.setItem('wishListStorages', JSON.stringify(updatedStorages));

        const productsFromDeletedStorage = storageProducts[deletedStorageIndex] || [];
        productsFromDeletedStorage.forEach(product => {
            removeFromFavorites(product.id);
        });

        const updatedStorageProducts = [...storageProducts];
        updatedStorageProducts.splice(deletedStorageIndex, 1);
        setStorageProducts(updatedStorageProducts);
        localStorage.setItem('storageProducts', JSON.stringify(updatedStorageProducts));

        // Usuwanie produktów z głównego schowka
        const updatedFavorites = favorites.filter(favProduct => !productsFromDeletedStorage.some(p => p.id === favProduct.id));
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        if (updatedStorages.length === 0) {
            setSelectedStorage(null);
        } else if (deletedStorageIndex === updatedStorages.length) {
            setSelectedStorage(String(updatedStorages.length - 1));
        } else {
            setSelectedStorage(String(deletedStorageIndex));
        }
    };


    const removeFromFavorites = (productId: number): void => {
        const updatedFavorites: ProductType[] = favorites.filter(favProduct => favProduct.id !== productId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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
                                favorites.length === 0 ? (
                                    <ProfileImageContainer >
                                        <ProfilePageWelcome>
                                            <WelcomeText variant="h4" style={{color: 'lightgray', backgroundColor: '#f5f5f5'}}>
                                                NIE MASZ NIC DO OBEJRZENIA. PUSTO.
                                            </WelcomeText>
                                        </ProfilePageWelcome>
                                    </ProfileImageContainer>
                                ) : (
                                    favorites.map(favProduct => (
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
                            storages.length > 0 && favorites.length > 0 && (
                                <>
                                    <SumAndBtn>
                                        <Sum>Suma:</Sum>
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