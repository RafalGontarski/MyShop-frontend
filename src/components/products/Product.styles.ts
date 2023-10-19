import styled from "styled-components";
import {Card, CardMedia, CardMediaProps, Rating} from "@mui/material";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";


export const CardContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export const StyledDisplayContainer = styled.div`
  && {
    display: flex;
    flex-direction: row;
    margin-left: 11rem;
    margin-right: 11rem;
    margin-top: 1.5rem;

    @media (max-width: 1350px) {
      margin-left: 5rem;
      margin-right: 5rem;
    }
    @media (max-width: 1100px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }

    @media (max-width: 600px) {
      margin-left: 1.8rem;
      margin-right: 1.8rem;
    }
  }
`

export const StyledCard = styled(Card)`
  && {
    position: relative;
    border: none;
    box-shadow: none;
  }
`

interface MyCardMediaProps extends CardMediaProps {
    alt?: string;
}

export const StyledCardMedia: React.FC<MyCardMediaProps> = styled(CardMedia)`
  && {
    background: #f3f3f3;
    position: relative;
    width: 100%;  // Zajmuje 100% szerokości kontenera
    padding-bottom: 100%;  // Ustala wysokość jako procent szerokości, aby utrzymać proporcje 1:1
    overflow: hidden;

    && img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform .2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const ZoomImage = styled.img`
  transition: transform .2s;
  height: 100%;
  width: 100%;
  object-fit: cover;
  
  
`;

export const StyledHeart = styled.div`
  && {
    position: relative;
    width: 100px;
    height: 90px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      width: 52px;
      height: 80px;
      border-radius: 50px 50px 0 0;
      //background: transparent;
      border: 2px solid black;
    }

    &::before {
      left: 50px;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }

    &::after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
  }
`;

export const StyledFavoriteIcon = styled(FavoriteBorderIcon)`
  && {
    color: black;
    font-size: 1.5rem;
    stroke-width: 0.1px;
    stroke: black;
    
    &:hover {
      color: green;
    }
  }
`
export const StyledIconButton = styled(IconButton)`
  && {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    
    &:focus {
      outline: none;
    }

    &:hover {
      background-color: transparent;
    }
  }
`

export const StyledRating = styled(Rating)`
  .MuiRating-iconFilled {
    color: black;
  }

  .MuiRating-iconHover {
    color: #000;
  }
  .MuiRating-icon, .MuiRating-iconFilled {
    filter: url(#rounded); /* Apply the filter to each star */
  }
`;

export const FilterContainer = styled.div`
  && {
    width: 30%;
    
    @media (max-width: 940px) {
      display: none;
    }
  }
`

export const StyledProductGrid = styled(Grid)`
  && {
    // your styling
  }
`

export const StyledProductsGrid = styled(Grid)`
  && {
    justify-content: flex-start;
    
    @media (max-width: 600px) {
      justify-content: center;
    }
  }
`

