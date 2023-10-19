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
import {Link} from "react-router-dom";


export const FirstFooter = () => {
    return (
        <StyledFirstFooter position="static">
            <div>
                <h4>Kupuj i płać bezpiecznie</h4>
                <Link to="/helpDesk/securePayments">
                    <StyledIconsDiv>
                        <StyledIcon src={PayPalIcon} alt="PayPal" width={35} height={35}/>
                        <StyledIcon src={VisaIcon} alt="Visa" />
                        <StyledIcon src={MastercardIcon} alt="Mastercard" />
                        <StyledIcon src={MoneyPaymentIcon} alt="PayPal" />
                    </StyledIconsDiv>
                </Link>
                <Typography
                    color={"grey"}
                    marginTop={2}
                    fontSize={11}
                    // width={450}
                >
                    Bezpieczna płatność przez PayPal, Karta kredytowa, Przelew bankowy zagraniczny lub UPS przesyłka pobraniowa.
                </Typography>
            </div>
            <StyledLinksDiv>
                <h4>Twoje korzyści</h4>
                <StyledBlackLink
                    as={Link}
                    to="/helpDesk/threeYearsGuarantee"
                ><StyledCheckIcon />3-letnia Gwarancja</StyledBlackLink>
                <StyledBlackLink
                    as={Link}
                    to="/helpDesk/moneyRefund"
                ><StyledCheckIcon />30-dniowa gwarancja zwrotu pieniędzy</StyledBlackLink>
                <StyledBlackLink
                    as={Link}
                    to="/helpDesk/service"
                ><StyledCheckIcon />Serwis Naprawczy</StyledBlackLink>
                <StyledBlackLink
                    as={Link}
                    to="/helpDesk/contact"
                ><StyledCheckIcon />Porada naszych ekspertów</StyledBlackLink>
                <StyledBlackLink
                    as={Link}
                    to="/helpDesk/guarantee"
                ><StyledCheckIcon />Gwarancja Satysfakcji</StyledBlackLink>
                <StyledBlackLink
                    as={Link}
                    to="/helpDesk/warehouse"
                ><StyledCheckIcon />Duży asortyment</StyledBlackLink>
            </StyledLinksDiv>
            <StyledLinksDiv>
                <h4>Serwis</h4>
                <StyledBlackLink
                    as={Link}
                    to="/helpDesk/delivery"
                >Koszty dostawy i czas oczekiwania</StyledBlackLink>
                <StyledBlackLink>Centrum pomocy</StyledBlackLink>
                <StyledBlackLink>Bony towarowe</StyledBlackLink>
                <StyledBlackLink
                    as={Link}
                    to="/helpDesk/contact"
                >Kontakt</StyledBlackLink>
                <StyledBlackLink>Sklep</StyledBlackLink>
                <StyledBlackLink
                    as={Link}
                    to="/helpDesk/service"
                >Serwis</StyledBlackLink>
            </StyledLinksDiv>
        </StyledFirstFooter>
    );
}
