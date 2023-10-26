import styled from "styled-components";
import {Box} from "@mui/system";


export const StorageDrawerLeftTitle = styled.div`
    flex-grow: 1; // pozwala na rozciągnięcie tekstu, aby wypełnić dostępną przestrzeń
    text-align: left; // wyrównuje tekst do lewej strony
    padding-left: 20px; // dodaje trochę odstępu od lewej krawędzi
    font-size: 1.5rem; // możesz dostosować rozmiar czcionki według potrzeb
    font-weight: bold;
`

export const MyStoragesListContainer = styled(Box)`
  && {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 7%;


    @media (max-width: 1350px) {
      margin-left: 6.3%;
    }
    @media (max-width: 1100px) {
      margin-left: 8%;
    }
  }
`