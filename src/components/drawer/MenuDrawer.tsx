import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuLink from '../link/CustomLink';
import {useTranslation} from "react-i18next";



type DrawerProps = {
    open: boolean;
    onClose: () => void;
};

export const MenuDrawer: React.FC<DrawerProps> = ({ open, onClose }) => {
    const { t } = useTranslation();

    return (
        <Drawer
            anchor={'left'}
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
                    display="flex"
                    justifyContent="flex-start"
                    marginLeft={5}>
                    <MenuLink
                        href={"#"}
                        label={t('menu.products.label')}
                        onClick={undefined}
                    />
                    <MenuLink
                        href={"#"}
                        label={t('menu.service.label')}
                        onClick={undefined}
                    />
                    <MenuLink
                        href={"#"}
                        label={t('menu.about.label')}
                        onClick={undefined}/>
                </Box>
            </Box>
        </Drawer>
    );
}
