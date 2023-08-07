import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {AccountCircle} from "@mui/icons-material";
import {InputAdornment, Link, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { withStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from '@mui/icons-material/MusicNote';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Logo from "../../resources/img/jedziemy.png";

import { TemporaryDrawer } from './drawer/MenuDrawer';
import { ProfileDrawer } from './drawer/ProfileDrawer';
import { RegistrationDrawer } from './drawer/RegistrationDrawer';
import { LanguageDrawer } from './drawer/LanguageDrawer';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';

// icons
import PolishIcon from '../../resources/icons/polandFlagIcon.png';
import UnitedKingdomIcon from '../../resources/icons/unitedKingdomFlagIcon.png';
import DeutschlandIcon from '../../resources/icons/deutschlandFlagIcon.png';
import FranceIcon from '../../resources/icons/franceFlagIcon.png';
import ItalyIcon from '../../resources/icons/italyFlagIcon.png';
import UcraineIcon from '../../resources/icons/ukraineFlagIcon.png';
import {Box} from "@mui/system";

const useStyles = makeStyles((theme) => ({
    iconContainer: {
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);
    const [registrationDrawerOpen, setRegistrationDrawerOpen] = React.useState(false);
    const [languageDrawerOpen, setLanguageDrawerOpen] = React.useState(false);
    const [languageCode, setLanguageCode] = useState('EN');
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(t.language);
    const classes = useStyles();

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



    let countryIcon;
    switch (t.language) {
        case 'pl':
            countryIcon = <img src={PolishIcon} alt="Poland" width={30} height={30}/>;
            break;
        case 'en':
            countryIcon = <img src={UnitedKingdomIcon} alt="England" width={30} height={30}/>;
            break;
        case 'de':
            countryIcon = <img src={DeutschlandIcon} alt="Germany" width={30} height={30}/>;
            break;
        case 'fr':
            countryIcon = <img src={FranceIcon} alt="France" width={30} height={30}/>;
            break;
        case 'it':
            countryIcon = <img src={ItalyIcon} alt="Italy" width={30} height={30}/>;
            break;
        case 'ua':
            countryIcon = <img src={UcraineIcon} alt="Ucraine" width={30} height={30}/>;
            break;
        // Dodaj tutaj inne przypadki dla innych krajów
        default:
            countryIcon = <img src={PolishIcon} alt="Poland" width={30} height={30}/>;
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledTextField = withStyles({
        root: {
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    border: 'none',
                },
            },
        },
    })(TextField);

    // Drawer
    const handleMenuDrawerOpen = () => {
        setMenuDrawerOpen(true);
    };
    const handleMenuDrawerClose = () => {
        setMenuDrawerOpen(false);
    };

    const handleProfileDrawerOpen = () => {
        setProfileDrawerOpen(true);
    };
    const handleProfileDrawerClose = () => {
        setProfileDrawerOpen(false);
    };

    const handleRegistrationClick = () => {
        setProfileDrawerOpen(false);
        setRegistrationDrawerOpen(true);
    };

    const handleLoginClick = () => {
        setRegistrationDrawerOpen(false);
        setProfileDrawerOpen(true);
    };

    const handleLanguageDrawerOpen = () => {
        setLanguageDrawerOpen(true);
    };
    const handleLanguageDrawerClose = () => {
        setLanguageDrawerOpen(false);
    };



    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(1350));
    const isSmallScreenForLink = useMediaQuery(theme.breakpoints.down(1516));
    const isSmallScreenForInstagram = useMediaQuery(theme.breakpoints.down(1396));
    const isSmallScreenForTopSellerLink = useMediaQuery(theme.breakpoints.down(1369));
    const isSmallScreenForGuaranteeLink = useMediaQuery(theme.breakpoints.down(1200));
    const isSmallScreenForIconSize = useMediaQuery(theme.breakpoints.down(1250));

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#F8F8F8' }} elevation={0}>
                <Toolbar style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '1%',
                    marginBottom: '1%',
                    maxWidth: '1880px',
                    marginLeft: isSmallScreen ? '4rem' : '10rem',
                    marginRight: isSmallScreen ? '4rem' : '10rem',
                }}>
                    <Grid container spacing={23}>
                        <Grid item xs={12} sm={5}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'nowrap',
                                gap: isSmallScreenForIconSize ? '13px' : '25px',
                            }}>
                                <div>
                                    <Link
                                        href="#"
                                        style={{
                                            color: '#000',
                                            marginRight: '20px',
                                            textDecoration: 'none',
                                            fontSize: isSmallScreenForIconSize ? '0.6rem' : '0.8rem' }}
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        Kontakt   +48 511 670 859
                                    </Link>
                                    <IconButton
                                        edge="end"
                                        style={{ color: '#000', marginRight: '10px' }}
                                        aria-label="facebook"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#ff0000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <FacebookIcon style={{ fontSize: isSmallScreenForIconSize ? 20 : 24 }}/>
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        style={{ color: '#000', marginRight: '10px' }}
                                        aria-label="youtube"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#C13584'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <YouTubeIcon style={{ fontSize: isSmallScreenForIconSize ? 20 : 24 }}/>
                                    </IconButton>
                                    {!isSmallScreenForInstagram && (
                                    <IconButton
                                        edge="end"
                                        style={{ color: '#000', marginRight: '10px' }}
                                        aria-label="instagram"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#C13584'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <InstagramIcon />
                                    </IconButton>
                                    )}
                                    {!isSmallScreenForLink && (
                                        <IconButton
                                            edge="end"
                                            style={{ color: '#000', marginRight: '10px' }}
                                            aria-label="tiktok"
                                            onMouseOver={(event) => {event.currentTarget.style.color = '#C13584'}}
                                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                            disableRipple
                                        >
                                            <TikTokIcon />
                                        </IconButton>
                                    )}
                                </div>
                                <div>
                                    <IconButton
                                        edge="start"
                                        style={{
                                            color: '#000',
                                            marginRight: '20px',
                                        }}
                                        aria-label="menu"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                        onClick={handleMenuDrawerOpen}
                                    >
                                        <MenuIcon style={{ fontSize: isSmallScreenForIconSize ? 20 : 24 }}/>
                                    </IconButton>
                                    <TemporaryDrawer open={menuDrawerOpen} onClose={handleMenuDrawerClose} />
                                    <Link
                                        href="#"
                                        style={{
                                            color: '#000',
                                            marginRight: '20px',
                                            textDecoration: 'none',
                                            fontSize: isSmallScreenForIconSize ? '0.7rem' : '0.9rem',
                                            fontWeight: 'bold'
                                        }}
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        Hot Deals
                                    </Link>
                                    <Link
                                        href="#"
                                        style={{
                                            color: '#000',
                                            marginRight: '20px',
                                            textDecoration: 'none',
                                            fontSize: isSmallScreenForIconSize ? '0.7rem' : '0.9rem',
                                            fontWeight: 'bold'
                                        }}
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        {t('navbar.new')}
                                    </Link>
                                    {!isSmallScreenForTopSellerLink && (
                                        <Link
                                            href="#"
                                            style={{
                                                color: '#000',
                                                marginRight: '20px',
                                                textDecoration: 'none',
                                                fontSize: isSmallScreenForIconSize ? '0.7rem' : '0.9rem',
                                                fontWeight: 'bold'
                                            }}
                                            underline="none"
                                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        >
                                            Top-Seller
                                        </Link>
                                    )}
                                    {!isSmallScreenForLink && (
                                        <Link
                                            href="#"
                                            style={{
                                                color: '#000',
                                                textDecoration: 'none',
                                                fontSize: isSmallScreenForIconSize ? '0.7rem' : '0.9rem',
                                                fontWeight: 'bold'
                                            }}
                                            underline="none"
                                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        >
                                            {t('navbar.bargains')}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: isSmallScreenForIconSize ? '12px' : '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '0.8rem',
                                }}>
                                <div>
                                    <img
                                        src={Logo}
                                        alt="Logo"
                                        style={{
                                            width: isSmallScreenForIconSize ? '120px' : '170px',
                                            height: isSmallScreenForIconSize ? '27px' : '35px',
                                            transition: 'transform 0.3s ease-in-out',
                                        }}
                                        onMouseOver={(event) => {event.currentTarget.style.transform = 'scale(1.1)'}}
                                        onMouseOut={(event) => {event.currentTarget.style.transform = 'scale(1)'}}
                                    />
                                </div>
                                <div>
                                    <StyledTextField
                                        id="search"
                                        // label="Szukaj"
                                        variant="outlined"
                                        size='small'
                                        sx={{
                                            width: isSmallScreenForIconSize ? '320px' : '400px',
                                            backgroundColor: '#fff',
                                            borderRadius: 10,
                                            '& .MuiInputBase-root': {
                                                fontSize: isSmallScreenForIconSize ? '0.65rem' : '0.9rem',
                                                padding: isSmallScreenForIconSize ? '16px' : '12px',
                                                height: isSmallScreenForIconSize ? '25px' : '40px',
                                            },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                textAlign: 'center',
                                                fontSize: isSmallScreenForIconSize ? '0.7rem' : '0.8rem',
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: isSmallScreenForIconSize ? '18px' : '35px',
                                alignItems: 'flex-end',
                                marginTop: '0.8rem',
                                // flexGrow: 1,
                            }}>
                                <div>
                                    <Link
                                        href="#"
                                        style={{
                                            color: '#000',
                                            marginRight: isSmallScreenForGuaranteeLink ? '0px' : '20px',
                                            textDecoration: 'none',
                                            fontSize: isSmallScreenForIconSize ? '0.6rem' : '0.8rem'  }}
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        Darmowa wysyłka od 900 zł
                                    </Link>
                                    {!isSmallScreenForGuaranteeLink && (
                                        <Link
                                            href="#"
                                            style={{
                                                color: '#000',
                                                textDecoration: 'none',
                                                fontSize: '0.8rem' }}
                                            underline="none"
                                            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        >
                                            2 lata gwarancji
                                        </Link>
                                    )}
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <IconButton
                                        edge="end"
                                        style={{
                                            color: '#000',
                                            marginRight: isSmallScreenForIconSize ? '10px' : '20px',
                                            fontSize: isSmallScreenForIconSize ? '0.6rem' : '0.8rem',
                                        }}
                                        aria-label="profile"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                        onClick={handleLanguageDrawerOpen}
                                    >
                                        <Typography
                                            variant="body1"
                                            style={{
                                                marginRight: '5px',
                                                fontSize: isSmallScreenForIconSize ? '0.6rem' : '0.8rem',
                                            }}
                                        >
                                            {`${languageCode} · USD`}
                                        </Typography>
                                        <Box className={classes.iconContainer}>
                                            {countryIcon}
                                        </Box>
                                        {/*<LanguageIcon style={{ fontSize: isSmallScreenForIconSize ? 20 : 24 }} />*/}
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        style={{
                                            color: '#000',
                                            marginRight: isSmallScreenForIconSize ? '10px' : '20px',
                                        }}
                                        aria-label="profile"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                        onClick={handleProfileDrawerOpen}
                                    >
                                        <AccountCircle style={{ fontSize: isSmallScreenForIconSize ? 20 : 24 }}/>
                                    </IconButton>
                                    {/*<ProfileDrawer open={profileDrawerOpen} onClose={handleProfileDrawerClose} />*/}
                                    <LanguageDrawer
                                        open={languageDrawerOpen}
                                        onClose={handleLanguageDrawerClose}
                                        onLanguageChange={setLanguageCode}
                                    />
                                    <ProfileDrawer
                                        open={profileDrawerOpen}
                                        onClose={() => setProfileDrawerOpen(false)}
                                        onRegisterClick={() => {
                                            handleRegistrationClick();
                                        }}
                                    />
                                    <RegistrationDrawer
                                        open={registrationDrawerOpen}
                                        onClose={() => setRegistrationDrawerOpen(false)}
                                        onLoginClick={() => {
                                            handleLoginClick();
                                        }}
                                    />

                                    <IconButton
                                        edge="end"
                                        style={{
                                            color: '#000',
                                            marginRight: isSmallScreenForIconSize ? '10px' : '20px',
                                            fontSize: isSmallScreenForIconSize ? '0.6rem' : '0.8rem'
                                        }}
                                        aria-label="favorites"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <FavoriteIcon style={{ fontSize: isSmallScreenForIconSize ? 20 : 24 }}/>
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        style={{ color: '#000', fontSize: isSmallScreenForIconSize ? '0.6rem' : '0.8rem' }}
                                        aria-label="cart"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <ShoppingCartIcon style={{ fontSize: isSmallScreenForIconSize ? 20 : 24 }}/>
                                    </IconButton>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;




