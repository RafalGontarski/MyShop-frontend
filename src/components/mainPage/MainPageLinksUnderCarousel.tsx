import {Link} from "react-router-dom";
import {StyledImg, StyledLinksContainer, StyledUnderCarouselLink} from "./mainPage.styles";

// Icons
import ZwrotIcon from '../../resources/icons/IconsNextToLinksUnderCarousel/Zwrot.png';
import GwarancjaIcon from '../../resources/icons/IconsNextToLinksUnderCarousel/Gwarancja.png';
import TransportIcon from '../../resources/icons/IconsNextToLinksUnderCarousel/Transport.png';
import ObslugaIcon from '../../resources/icons/IconsNextToLinksUnderCarousel/Obsługa.png';
import MagazynIcon from '../../resources/icons/IconsNextToLinksUnderCarousel/Magazyn.png';

export const MainPageLinksUnderCarousel = () => {
    return (
        <StyledLinksContainer>
            <StyledUnderCarouselLink
                as={Link}
                to="/helpDesk/moneyRefund"
                underline="none">
                <StyledImg src={ZwrotIcon} alt={'zwrot'}/>
                Dni Zwrotu Pieniędzy</StyledUnderCarouselLink>
            <StyledUnderCarouselLink
                as={Link}
                to="/helpDesk/threeYearsGuarantee"
                underline="none">
                <StyledImg src={GwarancjaIcon} alt={'gwarancja'}/>
                Lata Gwarancji</StyledUnderCarouselLink>
            <StyledUnderCarouselLink
                as={Link}
                to="/helpDesk/freeShipping"
                underline={'none'}>
                <StyledImg src={TransportIcon} alt={'transport'}/>
                Darmowa Wysyłka od 300 zł</StyledUnderCarouselLink>
            <StyledUnderCarouselLink
                as={Link}
                to="/helpDesk/service"
                underline={'none'}>
                <StyledImg src={ObslugaIcon} alt={'obsluga'}/>
                Najlepsza obsługa w Polsce</StyledUnderCarouselLink>
            <StyledUnderCarouselLink
                as={Link}
                to="/helpDesk/warehouse"
                underline={'none'}>
                <StyledImg src={MagazynIcon} alt={'magazyn'}/>
                Najlepszy Magazyn Dropshippingowy</StyledUnderCarouselLink>
        </StyledLinksContainer>
    )
}