import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuLink from '../link/CustomLink';
import {useTranslation} from "react-i18next";
import {IconClose, StyledIconClose} from "./Drawer.styles";
import {CategoryContext} from "../../context/CategoryContexts";
import {ProfileDrawerLink} from "./ProfileDrawer.styles";
import {Link} from "react-router-dom";



type DrawerProps = {
    open: boolean;
    onClose: () => void;
};

export const MenuDrawer: React.FC<DrawerProps> = ({ open, onClose }) => {
    const { categories } = useContext(CategoryContext);
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
                <IconClose>
                    <IconButton
                        onClick={onClose}
                        disableRipple
                        sx={{
                            color: '#000000',
                            '&:hover': { color: '#008000' } }}
                    >
                        <StyledIconClose />
                    </IconButton>
                </IconClose>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    marginLeft={5}
                    gap={3}
                >
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
                <Box
                    display="flex"
                    justifyContent="left"
                    alignItems="flex-start"
                    flexDirection="column"
                    marginLeft="2.5rem"
                    marginTop="2.5rem"
                    gap="1.5rem"


                >
                    {categories.map((category) => (
                        <ProfileDrawerLink
                            key={category.name}
                            as={Link}
                            to={`/categories/${category.name}`}  // Przykładowy URL dla kategorii
                            underline="none"
                            onClick={onClose}  // Zamknij szufladę po kliknięciu w kategorię
                        >
                            {category.name}
                        </ProfileDrawerLink>
                    ))}
                </Box>
            </Box>
        </Drawer>
    );
}
