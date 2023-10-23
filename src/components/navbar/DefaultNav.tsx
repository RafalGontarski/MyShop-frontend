import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

// MUI
import Grid from "@mui/material/Grid";
import {InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
    CartLink,
    FaceBookIconButton,
    IconContainer,
    InstagramIconButton,
    LeftSideFullScreenNavbar,
    LeftSideLinksAndIcons,
    LeftSideMenuIconAndLinks,
    LeftSideStyledBoldLink,
    LeftSideStyledLink,
    LogoLink,
    MiddleSideFullScreenNavbar,
    MiddleSideImageContainer,
    MiddleSideLogoContainer,
    MiddleSideSearchContainer,
    ProfileImagePlaceholder,
    RightSideFullScreenNavbar,
    RightSideIconsContainer,
    RightSideLanguageIconStyled,
    RightSideLanguageTypographyStyled,
    RightSideLinksContainer,
    StyledAccountCircle,
    StyledFaceBookIcon,
    StyledFavoriteIcon,
    StyledInputLabel,
    StyledInstagramIcon,
    StyledMainGrid,
    StyledMenuButton,
    StyledMenuIcon,
    StyledRightSideFreeShippingLink,
    StyledRightSideGuaranteeLink,
    StyledRightSideLastIcon,
    StyledRightSideMiddleIcon,
    StyledShoppingCartIcon,
    StyledTextField,
    StyledTikTokIcon,
    StyledYouTubeIcon,
    TikTokIconButton,
    WishListLink,
    YouTubeIconButton
} from "./Navbar.styles";

// components
import {MenuDrawer} from "../tools/drawer/MenuDrawer";
import {LanguageDrawer} from "../tools/drawer/LanguageDrawer";
import {useTranslation} from "react-i18next";

// icons
import PolishIcon from "../../resources/icons/polandFlagIcon.png";
import UnitedKingdomIcon from "../../resources/icons/unitedKingdomFlagIcon.png";
import DeutschlandIcon from "../../resources/icons/deutschlandFlagIcon.png";
import FranceIcon from "../../resources/icons/franceFlagIcon.png";
import ItalyIcon from "../../resources/icons/italyFlagIcon.png";
import UcraineIcon from "../../resources/icons/ukraineFlagIcon.png";


// contexts&types
import { SelectedMenuType } from '../tools/drawer/MenuDrawer';
import {useClickContext} from "../../models/providers/ClickProvider";
import {useMenuContext} from "../../models/providers/MenuProvider";

//logos
import Logo from "../../resources/img/PlLogo.png";
import EnLogo from "../../resources/img/EngLogo.png";
import GerLogo from "../../resources/img/GerLogo.png";
import ItLogo from "../../resources/img/ItLogo.png";
import UaLogo from '../../resources/img/UaLogo.png';
import FrLogo from '../../resources/img/FrLogo.png';

type NormalSizeScreenTypes = {
    isLoggedIn: boolean;
    openProfileDrawer: () => void;
    openLoginDrawer: () => void;
}


