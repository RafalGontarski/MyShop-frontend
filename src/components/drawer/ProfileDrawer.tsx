import { Drawer } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import HandIcon from "@mui/icons-material/PanTool";
import {useTranslation} from "react-i18next";


type DrawerProps = {
    open: boolean;
    onClose: () => void;
    onLogoutClick: () => void;
};

export const ProfileDrawer: React.FC<DrawerProps> = ({ open, onClose, onLogoutClick }) => {
    const { t } = useTranslation();

    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{ width: 420, padding: 2 }}
                role="presentation"
            >


                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <IconButton
                        onClick={onClose}
                        disableRipple
                        sx={{
                            color: '#000000',
                            '&:hover': { color: '#008000' } }}
                    >
                        <CloseIcon style={{
                            fontSize: 30,
                            fontWeight: 'bold' }} />
                    </IconButton>
                </Box>


                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >


                    <Box sx={{ display: 'flex', alignItems: 'left' }}>
                        <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
                            {t('profileDrawer.greeting')}
                        </Typography>
                        <HandIcon
                            style={{ color: '#008000'}}
                        />
                    </Box>
                </Box>
            </Box>
        </Drawer>
    )

}