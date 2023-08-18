import Link from "@mui/material/Link";
import styled from "styled-components";
import {Box} from "@mui/system";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";


export const ProfileDrawerLink = styled(Link)`
  && {
    color: #000;
    margin-right: 20px;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;

    &:hover {
      color: #008000;
    }

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

export const ProfileMainContainer = styled(Box)`
  && {
    width: 420px;
    padding: 2px;
  }
`

export const UserDataContainer = styled(Box)`
  && {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;
    padding: 0.5rem;
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
export const ManagerLine = styled(Divider)`
  && {
    width: 40%; // Ustawia szerokość linii na 100% dostępnego miejsca
    margin: 1rem 0;
    margin-right: 2rem;
    height: 0.2px;
    border-color: #000000;
  }
`
export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 0.2px;
    background-color: #000000;
    margin: 0 0.5rem; // Odstępy po obu stronach napisu
  }
`

export const LineText = styled.span`
  white-space: nowrap; // Zapobiega zawijaniu tekstu
  font-size: x-small;
`

export const AdminLine = styled(Divider)`
  && {
    width: 40%; // Ustawia szerokość linii na 100% dostępnego miejsca
    margin: 1rem 0;
    margin-right: 2rem;
    height: 0.2px;
    border-color: #000000;
  }
`
export const ProfileWelcomeText = styled(Typography)`
  && {
    font-weight: bold;
  }
`
export const UserData = styled(Typography)`
  && {
    margin-bottom: 0.1px; // Zmniejszony margines dolny
  }
`
export const ProfileWelcome = styled(Box)`
  && {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.1px; // Zmniejszony margines dolny
  }
`