import styled from "styled-components";


export const DisplayCategoriesInMainPageContainer = styled.div`
  margin-left: 8rem;
  margin-right: 8rem;

  @media (max-width: 1350px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  @media (max-width: 1100px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: 600px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

export const DisplayCategoriesInMainPageTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const CategoriesChildrenDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  
`

export const ChildDiv = styled.div`
  flex: 1 1 calc(25% - 1px); // Odejmujemy trochę miejsca na marginesy
  margin-right: 10px;  // Dodaje odstęp między kontenerami
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;  // Pogrubienie na dolnej krawędzi sięga do końca kontenera
  cursor: pointer;

  @media (max-width: 600px) {
    flex: 1 1 100%; // Zmieniamy na pełną szerokość
    margin-right: 0; // Usuwamy margines po prawej stronie
  }
`

export const ChildImg = styled.img`
    width: 7rem;
    height: auto;
`;