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


// icons
export const StyledFaceBookIcon = styled(FacebookIcon)`
  && {
    font-size: 30px;

    @media (max-width: 1250px) {
      font-size: 20px;
    }
  }
`
export const StyledYouTubeIcon = styled(YouTubeIcon)`
  && {
    font-size: 30px;

    @media (max-width: 1250px) {
      font-size: 20px;
    }
  }
`
export const StyledInstagramIcon = styled(InstagramIcon)`
  && {
    font-size: 30px;

    @media (max-width: 1458px) {
      display: none;
    }

    @media (max-width: 1250px) {
      font-size: 20px;
    }
  }
`
export const StyledTikTokIcon = styled(TikTokIcon)`
  && {
    font-size: 30px;

    @media (max-width: 1595px) {
      display: none;
    }

    @media (max-width: 1250px) {
      font-size: 20px;
    }
  }
`
export const StyledAccountCircle = styled(AccountCircle)`
  && {
    font-size: 30px;
    @media (max-width: 1250px) {
      font-size: 20px;
    }
  }
`
export const StyledFavoriteIcon = styled(FavoriteIcon)`
  && {
    font-size: 30px;
    @media (max-width: 1250px) {
      font-size: 20px;
    }
  }
`
export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  && {
    font-size: 30px;
    @media (max-width: 1250px) {
      font-size: 20px;
    }
  }
`

// main containers
export const NavbarContainer = styled(AppBar)`
  && {
    background-color: #F8F8F8;
  }
`
export const StyledToolbar = styled(Toolbar)`
  && {
      display: flex;
      flex-direction: row;
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

    @media (max-width: 1250px) {
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

    @media (max-width: 1250px) {
      font-size: 0.7rem;
    }
  }
`
export const LeftSideStyledIconButton = styled(IconButton)`
  && {
    color: #000;
    margin-right: 10px;
  }
`
export const StyledMenuButton = styled(IconButton)`
  && {
    color: #000;
    margin-right: 20px;
  }
`
export const StyledMenuIcon = styled(MenuIcon)`
  && {
    font-size: 30px;

    @media (max-width: 1250px) {
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
      gap: 12px;
    }
  }
`
export const MiddleSideLogoContainer = styled.div``
export const MiddleSideSearchContainer = styled.div``
export const MiddleSideImageContainer = styled.img`
  && {
    transition: transform 0.3s ease-in-out;
    width: 170px;
    height: 35px;

    @media (max-width: 1250px) {
      width: 120px;
      height: 27px;
    }
  }
`
export const StyledTextField = styled(TextField)`
  && {
    background-color: #fff;
    border-radius: 10px;
    width: 400px;

    @media (max-width: 1250px) {
      width: 320px;
    }


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
      gap: 18px;
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

    @media (max-width: 1250px) {
      font-size: 0.6rem;
    }

    @media (max-width: 1200px) {
      margin-right: 0;
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

    @media (max-width: 1250px) {
      font-size: 0.6rem;
    }

    @media (max-width: 1200px) {
      display: none;
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
  border-radius: 50%;
  border: 0.15rem solid black;
  width: 23px;
  height: 23px;
  background-color: #F8F8F8;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`
export const RightSideLanguageTypographyStyled = styled(RightSideLanguageTypography)`
  && {
    margin-right: 5px;
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







