import React, {useState} from "react";
import {
    ActionsContainer,
    BreadcrumbContainer,
    LinksContainer,
    SubCatHeaderContainer,
    SubCatBreadcrumbs,
    SubCatSpan,
    SubCategoryName,
    SubCatInnerContainer
} from "./CategoryHeader.styles";
import {Link} from "react-router-dom";
import WhiteButton from "../../tools/button/WhiteButton";
import FilterIcon from '@mui/icons-material/FilterList';
import Typography from "@mui/material/Typography";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

interface CategoryHeaderProps {
    categoryName: string;
    subCategoryName?: string;
    productName?: string;
}

export const SubCategoryHeader: React.FC<CategoryHeaderProps> = ({
                                      categoryName ,
                                      subCategoryName,
                                      productName
                                }) => {
    console.log("categoryName:", categoryName);
    console.log("subCategoryName:", subCategoryName);

    const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setValue(event.target.value as string);
    };


    return (
        <SubCatHeaderContainer>
            <SubCatInnerContainer>
                <BreadcrumbContainer>
                    <SubCatBreadcrumbs>
                        <Link to="/">powrót</Link>
                        <SubCatSpan>{"> "}</SubCatSpan>
                        <Link to="/categories">Wszystkie Kategorie</Link>
                        <SubCatSpan>{"> "}</SubCatSpan>
                        <Link to={`/categories/${categoryName}`}>{categoryName}</Link>
                        {subCategoryName && (
                            <>
                                <SubCatSpan>{"> "}</SubCatSpan>
                                <Link to={`/categories/${categoryName}/${subCategoryName}`}>{subCategoryName}</Link>
                            </>
                        )}
                        {productName && (
                            <>
                                <SubCatSpan>{"> "}</SubCatSpan>
                                <SubCatSpan>{productName}</SubCatSpan>
                            </>
                        )}
                    </SubCatBreadcrumbs>


                </BreadcrumbContainer>
                <ActionsContainer>
                    <LinksContainer>
                        <SubCategoryName>{productName || subCategoryName || categoryName}</SubCategoryName>
                    </LinksContainer>
                    <WhiteButton label={'Doradztwo'}/>
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

            </SubCatInnerContainer>
        </SubCatHeaderContainer>
    );
};
