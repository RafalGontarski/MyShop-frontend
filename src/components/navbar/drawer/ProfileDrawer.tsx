import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type DrawerProps = {
    open: boolean;
    onClose: () => void;
};

export const ProfileDrawer: React.FC<DrawerProps> = ({ open, onClose }) => {
    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{ width: 250, padding: 2 }}
                role="presentation"
                onClick={onClose}
                onKeyDown={onClose}
            >
                <Typography variant="h6" gutterBottom>
                    Logowanie
                </Typography>
                <TextField label="Email" variant="outlined" fullWidth margin="normal" />
                <TextField label="Hasło" variant="outlined" fullWidth margin="normal" type="password" />
                <Button variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
                    Zaloguj
                </Button>
                <Typography variant="h6" gutterBottom style={{ marginTop: '2rem' }}>
                    Rejestracja
                </Typography>
                <TextField label="Email" variant="outlined" fullWidth margin="normal" />
                <TextField label="Hasło" variant="outlined" fullWidth margin="normal" type="password" />
                <TextField label="Potwierdź hasło" variant="outlined" fullWidth margin="normal" type="password" />
                <Button variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
                    Zarejestruj
                </Button>
            </Box>
        </Drawer>
    );
}
