import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {StyledBlackLink, StyledLinksDiv, StyledSecondFooter, StyledWhiteLink} from "./footer.styles";

export const SecondFooter = () => {
    return (
        <StyledSecondFooter position="static">
            <StyledLinksDiv>
                <StyledWhiteLink>Informacje prawne</StyledWhiteLink>
                <StyledWhiteLink>Ochrona danych osobowych</StyledWhiteLink>
                <StyledWhiteLink>Ustawienia plików cookies</StyledWhiteLink>
                <StyledWhiteLink>Prawo zwrotu</StyledWhiteLink>
                <StyledWhiteLink>Proces zamawiania/umowa kupna</StyledWhiteLink>
                <StyledWhiteLink>Odpowiedzialność cywilna</StyledWhiteLink>
            </StyledLinksDiv>
            <StyledLinksDiv>
                <div>

                </div>
                <StyledWhiteLink>O nas</StyledWhiteLink>
                <StyledWhiteLink>Kariera</StyledWhiteLink>
                <StyledWhiteLink>Blog</StyledWhiteLink>
                <StyledWhiteLink>Ogłoszenia</StyledWhiteLink>
            </StyledLinksDiv>
            <div>
                <Typography fontSize={12} width={450} >© 2023 Copywrite reserved.</Typography>
                <Typography fontSize={12} width={450} >Będzie Łowione, jedziemy!</Typography>
            </div>
        </StyledSecondFooter>
    );
}
