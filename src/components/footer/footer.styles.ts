import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import MuiLink from "@mui/material/Link";
import CheckIcon from "@mui/icons-material/Check";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import {FaTiktok} from "react-icons/fa";


export const StyledFirstFooter = styled(AppBar)`
  && {
    background-color: #f3f3f3;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: row;

    @media (max-width: 840px) {
      flex-direction: column;
    }

    > div {  // Stylizacja bezpośrednich potomków typu div
      margin-left: 40px;
      margin-right: 40px;
      color: black; // Kolor tekstu
      margin-bottom: 2rem;

      //h4 {  // Jeśli chcesz zmienić kolor tylko dla elementów h4 w kontenerze
      //  color: black;
      //}
    }
  }
`;

export const StyledSecondFooter = styled(AppBar)`
  && {
    background-color: #1c1c1c;
    display: flex;
    justify-content: center;
    flex-direction: row;

    @media (max-width: 840px) {
      flex-direction: column;
    }

    > div {  // Stylizacja bezpośrednich potomków typu div
      margin-bottom: 2rem;
      margin-top: 2rem;
      margin-left: 40px;
      margin-right: 40px;
      color: white; // Kolor tekstu
      

      //h4 {  // Jeśli chcesz zmienić kolor tylko dla elementów h4 w kontenerze
      //  color: black;
      //}
    }
  }
`;

export const StyledLinksDiv = styled.div`
  && {
    display: flex;
    flex-direction: column;
  }
`

export const StyledIconsDiv = styled.div`
  && {
    display: flex;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;
  }
`

export const StyledSocialMediaIconDiv = styled.div`
  && {
    margin-bottom: 1rem;
    & > * {  // Dla każdego bezpośredniego potomka
      padding-right: 10px; 
    }
  }
`


export const StyledBlackLink = styled(MuiLink)`
  && {
    color: black;
    text-decoration: none;
    font-size: 0.8rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    cursor: pointer;

    &:hover {
      color: #008000;
    }

    @media (max-width: 840px) {
      font-size: 0.6rem;
    }
  }
`

export const StyledWhiteLink = styled(MuiLink)`
  && {
    color: #b4b4b4;
    text-decoration: none;
    font-size: 0.8rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    cursor: pointer;

    &:hover {
      color: #fff;
    }

    @media (max-width: 840px) {
      font-size: 0.6rem;
    }
  }
`;

export const StyledIcon = styled.img`
  && {
    padding-right: 4rem;
  }
`

export const StyledCheckIcon = styled(CheckIcon)`
  && {
    width: 19px;
    height: 19px;
    position: relative;
    top: 4px;
    margin-right: 3px;
  }
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
  && {
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
`

export const StyledYouTubeIcon = styled(YouTubeIcon)`
  && {
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`

export const StyledInstagramIcon = styled(InstagramIcon)`
  && {
    cursor: pointer;
    &:hover {
      color: deeppink;
    }
  }
`

export const StyledTwitterIcon = styled(TwitterIcon)`
  && {
    cursor: pointer;
    &:hover {
      color: deepskyblue;
    }
  }
`

export const StyledPinterestIcon = styled(PinterestIcon)`
  && {
    cursor: pointer;
    &:hover {
      color: darkred;
    }
  }
`
export const StyledFaTiktok = styled(FaTiktok)`
  && {
    cursor: pointer;
    font-size: 21px;
    
    &:hover {
      color: red;
    }
  }
`




