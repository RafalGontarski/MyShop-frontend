import styled from 'styled-components';
import Button from '@mui/material/Button';


export const StyledButton = styled(Button)`
  && {
    font-weight: bold;
    margin-top: 1rem;
    background-color: #000;
    height: 40px;
    position: relative;
    border-radius: 1.5rem;

    &:hover {
      background-image: linear-gradient(to right, blue, green);

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
`;

export const GoogleStyledButton = styled(Button)`
  && {
    font-weight: initial;
    margin-top: 1rem;
    background-color: #fff;
    color: #000;
    height: 40px;
    position: relative;
    border-radius: 1.5rem;

    &:hover {
      background-image: linear-gradient(to right, darkgray);
      color: #fff;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
`;

