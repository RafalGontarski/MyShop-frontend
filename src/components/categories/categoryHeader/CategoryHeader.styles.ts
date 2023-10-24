import styled from "styled-components";
import {Link} from "react-router-dom";
import {MenuItem, Select} from "@mui/material";
import FilterIcon from "@mui/icons-material/FilterList";
import Typography from "@mui/material/Typography";



export const HeaderContainer = styled.div`
    && {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 20px;
      color: white;
    }
`;

export const SubCatHeaderContainer = styled.div`
    && {
      background-color: grey; // Tymczasowo czarne tło
      padding: 20px;
      color: white;
    }
`;

export const SecondSubCatHeaderContainer = styled.div`
    background-color: white; // Tymczasowo czarne tło
    padding: 20px;
    color: white;

  @media (max-width: 940px) {
    //display: none;
  }
`;

export const ProductHeaderContainer = styled.div`
    background-color: white; // Tymczasowo czarne tło
    padding: 20px;
    color: white;

  @media (max-width: 940px) {
    display: none;
  }
`;



export const BreadcrumbContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

  @media (max-width: 940px) {
    display: none;
  }
  
`;

export const StyledLink = styled(Link)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const StyledProductLink = styled(Link)`
  && {
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
  }
`

export const StyledOtherLink = styled(Link)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    color: white;
    text-decoration: none;
    
    &:hover {
      color: lightgray;
    }

    @media (max-width: 600px) {
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
`

export const StyledSecondSubCategorySelect = styled(Select)`
  && .MuiInput-underline:before {
    border-bottom: none;
  }

  && .MuiInput-underline:after {
    border-bottom: none;
  }
`

export const StyledMenuItem = styled(MenuItem)`
  &&.Mui-selected {
    background-color: transparent;
  }
    
`

export const StyledConsultationsLink = styled(Link)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    color: white;
    text-decoration: none;

    &:hover {
      color: lightgray;
    }

    @media (max-width: 600px) {
      font-weight: bold;
      font-size: 0.8rem;
    }
    @media (max-width: 530px) {
      display: none;
    }
    
  }
`
interface BreadcrumbProps {
    hasSubCategories?: boolean;
}
export const SubCatBreadcrumbs = styled.div<BreadcrumbProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  > a {
    position: relative;
    margin-right: 0.1px;
    color: white;
    text-decoration: none;
    height: 2rem;
    padding: 0 15px; // dodałem padding, aby tekst nie był za blisko krawędzi
    background-color: rgba(104, 104, 104, 0.7);
    //background-image: linear-gradient(to right, transparent 0%, darkgrey 10%, darkgrey 90%, transparent 100%);
    border-radius: 0.2rem;
    clip-path: polygon(97.5% 0, 100% 50%, 97.5% 100%, 0% 100%, 2.5% 50%, 0% 0);
    transition: background-color 0.3s;

    &:first-child {
      border-radius: 0.2rem;
      padding-left: 7px;
      padding-right: 10px;
      clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 0% 0%, 0% 0);
    }

    &:nth-child(3) {
      border-radius: 0.2rem;
      clip-path: polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 5% 50%, 0% 0);
    }
    

    ${props => props.hasSubCategories ? `
        &:last-of-type {
            border-radius: 0.2rem;
        }
    ` : `
        &:last-of-type {
            border-radius: 0.2rem;
            clip-path: polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 5% 50%, 0% 0);
        }
    `}


    &:hover {
      background-color: rgba(144, 144, 144, 0.7);
    }
  }
`;

