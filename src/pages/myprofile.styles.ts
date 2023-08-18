import styled from "styled-components";
import {Box} from "@mui/system";
import IconButton from "@mui/material/IconButton";

export const MyProfileContainer = styled.div`
  display: flex;
`
export const MyProfileLeftContainer = styled(Box)`
  && {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 9%;
    margin-top: 1.5rem;


    @media (max-width: 1350px) {
      margin-left: 6.3%;
    }
    @media (max-width: 1100px) {
      margin-left: 3.5%;
    }

    @media (max-width: 940px) {
      display: none;
    }
  }
`
export const MyProfileComponents = styled.div`

`
export const MyProfileCenterText = styled.div`
    flex-grow: 1; // pozwala na rozciągnięcie tekstu, aby wypełnić dostępną przestrzeń
    text-align: left; // wyrównuje tekst do lewej strony
    //padding-left: 20px; // dodaje trochę odstępu od lewej krawędzi
    font-size: 1.5rem; // możesz dostosować rozmiar czcionki według potrzeb
    font-weight: bold;
    margin-bottom: 1rem;
`
export const Container = styled.div`
  && {
    display: flex;
    margin-left: 5%;
    //margin-right: 5%;
    border: 1px solid #000;
    border-radius: 1px;
  }
`
export const TitleContainer = styled.div`
    //margin-top: 1%;
    margin-left: 20%;
`
export const Title = styled.h1`
    font-size: xxx-large;
`

// wrapper
export const MenuWrapper = styled(Box)`
  && {
    display: none;
    @media (max-width: 940px) {
      display: flex;
    }
  }
`
export const WrapperMenuButton = styled(IconButton)`
  && {
    color: #000;
    margin-right: 20px;
    @media (max-width: 600px) {
      margin-right: 0;
    }
  }
`