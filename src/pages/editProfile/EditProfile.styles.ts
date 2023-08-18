import styled from "styled-components";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";
import IconButton from "@mui/material/IconButton";


export const EditProfileContainer = styled.div`

`

export const TitleContainer = styled.div`
    margin-top: 1.5rem;
  margin-left: 2rem;
`

export const Title = styled.h1`
  
`

// wrapper
export const MenuWrapper = styled(Box)`
  && {
    display: none;
    @media (max-width: 940px) {
      display: flex;
    }
  }
`

export const WrapperMenuButton = styled(IconButton)`
  && {
    color: #000;
    margin-right: 20px;
    @media (max-width: 600px) {
      margin-right: 0;
    }
  }
`