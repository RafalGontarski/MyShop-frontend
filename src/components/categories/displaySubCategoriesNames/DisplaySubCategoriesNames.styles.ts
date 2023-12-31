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
export const SubCatLink = styled(Link)`
  && {
    color: #000;
    //margin-right: 20px;
    text-decoration: none;
    font-size: 1.2rem;

    //&:hover {
    //  color: #008000;
    //}

    //@media (max-width: 1250px) {
    //  font-size: 0.6rem;
    //}
  }
`

export const SubCatChildDiv = styled.div`
  flex: 1 1 calc(18% - 1px); // Odejmujemy trochę miejsca na marginesy
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;  // Pogrubienie na dolnej krawędzi sięga do końca kontenera
  margin: 5px;
  cursor: pointer;

  @media (max-width: 940px) {
    flex: 1 1 calc(25% - 1px);
  }
  
  @media (max-width: 600px) {
    flex: 1 1 calc(50% - 1px);
    border-bottom: 1px solid #e0e0e0;
    flex-direction: row;
    
  }
  &:hover {
    //border-radius: 1rem;
    //background-color: #f3f3f3;  // Szary kolor tła podczas najechania myszką
    
    ${SubCatLink} {
      color: #008000; // To będzie aktywowane, kiedy najedziesz na SubCatChildDiv
    }
  }
`