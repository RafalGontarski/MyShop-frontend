import Link from "@mui/material/Link";
import styled from "styled-components";
import {Box} from "@mui/system";
import Divider from "@mui/material/Divider";


export const ProfileDrawerLink = styled(Link)`
  && {
    color: #000;
    margin-right: 20px;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;

    @media (max-width: 1250px) {
      font-size: 0.6rem;
    }
  }
`

export const ProfileContainer = styled(Box)`
  && {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 1.2rem;
    margin-top: 1.5rem;
  }
`

export const LinksContainer = styled(Box)`
  && {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 0.5rem;
    margin-top: 1.5rem;
    gap: 1rem;
  }
`

export const ProfileLine = styled(Divider)`
  && {
    width: 40%; // Ustawia szerokość linii na 100% dostępnego miejsca
    margin: 1rem 0;
    margin-right: 2rem;
    height: 0.2px;
    border-color: #000000;
  }
`