import React, {useState} from "react";
import {
    ActionsContainer,
    BreadcrumbContainer,
    LinksContainer,
    SubCatHeaderContainer,
    SubCatBreadcrumbs,
    SubCategoryName,
    SubCatInnerContainer, StyledLink, StyledOtherLink
} from "./CategoryHeader.styles";

import WhiteButton from "../../tools/button/WhiteButton";

import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

interface CategoryHeaderProps {
    categoryName: string;
    subCategoryName?: string;
    hasSecondSubCategories?: boolean;
    // productName?: string;
}

export const SubCategoryHeader: React.FC<CategoryHeaderProps> = ({
                                      categoryName ,
                                      subCategoryName,
                                      hasSecondSubCategories,
                                      // productName
                                }) => {
    // console.log("categoryName:", categoryName);
    // console.log("subCategoryName:", subCategoryName);

    const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setValue(event.target.value as string);
    };


    return (
        <SubCatHeaderContainer>
            <SubCatInnerContainer>
                <BreadcrumbContainer>
                    <SubCatBreadcrumbs hasSubCategories={hasSecondSubCategories}>
                        <StyledLink to="/">
                            <HomeIcon />
                        </StyledLink>

                        <StyledLink to="/categories">Wszystkie Kategorie</StyledLink>
                        <StyledLink to={`/categories/${categoryName}`}>{categoryName}</StyledLink>
                        {subCategoryName && (
                            <>
                                <StyledLink to={`/categories/${categoryName}/${subCategoryName}`}>{subCategoryName}</StyledLink>
                            </>
                        )}
                        {/*{productName && (*/}
                        {/*    <>*/}
                        {/*        <SubCatSpan>{productName}</SubCatSpan>*/}
                        {/*    </>*/}
                        {/*)}*/}
                    </SubCatBreadcrumbs>


                </BreadcrumbContainer>
                <ActionsContainer>
                    <LinksContainer>
                        {/*<SubCategoryName>{productName || subCategoryName || categoryName}</SubCategoryName>*/}
                        <SubCategoryName>{subCategoryName || categoryName}</SubCategoryName>
                    </LinksContainer>
                    <WhiteButton label={'Doradztwo'}/>
                </ActionsContainer>

                <ActionsContainer>
                    <LinksContainer style={{backgroundColor: 'grey'}}>
                        <StyledOtherLink to="#">NOWOŚCI</StyledOtherLink>
                        <StyledOtherLink to="#">MARKI</StyledOtherLink>
                        <StyledOtherLink to="#">WIEDZA</StyledOtherLink>
                        <StyledOtherLink to="#">KONSULTACJE</StyledOtherLink>
                    </LinksContainer>

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
