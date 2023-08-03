import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '@mui/icons-material/MusicNote'; // TikTok icon is not available, using MusicNote as a placeholder

const Navbar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#fff' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1, color: '#000' }}>
                    Będzie Łowione
                </Typography>
                <Button style={{ color: '#000' }}>Link 1</Button>
                <Button style={{ color: '#000' }}>Link 2</Button>
                <Button style={{ color: '#000' }}>Link 3</Button>
                <IconButton edge="end" style={{ color: '#000' }} aria-label="facebook">
                    <FacebookIcon />
                </IconButton>
                <IconButton edge="end" style={{ color: '#000' }} aria-label="youtube">
                    <YouTubeIcon />
                </IconButton>
                <IconButton edge="end" style={{ color: '#000' }} aria-label="instagram">
                    <InstagramIcon />
                </IconButton>
                <IconButton edge="end" style={{ color: '#000' }} aria-label="tiktok">
                    <TikTokIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;


