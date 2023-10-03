import React, {useEffect, useState} from "react";
import {
    CartLink, DownNavWraperContainer,
    IconContainer,
    LeftElement,
    LogoLink,
    MiddleSideImageContainer,
    ProfileImagePlaceholder,
    RightElement,
    RightSideLanguageIconStyled,
    RightSideLanguageTypographyStyled, SmallScreenNavbar,
    StyledAccountCircle,
    StyledFavoriteIcon, StyledInputLabel, StyledMenuButton, StyledMenuIcon, StyledRightSideLastIcon,
    StyledRightSideMiddleIcon, StyledShoppingCartIcon, StyledTextField,
    UpNavWraperContainer,
    WishListLink
} from "./Navbar.styles";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../../resources/img/jedziemy.png";
import {LanguageDrawer} from "../tools/drawer/LanguageDrawer";
import {InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useTranslation} from "react-i18next";

import { MenuDrawer } from '../tools/drawer/MenuDrawer';


// icons
import PolishIcon from "../../resources/icons/polandFlagIcon.png";
import UnitedKingdomIcon from "../../resources/icons/unitedKingdomFlagIcon.png";
import DeutschlandIcon from "../../resources/icons/deutschlandFlagIcon.png";
import FranceIcon from "../../resources/icons/franceFlagIcon.png";
import ItalyIcon from "../../resources/icons/italyFlagIcon.png";
import UcraineIcon from "../../resources/icons/ukraineFlagIcon.png";
import CategoryType from "../../models/types/CategoryType";

export type SelectedMenuType = 'products' | 'service' | 'about' | null;

type SmallScreenTypes = {
    isLoggedIn: boolean;
    openProfileDrawer: () => void;
    openLoginDrawer: () => void;
}



