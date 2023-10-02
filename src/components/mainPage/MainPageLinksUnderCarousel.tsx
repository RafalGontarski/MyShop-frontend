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
                to="/helpDesk/freeShipping"
                underline="none">
                <StyledImg src={ZwrotIcon} alt={'zwrot'}/>
                Dni Zwrotu Pieniędzy</StyledUnderCarouselLink>
            <StyledUnderCarouselLink
                as={Link}
                to="/helpDesk/guarantee"
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

                underline={'none'}>
                <StyledImg src={ObslugaIcon} alt={'obsluga'}/>
                Najlepsza obsługa w Polsce</StyledUnderCarouselLink>
            <StyledUnderCarouselLink

                underline={'none'}>
                <StyledImg src={MagazynIcon} alt={'magazyn'}/>
                Najlepszy Magazyn Dropshippingowy</StyledUnderCarouselLink>
        </StyledLinksContainer>
    )
}