import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Grid from '@mui/material/Grid';
import {InputAdornment} from "@mui/material";

// components
import { MenuDrawer } from '../drawer/MenuDrawer';
import { LoginDrawer } from '../drawer/LoginDrawer';
import { LanguageDrawer } from '../drawer/LanguageDrawer';
import { RegistrationDrawer } from '../drawer/RegistrationDrawer';

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
    LeftSideStyledLink,
    StyledToolbar,
    LeftSideLinksAndIcons,
    NavbarContainer,
    LeftSideStyledIconButton,
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
    StyledRightSideFreeShippingLink, ProfileImagePlaceholder,
} from "./navbar.styles";
import {ProfileDrawer} from "../drawer/ProfileDrawer";

type NavbarProps = {
    isLoggedIn: boolean;
    onLogin: (userName: string, userRole: string[]) => void;
    onLogout: () => void;
    openProfileDrawer: () => void;
    openLoginDrawer: () => void;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setIsProfileDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar: React.FC<NavbarProps> = (props) => {


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const [loginDrawerOpen, setLoginDrawerOpen] = useState(false);
    const [registrationDrawerOpen, setRegistrationDrawerOpen] = React.useState(false);
    const [profileDrawerOpen, setProfileDrawerOpen] = React.useState(false);
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

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
    const handleProfileDrawerOpen = () => {
        setLoginDrawerOpen(true);
    };
    const handleProfileDrawerClose = () => {
        setLoginDrawerOpen(false);
    };
    const handleRegistrationClick = () => {
        setLoginDrawerOpen(false);
        setRegistrationDrawerOpen(true);
    };
    const handleLoginClick = () => {
        setRegistrationDrawerOpen(false);
        setLoginDrawerOpen(true);
    };
    const handleLanguageDrawerOpen = () => {
        setLanguageDrawerOpen(true);
    };
    const handleLanguageDrawerClose = () => {
        setLanguageDrawerOpen(false);
    };

    function handleLogout() {
        console.log("logout");
        props.setIsLoggedIn(false);
        props.setIsProfileDrawerOpen(false);
    }

    function handleIconClick() {
        if (props.isLoggedIn) {
            props.openProfileDrawer();
        } else {
            props.openLoginDrawer();
        }
    }


    const theme = useTheme();
    const isSmallScreenForLink = useMediaQuery(theme.breakpoints.down(1516));
    const isSmallScreenForTopSellerLink = useMediaQuery(theme.breakpoints.down(1369));

    return (
        <>
            <NavbarContainer position="static" elevation={0}>
                <StyledToolbar >
                    <Grid container spacing={23}>
                        <Grid item xs={12} sm={5}>
                            <LeftSideFullScreenNavbar>
                                <LeftSideLinksAndIcons>
                                    <LeftSideStyledLink
                                        href="#"
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        {t('navbar.service')}
                                    </LeftSideStyledLink>
                                    <LeftSideStyledLink
                                        href="#"
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        {t('navbar.contact')}
                                    </LeftSideStyledLink>
                                    <LeftSideStyledLink
                                        href="#"
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        {t('navbar.about')}
                                    </LeftSideStyledLink>
                                    <LeftSideStyledIconButton
                                        edge="end"
                                        aria-label="facebook"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#ff0000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <StyledFaceBookIcon />
                                    </LeftSideStyledIconButton>
                                    <LeftSideStyledIconButton
                                        edge="end"
                                        aria-label="youtube"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#C13584'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <StyledYouTubeIcon />
                                    </LeftSideStyledIconButton>
                                    <LeftSideStyledIconButton
                                        edge="end"
                                        aria-label="instagram"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#C13584'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <StyledInstagramIcon />
                                    </LeftSideStyledIconButton>
                                    <LeftSideStyledIconButton
                                        edge="end"
                                        aria-label="tiktok"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#C13584'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <StyledTikTokIcon />
                                    </LeftSideStyledIconButton>
                                </LeftSideLinksAndIcons>
                                <LeftSideMenuIconAndLinks>
                                    <StyledMenuButton
                                        edge="start"
                                        aria-label="menu"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                        onClick={handleMenuDrawerOpen}
                                    >
                                        <StyledMenuIcon />
                                    </StyledMenuButton>
                                    <MenuDrawer open={menuDrawerOpen} onClose={handleMenuDrawerClose} />
                                    <LeftSideStyledBoldLink
                                        href="#"
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        Hot Deals
                                    </LeftSideStyledBoldLink>
                                    <LeftSideStyledBoldLink
                                        href="#"
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        {t('navbar.new')}
                                    </LeftSideStyledBoldLink>
                                    {!isSmallScreenForTopSellerLink && (
                                        <LeftSideStyledBoldLink
                                            href="#"
                                            underline="none"
                                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        >
                                            Top-Seller
                                        </LeftSideStyledBoldLink>
                                    )}
                                    {!isSmallScreenForLink && (
                                        <LeftSideStyledBoldLink
                                            href="#"
                                            underline="none"
                                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
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
                                    <MiddleSideImageContainer
                                        src={Logo}
                                        alt="Logo"
                                        onMouseOver={(event) => {event.currentTarget.style.transform = 'scale(1.1)'}}
                                        onMouseOut={(event) => {event.currentTarget.style.transform = 'scale(1)'}}
                                    />
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
                                        <IconContainer>
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
                                    {/*<LoginDrawer*/}
                                    {/*    open={loginDrawerOpen}*/}
                                    {/*    onClose={() => setLoginDrawerOpen(false)}*/}
                                    {/*    handleLogin={() => {*/}
                                    {/*        handleLoginClick();*/}
                                    {/*    }}*/}
                                    {/*    onRegisterClick={() => {*/}
                                    {/*        handleRegistrationClick();*/}
                                    {/*    }}*/}
                                    {/*/>*/}
                                    {/*<RegistrationDrawer*/}
                                    {/*    open={registrationDrawerOpen}*/}
                                    {/*    onClose={() => setRegistrationDrawerOpen(false)}*/}
                                    {/*    onLoginClick={() => {*/}
                                    {/*        handleLoginClick();*/}
                                    {/*    }}*/}
                                    {/*/>*/}
                                    {/*<ProfileDrawer*/}
                                    {/*    open={profileDrawerOpen}*/}
                                    {/*    onClose={() => setProfileDrawerOpen(false)}*/}
                                    {/*    onLogoutClick={() => {*/}
                                    {/*        handleLogout();*/}
                                    {/*    }}*/}
                                    {/*/>*/}

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
                    </Grid>
                </StyledToolbar>
            </NavbarContainer>
        </>
    );
}

export default Navbar;