export const NavWrapper: React.FC<SmallScreenTypes> = ({ isLoggedIn, openProfileDrawer, openLoginDrawer}) => {

    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const [languageDrawerOpen, setLanguageDrawerOpen] = React.useState(false);
    const [languageCode, setLanguageCode] = useState('PL');
    const [countryCode, setCountryCode] = useState('pl');
    const [currencyCode, setCurrencyCode] = useState('zł');
    const [selectedCurrencySymbol, setSelectedCurrencySymbol] = useState<string>('zł');

    const [selectedMenu, setSelectedMenu] = useState<SelectedMenuType>(null);
    const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);

    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(t.language);
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedMenu(selectedMenu);
        setSelectedCategory(null); // Resetowanie kategorii również, jeśli masz taki stan
    }, [selectedMenu]);


    useEffect(() => {
        // Nasłuchuj na zmiany języka
        i18n.on('languageChanged', (lang: string) => {
            setCurrentLanguage(lang);
        });

        // Wyłącz nasłuchiwanie na zmiany języka, gdy komponent jest odmontowywany
        return () => {
            i18n.off('languageChanged');
        };
    }, [i18n]);

    let currencySymbol  = 'zł';
    switch (currencyCode) {
        case 'zł':
            currencySymbol = 'zł';
            break;
        case 'EUR':
            currencySymbol = '€';
            break;
        case 'GPB':
            currencySymbol = '£';
            break;
        case 'USD':
            currencySymbol = '$';
            break;
        case 'UAH':
            currencySymbol = '₴';
            break;
        // Dodaj tutaj inne przypadki dla innych walut
        default:
            currencySymbol = 'zł';
    }

    let countryIcon;
    switch (countryCode) {
        case 'pl':
            countryIcon = <img src={PolishIcon} alt="Poland" width={19} height={19}/>;
            break;
        case 'en':
            countryIcon = <img src={UnitedKingdomIcon} alt="England" width={19} height={19}/>;
            break;
        case 'de':
            countryIcon = <img src={DeutschlandIcon} alt="Germany" width={19} height={19}/>;
            break;
        case 'fr':
            countryIcon = <img src={FranceIcon} alt="France" width={19} height={19}/>;
            break;
        case 'it':
            countryIcon = <img src={ItalyIcon} alt="Italy" width={19} height={19}/>;
            break;
        case 'ua':
            countryIcon = <img src={UcraineIcon} alt="Ucraine" width={19} height={19}/>;
            break;
        // Dodaj tutaj inne przypadki dla innych krajów
        default:
            countryIcon = <img src={PolishIcon} alt="Poland" width={19} height={19}/>;
    }


    const handleCurrencyChange = (currencySymbol: string) => {
        setSelectedCurrencySymbol(currencySymbol);
    };

    // Drawer
    const handleMenuDrawerOpen = () => {
        setMenuDrawerOpen(true);
    };
    const handleMenuDrawerClose = () => {
        setMenuDrawerOpen(false);
    };
    const handleLanguageDrawerOpen = () => {
        setLanguageDrawerOpen(true);
    };
    const handleLanguageDrawerClose = () => {
        setLanguageDrawerOpen(false);
    };

    function handleIconClick() {
        if (isLoggedIn) {
            openProfileDrawer();
        } else {
            openLoginDrawer();
        }
    }

    return (
        <SmallScreenNavbar>
            <UpNavWraperContainer>
                <LeftElement>
                    <LogoLink as={Link} to="/">
                        <MiddleSideImageContainer
                            src={Logo}
                            alt="Logo"
                        />
                    </LogoLink>
                </LeftElement>
                <RightElement>
                    <RightSideLanguageIconStyled
                        edge="end"
                        aria-label="profile"
                        disableRipple
                        onClick={handleLanguageDrawerOpen}
                    >
                        <RightSideLanguageTypographyStyled variant="body1">
                            {`${languageCode} · ${selectedCurrencySymbol}  `}
                        </RightSideLanguageTypographyStyled>
                        <IconContainer >
                            {countryIcon}
                        </IconContainer>
                    </RightSideLanguageIconStyled>
                    <StyledRightSideMiddleIcon
                        edge="end"
                        aria-label="profile"
                        disableRipple
                        onClick={handleIconClick}
                    >
                        {isLoggedIn ? <ProfileImagePlaceholder /> : <StyledAccountCircle />}
                        {/*<StyledAccountCircle />*/}
                    </StyledRightSideMiddleIcon>

                    <LanguageDrawer
                        open={languageDrawerOpen}
                        onClose={handleLanguageDrawerClose}
                        onLanguageChange={setLanguageCode}
                        onCountryChange={setCountryCode}
                        onCurrencyChange={handleCurrencyChange}
                    />


                    <WishListLink
                        as={Link}
                        to="/wishList"
                    >
                        <StyledRightSideMiddleIcon
                            edge="end"
                            aria-label="favorites"
                            disableRipple
                        >
                            <StyledFavoriteIcon />
                        </StyledRightSideMiddleIcon>
                    </WishListLink>


                    <CartLink as={Link} to="/basket">
                        <StyledRightSideLastIcon
                            edge="end"
                            aria-label="cart"
                            disableRipple
                        >
                            <StyledShoppingCartIcon />
                        </StyledRightSideLastIcon>
                    </CartLink>
                </RightElement>
            </UpNavWraperContainer>

            <DownNavWraperContainer>
                <LeftElement>
                    <StyledTextField
                        id="search"
                        // label="Szukaj"
                        variant="outlined"
                        size='small'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            component: StyledInputLabel
                        }}
                    />
                </LeftElement>
                <RightElement>
                    <StyledMenuButton
                        edge="start"
                        aria-label="menu"
                        disableRipple
                        onClick={handleMenuDrawerOpen}
                    >
                        <StyledMenuIcon />
                    </StyledMenuButton>
                    <MenuDrawer
                        open={menuDrawerOpen}
                        onClose={handleMenuDrawerClose}
                        initialSelectedMenu="products" />
                </RightElement>
            </DownNavWraperContainer>
        </SmallScreenNavbar>
    )
}