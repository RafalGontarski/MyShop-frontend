import styled from 'styled-components';

import { FormControl, InputLabel } from '@mui/material';


export const SelectorFormControlStyle = styled(FormControl)`
  && {
    width: 350px;

    &:hover {
      background-color: #fff;
    }

    &:focus {
      background-color: #fff;
    }
  }
`


export const SelectorInputLabel = styled(InputLabel)`
  && {
    font-size: 12px;
    transform: translate(14px, 12px) scale(1);

    &.Mui-focused {
      color: #000000;
      font-size: 12px;
    }
  }
`
export const StyledStorageSelector = styled.select`
  && {
    margin-top: 2.5%;
    background-color: white;
    width: auto;
    height: 2.5rem;
    border-radius: 20px;
    border: 0.7px solid #000;

    &:focus {
      outline: none; 
    }
  }
`

export const StyledStorageSelectorOption = styled.option`
  && {
    font-size: 2rem;
  }
`