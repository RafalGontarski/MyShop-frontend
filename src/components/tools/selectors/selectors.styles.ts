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
