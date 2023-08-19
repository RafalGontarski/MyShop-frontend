import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Grid from '@mui/material/Grid';
import {InputAdornment} from "@mui/material";
import {Link} from "react-router-dom";

// components
import { MenuDrawer } from '../drawer/MenuDrawer';
import { LanguageDrawer } from '../drawer/LanguageDrawer';

// icons
import ItalyIcon from '../../resources/icons/italyFlagIcon.png';
import FranceIcon from '../../resources/icons/franceFlagIcon.png';
import PolishIcon from '../../resources/icons/polandFlagIcon.png';
import UcraineIcon from '../../resources/icons/ukraineFlagIcon.png';
import UnitedKingdomIcon from '../../resources/icons/unitedKingdomFlagIcon.png';
import DeutschlandIcon from '../../resources/icons/deutschlandFlagIcon.png';

import SearchIcon from '@mui/icons-material/Search';

// img
import Logo from "../../resources/img/jedziemy.png";
import {
    LeftElement,
    RightElement,
    StyledMainGrid,
    LeftSideStyledLink,
    StyledToolbar,
    LeftSideLinksAndIcons,
    NavbarContainer,
    StyledFaceBookIcon,
    LeftSideFullScreenNavbar,
    StyledYouTubeIcon,
    StyledInstagramIcon,
    StyledTikTokIcon,
    LeftSideMenuIconAndLinks,
    StyledMenuButton,
    StyledMenuIcon,
    LeftSideStyledBoldLink,
    MiddleSideFullScreenNavbar,
    MiddleSideLogoContainer,
    MiddleSideSearchContainer,
    MiddleSideImageContainer,
    StyledTextField,
    StyledInputLabel,
    RightSideFullScreenNavbar,
    RightSideLinksContainer,
    RightSideIconsContainer,
    RightSideLanguageIconStyled,
    RightSideLanguageTypographyStyled,
    IconContainer,
    StyledAccountCircle,
    StyledFavoriteIcon,
    StyledShoppingCartIcon,
    StyledRightSideLastIcon,
    StyledRightSideMiddleIcon,
    StyledRightSideGuaranteeLink,
    StyledRightSideFreeShippingLink,
    ProfileImagePlaceholder,
    TikTokIconButton,
    InstagramIconButton,
    YouTubeIconButton,
    FaceBookIconButton,
    SmallScreenNavbar,
    UpNavWraperContainer,
    DownNavWraperContainer, LogoLink,

} from "./navbar.styles";


