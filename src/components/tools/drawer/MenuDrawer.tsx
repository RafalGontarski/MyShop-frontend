import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import MenuLink from '../link/CustomLink';
import {useTranslation} from "react-i18next";
import {IconClose, StyledDrawer, StyledIconClose} from "./Drawer.styles";
import {CategoryContext} from "../../../models/context/CategoryContexts";
import {ProfileDrawerLink, ProfileLine} from "./ProfileDrawer.styles";
import {Link} from "react-router-dom";
import SubCategoryType from "../../../models/types/SubCategoryType";
import {CategoryApi} from "../../../api/CategoryApi";
import CategoryType from "../../../models/types/CategoryType";


export type SelectedMenuType = 'products' | 'service' | 'about' | null;

type DrawerProps = {
    open: boolean;
    onClose: () => void;
};

type MenuDrawerProps = DrawerProps & {
    initialSelectedMenu?: SelectedMenuType;
};

type Category = {
    name: string;
    subcategories?: Array<string>; // Załóżmy, że podkategorie są po prostu tablicą stringów
};


export const MenuDrawer: React.FC<MenuDrawerProps> = ({ open, onClose, initialSelectedMenu = null }) => {
    const { categories } = useContext(CategoryContext);
    const [subCategories, setSubCategories] = useState<SubCategoryType[]>([]);


    const { t } = useTranslation();

    // const [selectedMenu, setSelectedMenu] = useState<SelectedMenuType>(initialSelectedMenu);

    const [selectedMenu, setSelectedMenu] = useState<SelectedMenuType>(null);
    const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);


    const handleCategoryClick = async (categoryId: number) => {
        setSelectedCategoryId(categoryId);
        // Jeśli potrzebujesz również ustawić cały obiekt kategorii, możesz to zrobić tutaj.
        try {
            const fetchedSubCategories = await CategoryApi.getAllSubCategories(categoryId);
            setSubCategories(fetchedSubCategories);
        } catch (error) {
            console.error("Error while fetching subcategories:", error);
        }
    };


    useEffect(() => {
        if (selectedCategoryId !== null) {
            const fetchSubCategories = async () => {
                try {
                    const fetchedSubCategories = await CategoryApi.getAllSubCategories(selectedCategoryId);
                    setSubCategories(fetchedSubCategories);
                } catch (error) {
                    console.error("Error while fetching subcategories:", error);
                }
            };
            fetchSubCategories();
        }
    }, [selectedCategoryId]);




    useEffect(() => {
        setSelectedMenu(initialSelectedMenu);
    }, [initialSelectedMenu]);


    console.log("initialSelectedMenu: ", initialSelectedMenu);
    console.log("selectedMenu: ", selectedMenu);


    return (
        <StyledDrawer
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
                        label={t('menu.categories.label')}
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
                    {selectedMenu === 'products' && (
                        <>
                            {selectedCategory ? (
                                <>
                                    <ProfileDrawerLink
                                        onClick={() => setSelectedCategory(null)}
                                        style={{fontWeight: 'normal'}}
                                    >
                                        Wróć do wszystkich kategorii
                                    </ProfileDrawerLink>
                                    {subCategories.map(subCategory => (
                                        <ProfileDrawerLink
                                            key={subCategory.id} // Zakładam, że SubCategoryType ma pole id
                                            as={Link}
                                            to={`/categories/${selectedCategory}/subcategories/${subCategory.id}`} // Zakładam, że to jest prawidłowy URL
                                            underline="none"
                                            onClick={onClose}
                                        >
                                            {subCategory.name}
                                        </ProfileDrawerLink>
                                    ))}


                                </>
                            ) : (
                                <>
                                    {categories.map(category => (
                                        <ProfileDrawerLink
                                            key={category.name}
                                            // as={Link}
                                            // to={`/categories/${category.name}`}
                                            underline="none"
                                            onClick={() => {
                                                handleCategoryClick((category as any).categoryId);
                                                setSelectedCategory(category);
                                            }}
                                        >
                                            {category.name}
                                        </ProfileDrawerLink>
                                    ))}

                                    <ProfileLine />

                                    <ProfileDrawerLink
                                        as={Link}
                                        to={"/hotDeals"}
                                        onClick={onClose}
                                    >
                                        Hot Deals
                                    </ProfileDrawerLink>
                                    <ProfileDrawerLink
                                        as={Link}
                                        to={"/newest"}
                                        onClick={onClose}
                                    >
                                        Nowości
                                    </ProfileDrawerLink>
                                    <ProfileDrawerLink
                                        as={Link}
                                        to={"/topSeller"}
                                        onClick={onClose}
                                    >
                                        Bestsellery
                                    </ProfileDrawerLink>
                                    <ProfileDrawerLink
                                        as={Link}
                                        to={"/occasions"}
                                        onClick={onClose}
                                    >
                                        Okazje
                                    </ProfileDrawerLink>

                                    <ProfileLine />

                                    <ProfileDrawerLink
                                        as={Link}
                                        to={"/occasions"}
                                        onClick={onClose}
                                    >
                                        Bon upominkowy
                                    </ProfileDrawerLink>
                                </>
                            )}
                        </>
                    )}



                    {selectedMenu === 'service' && (
                        // Tutaj możesz wstawić linki dla "service"
                        <>
                            <ProfileDrawerLink>
                                Kontakt
                            </ProfileDrawerLink>
                            <ProfileDrawerLink>
                                Często zadawane pytania
                            </ProfileDrawerLink>
                            <ProfileDrawerLink>
                                Koszt dostaw i czas oczekiwania
                            </ProfileDrawerLink>
                            <ProfileDrawerLink>
                                Zwrot produktu
                            </ProfileDrawerLink>
                            <ProfileDrawerLink>
                                Atuty
                            </ProfileDrawerLink>
                        </>
                    )}

                    {selectedMenu === 'about' && (
                        // Tutaj możesz wstawić linki dla "about"
                        <>
                            <ProfileDrawerLink>
                                Informacje o firmie
                            </ProfileDrawerLink>
                            <ProfileDrawerLink>
                                Nasze działy specjalistyczne
                            </ProfileDrawerLink>
                            <ProfileDrawerLink>
                                Nasz wędkarski wszechświat
                            </ProfileDrawerLink>
                            <ProfileDrawerLink>
                                Drobnym druczkiem
                            </ProfileDrawerLink>
                        </>

                    )}
                </Box>
            </Box>
        </StyledDrawer>
    );
}
