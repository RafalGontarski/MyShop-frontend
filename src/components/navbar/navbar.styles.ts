import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import {InputLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AccountCircle} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import noPhotoUserIcon from "../../resources/icons/noPhotoUserIcon.png";
import Grid from "@mui/material/Grid";


// icons
export const StyledFaceBookIcon = styled(FacebookIcon)`
  && {
    font-size: 30px;

    @media (max-width: 750px) {
      display: none;
    }

    //@media (max-width: 1250px) {
    //  font-size: 20px;
    //}
  }
`
export const StyledYouTubeIcon = styled(YouTubeIcon)`
  && {
    font-size: 30px;

    @media (max-width: 1131px) {
      display: none;
    }

    //@media (max-width: 1250px) {
    //  font-size: 20px;
    //}
  }
`
export const StyledInstagramIcon = styled(InstagramIcon)`
  && {
    font-size: 30px;

    //@media (max-width: 1595px) {
    //  font-size: 20px;
    //}

    @media (max-width: 1458px) {
      display: none;
    }
  }
`
export const StyledTikTokIcon = styled(TikTokIcon)`
  && {
    font-size: 30px;

    //@media (max-width: 1595px) {
    //  font-size: 20px;
    //}

    @media (max-width: 1595px) {
      display: none;
    }
  }
`
export const TikTokIconButton = styled(IconButton)`
  && {
    color: #000;
    margin-right: 10px;

    &:hover {
      color: #C13584;
    }
    
    @media (max-width: 1521px) {
      display: none;
    }
  }
`
export const InstagramIconButton = styled(IconButton)`
  && {
    color: #000;
    margin-right: 10px;

    &:hover {
      color: #C13584;
    }
    
    @media (max-width: 1386px) {
      display: none;
    }
  }
`

export const YouTubeIconButton = styled(IconButton)`
  && {
    color: #000;
    margin-right: 10px;

    &:hover {
      color: #ff0000;
    }
    
    @media (max-width: 1131px) {
      display: none;
    }
  }
`

export const FaceBookIconButton = styled(IconButton)`
  && {
    color: #000;
    margin-right: 10px;

    &:hover {
      color: #3b5998;
    }
    
    @media (max-width: 750px) {
      display: none;
    }
  }
`
export const StyledAccountCircle = styled(AccountCircle)`
  && {
    font-size: 30px;
    @media (max-width: 750px) {
      font-size: 20px;
    }
  }
`
export const StyledFavoriteIcon = styled(FavoriteIcon)`
  && {
    font-size: 30px;
    @media (max-width: 750px) {
      font-size: 20px;
    }
  }
`
export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  && {
    font-size: 30px;
    @media (max-width: 750px) {
      font-size: 20px;
    }
  }
`

// mainPage containers
export const NavbarContainer = styled(AppBar)`
  && {
    background-color: #F8F8F8;
  }
`
export const StyledToolbar = styled(Toolbar)`
  && {
      
      display: flex;
      flex-direction: row;
      //flex-wrap: nowrap;
      justify-content: space-between;
      margin-top: 1%;
      margin-bottom: 1%;
      max-width: 1880px;
      margin-left: 10rem;
      margin-right: 10rem;
      
      @media (max-width: 1350px) {
        margin-left: 4rem;
        margin-right: 4rem;
      }
      @media (max-width: 1100px) {
        margin-left: 1rem;
        margin-right: 1rem;
      }
      @media (max-width: 600px) {
        flex-direction: column;
        margin-left: 5px;
        margin-right: 5px;
      }
  }
`
export const StyledMainGrid = styled(Grid)`
  && {
    @media (max-width: 600px) {
      display: none;
    }
  }
