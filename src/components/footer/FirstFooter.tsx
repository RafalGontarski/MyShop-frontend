import React from 'react';
import {
    StyledLinksDiv,
    StyledFirstFooter,
    StyledBlackLink,
    StyledIcon,
    StyledIconsDiv,
    StyledCheckIcon
} from "./footer.styles";
import Typography from "@mui/material/Typography";

// icons
import PayPalIcon from '../../resources/icons/PayPal.png';
import VisaIcon from '../../resources/icons/Visa.png';
import MastercardIcon from '../../resources/icons/MasterCard2.png';
import MoneyPaymentIcon from '../../resources/icons/MoneyPayment.png';


export const FirstFooter = () => {
    return (
        <StyledFirstFooter position="static">
            <div>
                <h4>Kupuj i płać bezpiecznie</h4>
                <StyledIconsDiv>
                    <StyledIcon src={PayPalIcon} alt="PayPal" width={35} height={35}/>
                    <StyledIcon src={VisaIcon} alt="Visa" />
                    <StyledIcon src={MastercardIcon} alt="Mastercard" />
                    <StyledIcon src={MoneyPaymentIcon} alt="PayPal" />
                </StyledIconsDiv>
                <Typography
                    color={"grey"}
                    marginTop={2}
                    fontSize={11}
                    width={450} >
                    Bezpieczna płatność przez PayPal, Karta kredytowa, Przelew bankowy zagraniczny lub UPS przesyłka pobraniowa.
                </Typography>
            </div>
            <StyledLinksDiv>
                <h4>Twoje korzyści</h4>
                <StyledBlackLink><StyledCheckIcon />2-letnia Gwarancja</StyledBlackLink>
                <StyledBlackLink><StyledCheckIcon />30-dniowa gwarancja zwrotu pieniędzy</StyledBlackLink>
                <StyledBlackLink><StyledCheckIcon />Serwis Naprawczy</StyledBlackLink>
                <StyledBlackLink><StyledCheckIcon />Porada naszych ekspertów</StyledBlackLink>
                <StyledBlackLink><StyledCheckIcon />Gwarancja Satysfakcji</StyledBlackLink>
                <StyledBlackLink><StyledCheckIcon />Duży asortyment</StyledBlackLink>
            </StyledLinksDiv>
            <StyledLinksDiv>
                <h4>Serwis</h4>
                <StyledBlackLink>Koszty dostawy i czas oczekiwania</StyledBlackLink>
                <StyledBlackLink>Centrum pomocy</StyledBlackLink>
                <StyledBlackLink>Bony towarowe</StyledBlackLink>
                <StyledBlackLink>Kontakt</StyledBlackLink>
                <StyledBlackLink>Sklep</StyledBlackLink>
                <StyledBlackLink>Serwis</StyledBlackLink>
            </StyledLinksDiv>
        </StyledFirstFooter>
    );
}
