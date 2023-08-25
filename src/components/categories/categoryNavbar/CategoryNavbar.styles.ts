import styled from "styled-components";


export const CategoryNavbarContainer = styled.div`
  && {
    background-color: #000;
    height: 3rem;
    display: flex;
    justify-content: center;  // Wyśrodkowanie w poziomie
    align-items: center;      // Wyśrodkowanie w pionie

    & > * {                   // Styl dla wszystkich bezpośrednich dzieci kontenera
      margin: 0 5px;          // Odstęp z lewej i prawej strony
    }

    @media (max-width: 940px) {
      display: none;
    }
  }
`
