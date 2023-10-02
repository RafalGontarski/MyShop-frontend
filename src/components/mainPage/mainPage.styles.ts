import styled from "styled-components";
import MuiLink from "@mui/material/Link";


export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledUnderCarouselLink = styled(MuiLink)`
  && {
    font-size: 0.8rem;
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: ${props => props.underline || 'underline'};

    &:hover {
      color: #008000;
    }
  }
`

export const StyledLinksContainer = styled.div`
  && {
    display: flex;
    flex-direction: row;
    gap: 5rem;
  }
`

export const StyledImg = styled.img`
  && {
    margin-right: 10px;
    
    @media (max-width: 600px) {
      height: 38px;
      width: 38px;
    }
  }
`