`

// left side
export const LeftSideFullScreenNavbar = styled.div`
  && {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    
    gap: 25px;

    @media (max-width: 1250px) {
      gap: 13px;
    }
    
    @media (max-width: 750px) {
      margin-top: 0.8rem;
      gap: 28px;
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
`

export const LeftSideLinksAndIcons = styled.div``
export const LeftSideMenuIconAndLinks = styled.div``
export const LeftSideStyledLink = styled(Link)`
  && {
    color: #000;
    margin-right: 20px;
    text-decoration: none;
    font-size: 0.8rem;

    &:hover {
      color: #008000;
    }

    @media (max-width: 750px) {
      font-size: 0.6rem;
    }
  }
`
export const LeftSideStyledBoldLink = styled(Link)`
  && {
    color: #000;
    font-weight: bold;
    margin-right: 20px;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      color: #008000;
    }

    //@media (max-width: 1547px) {
    //  font-size: 0.7rem;
    //}

    @media (max-width: 750px) {
      font-size: 0.7rem;
    }
  }
`
export const LeftSideStyledIconButton = styled(IconButton)`
  && {
    color: #000;
    margin-right: 10px;
    
    //@media (max-width: 1450px) {
    //  display: none;
    //}
  }
`
export const StyledMenuButton = styled(IconButton)`
  && {
    color: #000;
    margin-right: 20px;

    &:hover {
      color: #008000;
    }
    
    
    @media (max-width: 600px) {
      margin-right: 0;
    }
  }
`

export const StyledMenuIcon = styled(MenuIcon)`
  && {
    font-size: 30px;

    @media (max-width: 750px) {
      font-size: 20px;
    }
  }
`


// middle side
export const MiddleSideFullScreenNavbar = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0.8rem;
    gap: 20px;

    @media (max-width: 1250px) {
      gap: 15px;
    }
    @media (max-width: 750px) {
      gap: 18px;
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
`
export const MiddleSideLogoContainer = styled.div``
export const LogoLink = styled(Link)``
export const MiddleSideSearchContainer = styled.div``
export const MiddleSideImageContainer = styled.img`
  && {
    transition: transform 0.3s ease-in-out;
    width: 170px;
    height: 35px;
    transform: scale(1);

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 750px) {
      width: 120px;
      height: 27px;
    }

    @media (max-width: 400px) {
      margin-top: 3px;
      width: 105px;
      height: 22px;
    }
  }
`
export const StyledTextField = styled(TextField)`
  && {
    background-color: #fff;
    border-radius: 25px;
    width: 400px;

    @media (max-width: 1550px) {
      width: calc(400px - (80 * (1550px - 100vw) / 300));
    }

    @media (max-width: 1250px) {
      width: 320px;
    }

    @media (max-width: 1135px) {
      width: calc(320px - (120 * (1135px - 100vw) / 235));
    }

    @media (max-width: 900px) {
      width: 200px;
    }

    @media (max-width: 750px) {
      width: calc(200px - (100 * (750px - 100vw) / 160));
      
    }

    //@media (max-width: 600px) {
    //  width: 120px;
    //}

    @media (max-width: 600px) {
      //width: 400px;
      height: 30px;
      width: calc(400px - (150 * (600px - 100vw) / 250));

    }


    //@media (max-width: 600px) {
    //  width: 120px;
    //}


    & .MuiOutlinedInput-root {
      & fieldset {
        border: none;
      }
    }

    & .MuiInputBase-root {
      font-size: 0.9rem;
      padding: 12px;
      height: 40px;

      @media (max-width: 1250px) {
        font-size: 0.65rem;
        padding: 16px;
        height: 25px;
      }
    }
  }
`
export const StyledInputLabel = styled(InputLabel)`
  && {
    text-align: center;
    font-size: 0.8rem;

    @media (max-width: 1250px) {
      font-size: 0.7rem;
    }
  }
`

// right side
export const RightSideFullScreenNavbar = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 0.8rem;
    gap: 35px;

    
    
    @media (max-width: 1250px) {
      gap: 26px;
    }

    @media (max-width: 600px) {
      display: none;
    }
  }
`
export const RightSideLinksContainer = styled.div``
export const RightSideIconsContainer = styled.div`
  && {
    display: flex;
  }
