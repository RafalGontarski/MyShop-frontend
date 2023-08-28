import styled from "styled-components";
import Link from "@mui/material/Link";


export const SubCategoriesContainer = styled.div`
  margin-left: 15rem;
  margin-right: 15rem;

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

export const SubCatChildDiv = styled.div`
  flex: 1 1 calc(18% - 1px); // Odejmujemy trochę miejsca na marginesy
  //margin-right: 10px;  // Dodaje odstęp między kontenerami
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  //border-bottom: 1px solid #e0e0e0;
  width: 100%;  // Pogrubienie na dolnej krawędzi sięga do końca kontenera
  margin: 5px;

  @media (max-width: 940px) {
    flex: 1 1 calc(25% - 1px);
  }
  
  @media (max-width: 600px) {
    flex: 1 1 calc(50% - 1px);
    border-bottom: 1px solid #e0e0e0;
    flex-direction: row;
    
  }
  
`

export const SubCatLink = styled(Link)`
  && {
    color: #000;
    margin-right: 20px;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      color: #008000;
    }

    //@media (max-width: 1250px) {
    //  font-size: 0.6rem;
    //}
  }
`