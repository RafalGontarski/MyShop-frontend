import React, {useState} from 'react';
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

import Logo from "../../resources/img/mainlogo.png";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#F8F8F8' }} elevation={0}>
                <Toolbar style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginLeft: '10%',
                    marginRight: '10%',
                    marginTop: '1%',
                    marginBottom: '1%'
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px'}}>
                                <div>
                                    <Link
                                        href="#"
                                        style={{ color: '#000', marginRight: '20px', textDecoration: 'none', fontSize: '0.8rem' }}
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
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
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        style={{ color: '#000', marginRight: '10px' }}
                                        aria-label="youtube"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#C13584'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <YouTubeIcon />
                                    </IconButton>
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
                                </div>
                                <div>
                                    <IconButton
                                        edge="start"
                                        style={{ color: '#000', marginRight: '20px' }}
                                        aria-label="menu"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Link
                                        href="#"
                                        style={{ color: '#000', marginRight: '20px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        Hot Deals
                                    </Link>
                                    <Link
                                        href="#"
                                        style={{ color: '#000', marginRight: '20px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        Nowości
                                    </Link>
                                    <Link
                                        href="#"
                                        style={{ color: '#000', marginRight: '20px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        Top-Seller
                                    </Link>
                                    <Link
                                        href="#"
                                        style={{ color: '#000', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        Okazje
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '0.8rem',
                                }}>
                                <div>
                                    <img
                                        src={Logo}
                                        alt="Logo"
                                        style={{
                                            width: '150px',
                                            height: '30px',
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
                                        size="small"
                                        sx={{ width: '400px', backgroundColor: '#fff', borderRadius: 10 }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        InputLabelProps={{
                                            style: { textAlign: 'center' },
                                        }}
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '35px', alignItems: 'flex-end', marginTop: '0.8rem' }}>
                                <div>
                                    <Link
                                        href="#"
                                        style={{ color: '#000', marginRight: '20px', textDecoration: 'none', fontSize: '0.8rem' }}
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        Darmowa wysyłka od 900 zł
                                    </Link>
                                    <Link
                                        href="#"
                                        style={{ color: '#000', textDecoration: 'none', fontSize: '0.8rem' }}
                                        underline="none"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                    >
                                        2 lata gwarancji
                                    </Link>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <IconButton
                                        edge="end"
                                        style={{ color: '#000', marginRight: '20px' }}
                                        aria-label="language"
                                        onClick={handleClick}
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <Typography variant="body1" style={{ marginRight: '5px' }}>
                                            EN / USD
                                        </Typography>
                                        <LanguageIcon />
                                    </IconButton>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>English</MenuItem>
                                        <MenuItem onClick={handleClose}>Deutsch</MenuItem>
                                        <MenuItem onClick={handleClose}>Polski</MenuItem>
                                    </Menu>
                                    <IconButton
                                        edge="end"
                                        style={{ color: '#000', marginRight: '20px' }}
                                        aria-label="profile"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        style={{ color: '#000', marginRight: '20px' }}
                                        aria-label="favorites"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        style={{ color: '#000' }}
                                        aria-label="cart"
                                        onMouseOver={(event) => {event.currentTarget.style.color = '#7100D3'}}
                                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                                        disableRipple
                                    >
                                        <ShoppingCartIcon />
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