`
export const RightSideFreeShippingLink = styled(Link)`
  && {
    color: #000;
    font-size: 0.8rem;
    margin-right: 20px;

    &:hover {
      color: #008000;
    }

    @media (max-width: 1390px) {
      margin-right: 0;
    }

    @media (max-width: 750px) {
      font-size: 0.6rem;
    }

    
  }
`
export const StyledRightSideFreeShippingLink = styled(RightSideFreeShippingLink)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: #008000;
  }
  
`
export const RightSideStyledLink = styled(Link)`
  && {
    color: #000;
    margin-right: 20px;
    text-decoration: none;
    font-size: 0.8rem;

    @media (max-width: 1250px) {
      font-size: 0.6rem;
    }
  }
`
export const RightSideGuaranteeLink = styled(Link)`
  && {
    color: #000;
    font-size: 0.8rem;
    

    &:hover {
      color: #008000;
    }

    @media (max-width: 1390px) {
      display: none;
    }

    @media (max-width: 1250px) {
      font-size: 0.6rem;
    }
  }
`
export const StyledRightSideGuaranteeLink = styled(RightSideGuaranteeLink)`
    
    color: #000;
    text-decoration: none;

    &:hover {
        color: #008000;
    }
`
export const RightSideLanguageIcon = styled(IconButton)`
  && {
    color: #000;
    margin-right: 20px;
    font-size: 0.8rem;
  
    @media (max-width: 1250px) {
      margin-right: 10px;
    font-size: 0.6rem;
    }
  }
`
export const RightSideLanguageTypography = styled(Typography)`
  && {
    font-size: 0.8rem;
    @media (max-width: 1250px) {
      font-size: 0.6rem;
    }
  }
`
export const IconContainer = styled.div`
  && {
    border-radius: 50%;
    border: 0.1rem solid black;
    width: 24px;
    height: 24px;
    background-color: #F8F8F8;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    padding: 0;              // Resetowanie paddingu

    & > svg, & > img {
      width: 22px;
      height: 22px;
    }

    @media (max-width: 750px) {
      width: 17px;
      height: 17px;
      margin-left: 3px; // Zmniejszono margines
      
      & > svg, & > img {
        width: 15px;
        height: 15px;
      }
    }
  }
`
export const RightSideLanguageTypographyStyled = styled(RightSideLanguageTypography)`
  && {
    margin-right: 5px;
    @media (max-width: 750px) {
      font-size: xx-small;
    }
  }
`
export const RightSideLanguageIconStyled = styled(RightSideLanguageIcon)`
  && {
    &:hover ${IconContainer}, &:hover ${RightSideLanguageTypographyStyled} {
      border-color: #008000;
      color: #008000;
    }
  }
`
export const RightSideMiddleIcon = styled(IconButton)`
  && {
    color: #000;
    margin-right: 20px;
    @media (max-width: 1250px) {
      margin-right: 10px;
    }
  }
`
export const StyledRightSideMiddleIcon = styled(RightSideMiddleIcon)`
  && {
    color: #000;

    &:hover {
      color: #008000;
    }
  }
`;
export const RightSideLastIcon = styled(IconButton)`
  && {
    color: #000;
  }
`
export const StyledRightSideLastIcon = styled(RightSideLastIcon)`
  && {
    color: #000;

    &:hover {
      color: #008000;
    }
  }
`;
export const ProfileImagePlaceholder = styled.div`
  && {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #000; // Możesz dostosować kolor obramowania według własnych potrzeb
    background-color: #F8F8F8; // Możesz dostosować kolor tła według własnych potrzeb
    background-image: url(${noPhotoUserIcon});
    background-size: cover;
    background-position: center;
    &:hover {
      border: 1px solid #008000;
    }

    
    @media (max-width: 750px) {
      width: 17px;
      height: 17px;
    }
    
  }
`

// wraper
export const SmallScreenNavbar = styled.div`
  && {
    display: none;

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column; // Zmieniono na column
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      height: 100%;
      width: 100%;
    }
  }
`

export const UpNavWraperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const DownNavWraperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const LeftElement = styled.div`
  justify-content: flex-start;
  margin-top: 5px;
`

export const RightElement = styled.div`
  justify-content: flex-end;
`






