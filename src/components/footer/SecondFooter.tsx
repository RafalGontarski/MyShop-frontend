import React from 'react';
import Typography from '@mui/material/Typography';

import {
    StyledLinksDiv,
    StyledWhiteLink,
    StyledYouTubeIcon,
    StyledTwitterIcon,
    StyledSecondFooter,
    StyledFacebookIcon,
    StyledInstagramIcon,
    StyledPinterestIcon,
    StyledSocialMediaIconDiv, StyledFaTiktok,
} from "./footer.styles";



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

                <StyledSocialMediaIconDiv>
                    <StyledFacebookIcon />
                    <StyledYouTubeIcon />
                    <StyledInstagramIcon />
                    <StyledTwitterIcon />
                    <StyledPinterestIcon />
                    <StyledFaTiktok />

                </StyledSocialMediaIconDiv>

                <StyledWhiteLink>O nas</StyledWhiteLink>
                <StyledWhiteLink>Kariera</StyledWhiteLink>
                <StyledWhiteLink>Blog</StyledWhiteLink>
                <StyledWhiteLink>Ogłoszenia</StyledWhiteLink>
            </StyledLinksDiv>
            <div>
                <Typography fontSize={12}>© 2023 Copyright reserved.</Typography>
                <Typography fontSize={12}>Będzie Łowione, jedziemy!</Typography>
            </div>
        </StyledSecondFooter>
    );
}
