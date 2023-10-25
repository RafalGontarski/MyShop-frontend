import styled from "styled-components";
import {Box} from "@mui/system";
import {Rating} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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



export const ProductImgLink = styled.a`

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
  padding-bottom: 15px;
  color: limegreen;
`

export const ProductPrice = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  padding-top: 15px;
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
    width: 2rem;
    height: 2rem;
  }
`

export const StyledAddShoppingCartIcon = styled(AddShoppingCartIcon)`
  && {
    width: 2rem;
    height: 2rem;
  }
`