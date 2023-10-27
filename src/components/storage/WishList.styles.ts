import styled from "styled-components";
import {Box} from "@mui/system";
import {Rating} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {Link} from "react-router-dom";
import FilterIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export const StorageContainer = styled.div`
  padding-top: 1rem;
  cursor: pointer;
`


export const ProductContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    //align-items: center;
    //margin-bottom: 20px;
    margin-top: 10px;
    margin-right: 25%;
    margin-left: 11%;
    border: 3px solid #f5f5f5;
    border-radius: 14px;
    padding: 0 16px 0;
    background-color: #f5f5f5;
  
    @media (max-width: 940px) {
      margin-right: 15%;
      margin-left: 11%;
    }
`

export const ProductBox = styled(Box)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;  // Rozdzieli elementy
    background-color: #f5f5f5;
  }
`



export const ProductLink = styled(Link)`
  display: flex;
`

export const ProductInformationLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #000;
`

export const ProductPriceLink = styled(Link)`
  text-decoration: none;
  padding-top: 15px;
  color: #000;
`

export const ProductImg = styled.img`

`

export const ProductManufacturerAndName = styled.div`
  align-self: flex-start;
  padding-top: 15px;
`



export const ProductInformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  cursor: pointer;

  &:hover ${ProductManufacturerAndName} {
    color: green;
  }
`
export const StorageProductImageDiv = styled.div`
  padding: 0 30px 0;

  &:hover ~ ${ProductInformationDiv} ${ProductManufacturerAndName} {
    color: green;
  }
`

export const ProductPriceAndActionsDiv = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  height: 100%;

  &:hover ~ ${ProductInformationDiv} ${ProductManufacturerAndName} {
    color: green;
  }
`

export const ProductManufacturer = styled.span`
  align-self: flex-start;
  font-weight: bold;
  padding-right: 10px;
`

export const ProductName = styled.span`
    
`

export const ProductRating = styled.span`

`

export const ProductDescription = styled.span`
  display: none;
`

export const ProductAvailability = styled.span`
  margin-top: auto;
  padding-bottom: 4%;
  color: limegreen;
`

export const ProductPrice = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  padding-top: 4%;
  cursor: pointer;
`
export const ProductActionsDiv = styled.div`
  display: flex;
  margin-top: auto;
  padding-bottom: 15px;
  gap: 2rem;
`

export const StyledProductRating = styled(Rating)`
  padding-top: 5px;
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

export const StyledDeleteOutlineIcon = styled(DeleteOutlineIcon)`
  && {
    width: 1.7rem;
    height: 1.7rem;
    cursor: pointer;

    &:hover {
      color: green;
    }
  }
`

export const StyledAddShoppingCartIcon = styled(AddShoppingCartIcon)`
  && {
    width: 1.7rem;
    height: 1.7rem;
    cursor: pointer;
    
    &:hover {
      color: green;
    }
  }
`;

export const StyledAddAllProductsIcon = styled(AddShoppingCartIcon)`
  && {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`

export const StyledStorageFilterIcon = styled(FilterIcon)`
  color: black;
  padding-right: 10px;
  
  &:hover {
    color: green;
  }
  
`;

export const StyledFilterWrapperTitle = styled(Typography)`
  && {
    font-size: small;
    &:hover {
      color: green;
    }
  }
`

export const StorageWrapperMenuButton = styled(IconButton)`
  && {
    color: #000;
    margin-right: 20px;
    @media (max-width: 600px) {
      margin-right: 0;
    }

    &:hover {
      color: green;

      ${StyledStorageFilterIcon} {
        color: green;
      }

      ${StyledFilterWrapperTitle} {
        color: green;
      }
    }
  }
`

export const SumAndBtn = styled.div`
  margin-right: 12%;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;

export const SumAndPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  //justify-content: center;
  //align-items: center;
`

export const OtherLinks = styled.div`
  margin-right: 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`

export const OtherLink = styled(Typography)`
  && {
    font-size: 0.7rem;
    color: darkgrey;
    padding: 0.5rem 0 0 0;    
  }
`

export const Sum = styled(Typography)`
  && {
    font-size: 0.8rem;
    padding-right: 1rem;
    margin-bottom: 0.5rem;
  }
`

export const SumStoragePrice = styled(Typography)`
  && {
    font-size: 2.3rem;
    font-weight: bold;
  }
`

