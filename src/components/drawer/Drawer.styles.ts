import styled from "styled-components";


export const ValidationError = styled.div`
  color: red;
  font-size: 13px;
  @media(max-width:950px){
    width: 14rem;
    position:relative;
    margin-top: -1rem;
    left:3rem;
  }
  @media (max-width: 450px) {
    position:relative;
    left:3rem;
  }
`