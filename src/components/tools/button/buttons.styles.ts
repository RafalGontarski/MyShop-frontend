import styled from 'styled-components';
import Button from '@mui/material/Button';


export const StyledButton = styled(Button)`
  && {
    //display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-top: 1rem;
    background-color: #000;
    padding: 0.5em 1em; // Dodaje elastyczny padding do przycisku
    //height: 40px;
    position: relative;
    border-radius: 1.5rem;
    text-decoration: none; // Usuwa podkreślenie linku
    color: #fff; // Dziedziczy kolor tekstu z rodzica
    display: inline-flex;
    &:hover {
      //background-image: linear-gradient(to right, blue, green);
      background-color: green;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
`;

export const StyledAddToBasketButton = styled(Button)`
  && {
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: larger;
    margin-top: 1rem;
    background-color: #000;
    padding: 0.5em 1em; // Dodaje elastyczny padding do przycisku
    //height: 40px;
    position: relative;
    border-radius: 2rem;
    text-decoration: none; // Usuwa podkreślenie linku
    color: #fff; // Dziedziczy kolor tekstu z rodzica
    display: inline-flex;
    width: 80%;
    margin-left: 10px;
    &:hover {
      //background-image: linear-gradient(to right, blue, green);
      background-color: green;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    @media (max-width: 1184px) {
      scroll-padding: 0;
      font-size: medium;
    }
    @media (max-width: 940px) {
      font-size: small;
    }
  }
`;

export const StyledNewStorageButton = styled(Button)`
  && {
    text-transform: none;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: large;
    margin-top: 1rem;
    background-color: #000;
    padding: 0.5em 1rem 0.5rem 1rem; // Dodaje elastyczny padding do przycisku
    //height: 40px;
    position: relative;
    border-radius: 2rem;
    text-decoration: none; // Usuwa podkreślenie linku
    color: #fff; // Dziedziczy kolor tekstu z rodzica
    display: inline-flex;
    width: 40%;
    &:hover {
      //background-image: linear-gradient(to right, blue, green);
      background-color: green;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    @media (max-width: 1184px) {
      scroll-padding: 0;
    }
    @media (max-width: 940px) {
    }
  }
`;

export const StyledAllProductsButton = styled(Button)`
  && {
    text-transform: none;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: large;
    margin-top: 1rem;
    background-color: #000;
    padding: 0.5em 1rem 0.5rem 1rem; // Dodaje elastyczny padding do przycisku
    //height: 40px;
    position: relative;
    border-radius: 2rem;
    text-decoration: none; // Usuwa podkreślenie linku
    color: #fff; // Dziedziczy kolor tekstu z rodzica
    display: inline-flex;
    width: 30%;
    &:hover {
      //background-image: linear-gradient(to right, blue, green);
      background-color: green;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    @media (max-width: 1184px) {
      scroll-padding: 0;
    }
    @media (max-width: 940px) {
    }
  }
`;

export const StyledDeleteStorageButton = styled(Button)`
  && {
    text-transform: none;
    justify-content: center;
    align-items: center;
    font-size: large;
    margin-top: 1rem;
    background-color: #fff;
    padding: 0.5em 1rem 0.5rem 1rem; // Dodaje elastyczny padding do przycisku
    //height: 40px;
    position: relative;
    border-radius: 2rem;
    border: 1px solid #000;
    text-decoration: none; // Usuwa podkreślenie linku
    color: #000; // Dziedziczy kolor tekstu z rodzica
    display: inline-flex;
    width: 20%;
    box-shadow: none;
    &:hover {
      //background-image: linear-gradient(to right, blue, green);
      background-color: #fff;
      border: 1px solid green;
      color: green;
      box-shadow: none;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    @media (max-width: 1184px) {
      scroll-padding: 0;
      font-size: medium;
    }
    @media (max-width: 940px) {
      font-size: small;
    }
  }
`;

export const QuantitySelectorButton = styled(Button)`
  && {
    justify-content: center;
    align-items: center;
    font-size: larger;
    margin-top: 1rem;
    background-color: rgba(0,0,0,0.1);
    padding: 0.5em 1em; // Dodaje elastyczny padding do przycisku
    //height: 40px;
    position: relative;
    border-radius: 2rem;
    text-decoration: none; // Usuwa podkreślenie linku
    color: #000; // Dziedziczy kolor tekstu z rodzica
    display: inline-flex;
    &:hover {
      //background-image: linear-gradient(to right, blue, green);
      background-color: lightgrey;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    @media (max-width: 1184px) {
      font-size: medium;
    }

    @media (max-width: 940px) {
      font-size: small;
    }
  }
`;

export const StyledWhiteButton = styled(Button)`
  && {
    //display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    //margin-top: 1rem;
    background-color: #fff;
    padding: 0.5em 1em; // Dodaje elastyczny padding do przycisku
    //height: 40px;
    position: relative;
    border-radius: 1.5rem;
    text-decoration: none; // Usuwa podkreślenie linku
    color: #000; // Dziedziczy kolor tekstu z rodzica
    display: inline-flex;

    &:hover {
      background-color: #fff; // Ustawia tło na białe podczas najechania
      color: green; // Zmienia kolor tekstu na zielony podczas najechania
    }
    
    //&:hover {
    //  background-image: linear-gradient(to right, blue, green);
    //
    //  &::after {
    //    content: "";
    //    position: absolute;
    //    bottom: 0;
    //    left: 0;
    //    right: 0;
    //  }
    //}
  }
`;

export const StyledLinkButton = styled(Button)`
  && {
    //display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-top: 1rem;
    background-color: #000;
    padding: 0.7em 1em; // Dodaje elastyczny padding do przycisku
    //height: 30px;
    position: relative;
    border-radius: 1.5rem;
    text-decoration: none; // Usuwa podkreślenie linku
    color: #fff; // Dziedziczy kolor tekstu z rodzica
    display: inline-flex;
    &:hover {
      background-image: linear-gradient(to right, blue, green);

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
`;



export const StyledCategoryNavbarLinkButton = styled(Button)`
  && {
    //display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    //margin-top: 1rem;
    background-color: #000;
    padding: 0.4em 1em; // Dodaje elastyczny padding do przycisku
    //height: 30px;
    position: relative;
    border-radius: 0.7rem;
    text-decoration: none; // Usuwa podkreślenie linku
    color: #fff; // Dziedziczy kolor tekstu z rodzica
    display: inline-flex;
    &:hover {
      //background-image: linear-gradient(to right, blue, green);
      background-color: green;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
`;

export const GoogleStyledButton = styled(Button)`
  && {
    font-weight: initial;
    margin-top: 1rem;
    background-color: #fff;
    color: #000;
    height: 40px;
    position: relative;
    border-radius: 1.5rem;

    &:hover {
      background-image: linear-gradient(to right, darkgray);
      color: #fff;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
`;

