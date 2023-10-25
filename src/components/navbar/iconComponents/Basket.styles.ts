import styled from "styled-components";



export const BasketMainContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 940px) {
    flex-direction: column;
  }
`

export const BasketTitle = styled.h1`
  align-items: flex-start;
  margin-left: 9%;
  margin-top: 1.5rem;

  @media (max-width: 1350px) {
    margin-left: 6.3%;
  }
  @media (max-width: 1100px) {
    margin-left: 3.5%;
  }
`

export const BasketContainer = styled.div`
  && {
    width: 45%;

    display: flex;
    justify-content: left;
    align-items: flex-start;
    //flex-direction: column;
    margin-left: 9%;
    margin-top: 1.5rem;

    //background-color: #f3f3f3;


    @media (max-width: 1350px) {
      margin-left: 6.3%;
    }
    @media (max-width: 1100px) {
      margin-left: 3.5%;
    }

    
  }
`

export const Payment = styled.div`
  && {
    width: 25%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    //flex-direction: column;
    margin-left: 9%;
    margin-top: 1.5rem;

    background-color: #f3f3f3;
    border-radius: 1rem;


    @media (max-width: 1350px) {
      margin-left: 6.3%;
    }
    @media (max-width: 1100px) {
      margin-left: 3.5%;
    }


  }
`