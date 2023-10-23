import React, {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {
    ActionsContainer,
    BreadcrumbContainer,
    LinksContainer,
    SecondSubCatBreadcrumbs, SecondSubCategoryName,
    SecondSubCatHeaderContainer,
    SecondSubCatInnerContainer,
    StyledLink, StyledProductLink,
} from "./CategoryHeader.styles";
import HomeIcon from "@mui/icons-material/Home";
import WhiteButton from "../../tools/button/WhiteButton";
import FilterIcon from "@mui/icons-material/FilterList";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";

interface CategoryHeaderProps {
    categoryName: string;
    subCategoryName?: string;
    secondSubCategoryName?: string;
    productName?: string;
}

export const SecondSubCategoryHeader: React.FC<CategoryHeaderProps> = ({
             categoryName ,
             subCategoryName,
             secondSubCategoryName,
             productName
                                                                 }) => {
    // console.log("categoryName:", categoryName);
    // console.log("subCategoryName:", subCategoryName);
    // console.log("secondSubCategoryName:", secondSubCategoryName);


    const [value, setValue] = useState('');
    const { t } = useTranslation();
    const handleChange = (event: SelectChangeEvent<string>) => {
        setValue(event.target.value as string);
    };

    const getTranslationKey = (
        categoryName: string,
        subCategoryName: string | undefined | null,
        secondSubCategoryName: string | undefined | null
    ): string => {
        if (secondSubCategoryName) {
            // Jeśli secondSubCategoryName istnieje, uzyskaj tłumaczenie dla secondSubCategories
            return `secondSubCategories.${secondSubCategoryName}`;
        } else if (subCategoryName) {
            // Jeśli subCategoryName istnieje, ale secondSubCategoryName nie, uzyskaj tłumaczenie dla subCategories
            return `subCategories.${subCategoryName}`;
        } else {
            // W przeciwnym razie uzyskaj tłumaczenie dla categoryHeader.breadCrumbs
            return `categoryHeader.breadCrumbs.${categoryName}`;
        }
    };


    return (
        <SecondSubCatHeaderContainer>
            <SecondSubCatInnerContainer>
                <BreadcrumbContainer>
                    <SecondSubCatBreadcrumbs >
                        <StyledProductLink
                            to="/">
                            <HomeIcon />
                        </StyledProductLink>

                        <StyledProductLink
                            to="/categories">{t(`categoryHeader.breadCrumbs.allCategories`)}</StyledProductLink>
                        <StyledProductLink
                            to={`/categories/${categoryName}`}>{t(`categoryHeader.breadCrumbs.${categoryName}`)}</StyledProductLink>
                        {subCategoryName && (
                            <>
                                <StyledProductLink
                                    to={`/categories/${categoryName}/${subCategoryName}`}>{t(`subCategories.${subCategoryName}`)}</StyledProductLink>
                            </>
                        )}
                        {secondSubCategoryName && (
                            <>
                                <StyledProductLink
                                    to={`/categories/${categoryName}/${subCategoryName}/${secondSubCategoryName}`}>{t(`secondSubCategories.${secondSubCategoryName}`)}</StyledProductLink>
                            </>
                        )}
                        {productName && (
                            <>
                                <StyledProductLink
                                    to={`/categories/${categoryName}/${subCategoryName}/${secondSubCategoryName}/${productName}`}>{productName}</StyledProductLink>
                            </>
                            // <>
                            //     <SubCatSpan>{productName}</SubCatSpan>
                            // </>
                        )}
                    </SecondSubCatBreadcrumbs>


                </BreadcrumbContainer>
                <ActionsContainer>
                    <LinksContainer>
                        <SecondSubCategoryName>{productName || t(getTranslationKey(categoryName, subCategoryName, secondSubCategoryName))}</SecondSubCategoryName>
                    </LinksContainer>
                    <WhiteButton label={t(`categoryHeader.buttons.consulting`)}/>
                </ActionsContainer>

                <ActionsContainer>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 5,
                        // marginBottom: '1rem'
                    }}>
                        <FilterIcon style={{color: 'black'}}/>
                        <Typography style={{color: 'black'}}>Filtr</Typography>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 5,
                        marginBottom: '1rem'
                    }}>
                        <FormControl variant="standard">
                            <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={value}
                                onChange={handleChange}
                                label="Wybór"
                                sx={{
                                    '& .MuiInput-underline:before': {
                                        borderBottom: 'none',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottom: 'none',
                                    },
                                }}
                            >
                                <MenuItem value={0} sx={{ '&.Mui-selected': { backgroundColor: 'transparent' } }}>dowolność</MenuItem>
                                <MenuItem value={10} sx={{ '&.Mui-selected': { backgroundColor: 'transparent' } }}>najtańsze</MenuItem>
                                <MenuItem value={20} sx={{ '&.Mui-selected': { backgroundColor: 'transparent' } }}>najdroższe</MenuItem>
                                <MenuItem value={30} sx={{ '&.Mui-selected': { backgroundColor: 'transparent' } }}>najwyżej oceniane</MenuItem>
                                <MenuItem value={40} sx={{ '&.Mui-selected': { backgroundColor: 'transparent' } }}>najnowsze produkty w pierwszej kolejności</MenuItem>
                                <MenuItem value={50} sx={{ '&.Mui-selected': { backgroundColor: 'transparent' } }}>alfabetycznie (A - Z)</MenuItem>
                                <MenuItem value={60} sx={{ '&.Mui-selected': { backgroundColor: 'transparent' } }}>alfabetycznie (Z - A)</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </ActionsContainer>
            </SecondSubCatInnerContainer>
        </SecondSubCatHeaderContainer>
    );
};
