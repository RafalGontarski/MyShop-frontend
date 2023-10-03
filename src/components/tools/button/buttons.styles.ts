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

