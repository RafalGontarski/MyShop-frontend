import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import MenuLink from '../link/CustomLink';
import {useTranslation} from "react-i18next";
import {IconClose, StyledIconClose} from "./Drawer.styles";
import {CategoryContext} from "../../../models/context/CategoryContexts";
import {ProfileDrawerLink} from "./ProfileDrawer.styles";
import {Link} from "react-router-dom";


export type SelectedMenuType = 'products' | 'service' | 'about' | null;

type DrawerProps = {
    open: boolean;
    onClose: () => void;
};

type MenuDrawerProps = DrawerProps & {
    initialSelectedMenu?: SelectedMenuType;
};

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ open, onClose, initialSelectedMenu = null }) => {
    const { categories } = useContext(CategoryContext);
    const { t } = useTranslation();

    // const [selectedMenu, setSelectedMenu] = useState<SelectedMenuType>(initialSelectedMenu);

    const [selectedMenu, setSelectedMenu] = useState<SelectedMenuType>(null);

    useEffect(() => {
        setSelectedMenu(initialSelectedMenu);
    }, [initialSelectedMenu]);


    console.log("initialSelectedMenu: ", initialSelectedMenu);
    console.log("selectedMenu: ", selectedMenu);


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
                    justifyContent="flex-start"
                    alignItems="center"
                    marginLeft={5}
                    gap={3}
                >
                    <MenuLink
                        href="#"
                        label={t('menu.products.label')}
                        onClick={() => setSelectedMenu('products')}
                    />
                    <MenuLink
                        href="#"
                        label={t('menu.service.label')}
                        onClick={() => setSelectedMenu('service')}
                    />
                    <MenuLink
                        href="#"
                        label={t('menu.about.label')}
                        onClick={() => setSelectedMenu('about')}
                    />
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    marginLeft="2.5rem"
                    marginTop="2.5rem"
                    gap="1.5rem"
                >
                    {selectedMenu === 'products' && categories.map((category) => (
                        <ProfileDrawerLink
                            key={category.name}
                            as={Link}
                            to={`/categories/${category.name}`}
                            underline="none"
                            onClick={onClose}
                        >
                            {category.name}
                        </ProfileDrawerLink>
                    ))}

                    {selectedMenu === 'service' && (
                        // Tutaj możesz wstawić linki dla "service"
                        <ProfileDrawerLink>
                            Serivce Link Example
                        </ProfileDrawerLink>
                    )}

                    {selectedMenu === 'about' && (
                        // Tutaj możesz wstawić linki dla "about"
                        <ProfileDrawerLink>
                            About Link Example
                        </ProfileDrawerLink>
                    )}
                </Box>
            </Box>
        </Drawer>
    );
}