export const SecondSubCatBreadcrumbs = styled.div<BreadcrumbProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  > a {
    position: relative;
    margin-right: 0.1px;
    color: white;
    text-decoration: none;
    height: 2rem;
    padding: 0 15px; // dodałem padding, aby tekst nie był za blisko krawędzi
    background-color: rgba(0,0,0,0.05);
    //background-image: linear-gradient(to right, transparent 0%, darkgrey 10%, darkgrey 90%, transparent 100%);
    border-radius: 0.2rem;
    clip-path: polygon(97.5% 0, 100% 50%, 97.5% 100%, 0% 100%, 2.5% 50%, 0% 0);
    transition: background-color 0.3s;

    &:first-child {
      border-radius: 0.2rem;
      padding-left: 7px;
      padding-right: 10px;
      clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 0% 0%, 0% 0);
    }

    &:nth-child(3) {
      border-radius: 0.2rem;
      clip-path: polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 5% 50%, 0% 0);
    }
    

    ${props => props.hasSubCategories ? `
        &:last-of-type {
            border-radius: 0.2rem;
        }
    ` : `
        &:last-of-type {
            border-radius: 0.2rem;
        }
    `}


    &:hover {
      background-color: lightgrey;
    }
  }
`;

export const ProductBreadcrumbs = styled.div<BreadcrumbProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  > a {
    position: relative;
    margin-right: 0.1px;
    color: white;
    text-decoration: none;
    height: 2rem;
    padding: 0 15px; // dodałem padding, aby tekst nie był za blisko krawędzi
    background-color: rgba(0,0,0,0.05);
    //background-image: linear-gradient(to right, transparent 0%, darkgrey 10%, darkgrey 90%, transparent 100%);
    border-radius: 0.2rem;
    clip-path: polygon(97.5% 0, 100% 50%, 97.5% 100%, 0% 100%, 2.5% 50%, 0% 0);
    transition: background-color 0.3s;

    &:first-child {
      border-radius: 0.2rem;
      padding-left: 7px;
      padding-right: 10px;
      clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 0% 0%, 0% 0);
    }

    &:nth-child(3) {
      border-radius: 0.2rem;
      clip-path: polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 5% 50%, 0% 0);
    }
    

    ${props => props.hasSubCategories ? `
        &:last-of-type {
            border-radius: 0.2rem;
        }
    ` : `
        &:last-of-type {
            border-radius: 0.2rem;
        }
    `}


    &:hover {
      background-color: lightgrey;
    }
  }
`;

export const SubCatSpan = styled.span`
  color: black;
`

export const CategoryName = styled.h1`
    text-align: left;
    margin: 20px 0;
    font-size: 48px;
  
  @media (max-width: 940px) {
    font-size: 38px;
    margin-top: 0;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    //font-weight: bold;
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const SubCategoryName = styled.h1`
    text-align: left;
    margin: 20px 0;
    font-size: 48px;
    color: white;
  
  @media (max-width: 940px) {
    font-size: 38px;
    margin-top: 0;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    //font-weight: bold;
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const SecondSubCategoryName = styled.h1`
    text-align: left;
    margin: 20px 0;
    color: black;
`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const StyledFilterIcon = styled(FilterIcon)`
  color: black;
`;

export const StyledTypography = styled(Typography)`
  color: black;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 1rem;
`;


export const LinksContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const InnerContainer = styled.div`
    //margin-left: 8.7%;
    //margin-right: 8.7%;
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
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
`;

export const SubCatInnerContainer = styled.div`
    //margin-left: 8.7%;
    //margin-right: 8.7%;
    margin-left: 10rem;
    margin-right: 10rem;
    //border-bottom: 1px solid #e0e0e0;

    @media (max-width: 1350px) {
      margin-left: 4rem;
      margin-right: 4rem;
    }

    @media (max-width: 1100px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    @media (max-width: 600px) {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
`;

export const SecondSubCatInnerContainer = styled.div`
    //margin-left: 8.7%;
    //margin-right: 8.7%;
    margin-left: 10rem;
    margin-right: 10rem;
    border-bottom: 1px solid #e0e0e0;

    @media (max-width: 1350px) {
      margin-left: 4rem;
      margin-right: 4rem;
    }

    @media (max-width: 1100px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    @media (max-width: 600px) {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
`;

export const ProductInnerContainer = styled.div`
    //margin-left: 8.7%;
    //margin-right: 8.7%;
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
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
`;


export const ActionButton = styled.button`
    padding: 10px 20px;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;
