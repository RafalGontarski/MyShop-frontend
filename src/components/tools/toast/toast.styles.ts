import styled from "styled-components";

export const SuccessfullyToastCont = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 40rem;
  height: 5rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 0.5rem;
  border: 1px solid limegreen;
  display: flex;
  flex-direction: column; // zmiana na ułożenie pionowe
  align-items: center;    // wyśrodkowanie elementów poziomo
  justify-content: flex-start; // ustawienie zawartości od góry
  padding: 1rem;
  z-index: 1000;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between; // rozłożenie elementów na obu końcach
  align-items: center; // wyśrodkowanie elementów w linii
  width: 100%; // pełna szerokość kontenera
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center; // rozłożenie elementów na obu końcach
  align-items: center; // wyśrodkowanie elementów w linii
  width: 100%; // pełna szerokość kontenera
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: center; // rozłożenie elementów na obu końcach
  align-items: center; // wyśrodkowanie elementów w linii
  width: 100%;
`;