export const DefaultNav: React.FC<NormalSizeScreenTypes> = ({ isLoggedIn, openProfileDrawer, openLoginDrawer}) => {

    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const [languageDrawerOpen, setLanguageDrawerOpen] = React.useState(false);
    const [languageCode, setLanguageCode] = useState('PL');
    const [countryCode, setCountryCode] = useState('pl');
    const [currencyCode] = useState('zł');
    const [selectedCurrencySymbol, setSelectedCurrencySymbol] = useState<string>('zł');
    const [selectedTab, setSelectedTab] = useState<SelectedMenuType | null>(null);


    const { t, i18n } = useTranslation();
    const [,setCurrentLanguage] = useState(t.language);
    const { linkClicks, incrementLinkClickCount } = useClickContext();
    const { selectedAdvantage, setSelectedAdvantage } = useMenuContext();


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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    let logoSrc;
    switch (languageCode) {
        case 'EN':
            logoSrc = EnLogo;
            break;
        case 'DE':
            logoSrc = GerLogo;
            break;
        case 'IT':
            logoSrc = ItLogo;
            break;
        case 'UA':
            logoSrc = UaLogo;
            break;
        case 'FR':
            logoSrc = FrLogo;
            break;
        // Dodaj tutaj inne przypadki dla innych języków
        default:
            logoSrc = Logo;  // domyślne logo dla języka polskiego
    }


    useEffect(() => {
        // Nasłuchuj na zmiany języka
        i18n.on('languageChanged', (lang: string) => {
            setLanguageCode(lang.toUpperCase());
        });

        // Wyłącz nasłuchiwanie na zmiany języka, gdy komponent jest odmontowywany
        return () => {
            i18n.off('languageChanged');
        };
    }, [i18n]);



    const handleCurrencyChange = (currencySymbol: string) => {
        setSelectedCurrencySymbol(currencySymbol);
    };

    // Drawer
    const handleMenuDrawerOpen = () => {
        setSelectedTab('products');
        setMenuDrawerOpen(true);
    };
    const handleMenuDrawerClose = () => {
        setMenuDrawerOpen(false);
        setSelectedTab(null);
    };

    const handleServiceClick = () => {
        setSelectedTab('service' as SelectedMenuType);
        setMenuDrawerOpen(true);
        incrementLinkClickCount('service');
        setSelectedAdvantage(false);
    };

    const handleAboutClick = () => {
        setSelectedTab('about');
        setMenuDrawerOpen(true);
        incrementLinkClickCount('about');
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

    const theme = useTheme();
    const isSmallScreenForLink = useMediaQuery(theme.breakpoints.down(1555));
    const isSmallScreenForTopSellerLink = useMediaQuery(theme.breakpoints.down(1385));

    return (
        <StyledMainGrid container spacing={1}>
            <Grid item xs={5} sm={5}>
                <LeftSideFullScreenNavbar>
                    <LeftSideLinksAndIcons>
                        <LeftSideStyledLink
                            underline="none"
                            onClick={handleServiceClick}
                        >
                            {t('navbar.service')}
                        </LeftSideStyledLink>
                        <LeftSideStyledLink
                            as={Link}
                            to={"/helpDesk/contact"}
                            underline="none"
                            onClick={() => incrementLinkClickCount('contact')}
                        >
                            {t('navbar.contact')}
                        </LeftSideStyledLink>
                        <LeftSideStyledLink
                            underline="none"
                            onClick={handleAboutClick}
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
                        <MenuDrawer
                            open={menuDrawerOpen}
                            onClose={handleMenuDrawerClose}
                            initialSelectedMenu={selectedTab} />

                        <LeftSideStyledBoldLink
                            as={Link}
                            to={"/hotDeals"}
                            underline="none"
                            onClick={() => incrementLinkClickCount('hotDeals')}
                        >
                            Hot Deals
                        </LeftSideStyledBoldLink>
                        {/*{!isSmallScreenForNewestLink && (*/}
                        <LeftSideStyledBoldLink
                            as={Link}
                            to={"/newest"}
                            underline="none"
                            onClick={() => incrementLinkClickCount('newest')}  // Using the context function
                        >
                            {t('navbar.new')}
                        </LeftSideStyledBoldLink>
                        {/*)}*/}
                        {!isSmallScreenForTopSellerLink && (
                            <LeftSideStyledBoldLink
                                as={Link}
                                to={"/topSeller"}
                                underline="none"
                                onClick={() => incrementLinkClickCount('topSeller')}
                            >
                                Top-Seller
                            </LeftSideStyledBoldLink>
                        )}
                        {!isSmallScreenForLink && (
                            <LeftSideStyledBoldLink
                                as={Link}
                                to={"/occasions"}
                                underline="none"
                                onClick={() => incrementLinkClickCount('occasions')}
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
                                src={logoSrc}
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
                            as={Link}
                            to="/helpDesk/freeShipping"
                            underline="none"
                        >
                            {t('navbar.freeShipping')}
                        </StyledRightSideFreeShippingLink>
                        <StyledRightSideGuaranteeLink
                            as={Link}
                            to="/helpDesk/guarantee"
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
                    </RightSideIconsContainer>
                </RightSideFullScreenNavbar>
            </Grid>
        </StyledMainGrid>
    )
}