type NavbarProps = {
    isLoggedIn: boolean;
    onLogin: (
        userId: number,
        userName: string,
        userSurname: string,
        userEmail: string,
        userPassword: string,
        userRole: string[]) => void;
    onLogout: () => void;
    openProfileDrawer: () => void;
    openLoginDrawer: () => void;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setIsProfileDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar: React.FC<NavbarProps> = (props) => {


    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const [languageDrawerOpen, setLanguageDrawerOpen] = React.useState(false);
    const [languageCode, setLanguageCode] = useState('PL');
    const [countryCode, setCountryCode] = useState('pl');
    const [currencyCode, setCurrencyCode] = useState('zł');
    const [selectedCurrencySymbol, setSelectedCurrencySymbol] = useState<string>('zł');

    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(t.language);


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

    let currencySymbol;
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
        if (props.isLoggedIn) {
            props.openProfileDrawer();
        } else {
            props.openLoginDrawer();
        }
    }


    const theme = useTheme();
    const isSmallScreenForLink = useMediaQuery(theme.breakpoints.down(1555));
    const isSmallScreenForTopSellerLink = useMediaQuery(theme.breakpoints.down(1385));

    return (
        <>
            <NavbarContainer position="static" elevation={0}>
                <StyledToolbar >
                    <StyledMainGrid container spacing={1}>
                        <Grid item xs={5} sm={5}>
                            <LeftSideFullScreenNavbar>
                                <LeftSideLinksAndIcons>
                                    <LeftSideStyledLink
                                        href="#"
                                        underline="none"
                                    >
                                        {t('navbar.service')}
                                    </LeftSideStyledLink>
                                    <LeftSideStyledLink
                                        href="#"
                                        underline="none"
                                    >
                                        {t('navbar.contact')}
                                    </LeftSideStyledLink>
                                    <LeftSideStyledLink
                                        href="#"
                                        underline="none"
                                    >
                                        {t('navbar.about')}
                                    </LeftSideStyledLink>
                                    <FaceBookIconButton
                                        edge="end"
                                        aria-label="facebook"
                                        disableRipple
                                    >
                                        <StyledFaceBookIcon />
                                    </FaceBookIconButton>
                                    <YouTubeIconButton
                                        edge="end"
                                        aria-label="youtube"
                                        disableRipple
                                    >
                                        <StyledYouTubeIcon />
                                    </YouTubeIconButton>
                                    <InstagramIconButton
                                        edge="end"
                                        aria-label="instagram"
                                        disableRipple
                                    >
                                        <StyledInstagramIcon />
                                    </InstagramIconButton>
                                    <TikTokIconButton
                                        edge="end"
                                        aria-label="tiktok"
                                        disableRipple
                                    >
                                        <StyledTikTokIcon />
                                    </TikTokIconButton>
                                </LeftSideLinksAndIcons>
                                <LeftSideMenuIconAndLinks>
                                    <StyledMenuButton
                                        edge="start"
                                        aria-label="menu"
                                        disableRipple
                                        onClick={handleMenuDrawerOpen}
                                    >
                                        <StyledMenuIcon />
                                    </StyledMenuButton>
                                    <MenuDrawer open={menuDrawerOpen} onClose={handleMenuDrawerClose} />
                                    <LeftSideStyledBoldLink
                                        href="#"
                                        underline="none"
                                    >
                                        Hot Deals
                                    </LeftSideStyledBoldLink>
                                    {/*{!isSmallScreenForNewestLink && (*/}
                                    <LeftSideStyledBoldLink
                                        href="#"
                                        underline="none"
                                    >
                                        {t('navbar.new')}
                                    </LeftSideStyledBoldLink>
                                    {/*)}*/}
                                    {!isSmallScreenForTopSellerLink && (
                                        <LeftSideStyledBoldLink
                                            href="#"
                                            underline="none"
                                        >
                                            Top-Seller
                                        </LeftSideStyledBoldLink>
                                    )}
                                    {!isSmallScreenForLink && (
                                        <LeftSideStyledBoldLink
                                            href="#"
                                            underline="none"
                                        >
                                            {t('navbar.bargains')}
                                        </LeftSideStyledBoldLink>
                                    )}
                                </LeftSideMenuIconAndLinks>
                            </LeftSideFullScreenNavbar>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <MiddleSideFullScreenNavbar>
                                <MiddleSideLogoContainer>
                                    <LogoLink as={Link} to="/">
                                        <MiddleSideImageContainer
                                            src={Logo}
                                            alt="Logo"
                                        />
                                    </LogoLink>
                                </MiddleSideLogoContainer>
                                <MiddleSideSearchContainer>
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
                                </MiddleSideSearchContainer>
                            </MiddleSideFullScreenNavbar>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <RightSideFullScreenNavbar>
                                <RightSideLinksContainer>
                                    <StyledRightSideFreeShippingLink
                                        href="#"
                                        underline="none"
                                    >
                                        {t('navbar.freeShipping')}
                                    </StyledRightSideFreeShippingLink>
                                    <StyledRightSideGuaranteeLink
                                        href="#"
                                        underline="none"
                                    >
                                        {t('navbar.guarantee')}
                                    </StyledRightSideGuaranteeLink>
                                </RightSideLinksContainer>
                                <RightSideIconsContainer>
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
                                        {props.isLoggedIn ? <ProfileImagePlaceholder /> : <StyledAccountCircle />}
                                        {/*<StyledAccountCircle />*/}
                                    </StyledRightSideMiddleIcon>

                                    <LanguageDrawer
                                        open={languageDrawerOpen}
                                        onClose={handleLanguageDrawerClose}
                                        onLanguageChange={setLanguageCode}
                                        onCountryChange={setCountryCode}
                                        onCurrencyChange={handleCurrencyChange}
                                    />

                                    <StyledRightSideMiddleIcon
                                        edge="end"
                                        aria-label="favorites"
                                        disableRipple
                                    >
                                        <StyledFavoriteIcon />
                                    </StyledRightSideMiddleIcon>
                                    <StyledRightSideLastIcon
                                        edge="end"
                                        aria-label="cart"
                                        disableRipple
                                    >
                                        <StyledShoppingCartIcon />
                                    </StyledRightSideLastIcon>
                                </RightSideIconsContainer>
                            </RightSideFullScreenNavbar>
                        </Grid>
                    </StyledMainGrid>


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
                                    {props.isLoggedIn ? <ProfileImagePlaceholder /> : <StyledAccountCircle />}
                                    {/*<StyledAccountCircle />*/}
                                </StyledRightSideMiddleIcon>

                                <LanguageDrawer
                                    open={languageDrawerOpen}
                                    onClose={handleLanguageDrawerClose}
                                    onLanguageChange={setLanguageCode}
                                    onCountryChange={setCountryCode}
                                    onCurrencyChange={handleCurrencyChange}
                                />

                                <StyledRightSideMiddleIcon
                                    edge="end"
                                    aria-label="favorites"
                                    disableRipple
                                >
                                    <StyledFavoriteIcon />
                                </StyledRightSideMiddleIcon>
                                <StyledRightSideLastIcon
                                    edge="end"
                                    aria-label="cart"
                                    disableRipple
                                >
                                    <StyledShoppingCartIcon />
                                </StyledRightSideLastIcon>
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
                            </RightElement>
                        </DownNavWraperContainer>
                    </SmallScreenNavbar>
                </StyledToolbar>
            </NavbarContainer>
        </>
    );
}

export default Navbar;




