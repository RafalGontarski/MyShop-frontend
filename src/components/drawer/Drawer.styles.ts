import styled from "styled-components";
import {Box} from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HandIcon from "@mui/icons-material/PanTool";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBox, { CheckboxProps } from '@material-ui/core/Checkbox';
import Divider from "@mui/material/Divider";


export const ValidationError = styled.div`
  && {
    color: red;
    font-size: 13px;
    @media (max-width: 950px) {
      width: 14rem;
      position: relative;
      margin-top: -1rem;
      left: 3rem;
    }
    @media (max-width: 450px) {
      position: relative;
      left: 3rem;
    }
  }
`
export const IconClose = styled(Box)`
  && {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`
export const StyledIconClose = styled(CloseIcon)`
  && {
    margin: 1rem;
    font-size: 30px;
    font-weight: bold;
  }
`
export const ButtonClose = styled(IconButton)`
  && {
    color: #000000;

    &:hover {
      color: #008000;
    }
  }
`
export const MainContainer = styled(Box)`
  && {
    width: 420px;
    padding: 2px;
  }
`
export const LoginFormContainer = styled(Box)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
export const Welcome = styled(Box)`
  && {
    display: flex;
    align-items: flex-start;
  }
`
export const WelcomeText = styled(Typography)`
  && {
    font-weight: bold;
  }
`
export const StyledHandIcon = styled(HandIcon)`
  && {
    color: #008000;
  }
`
export const StyledTextField = styled(TextField)`
  && {
    width: 350px;

    &:hover {
      background-color: #fff;
    }

    &:focus {
      background-color: #fff;
    }

    & .MuiOutlinedInput-root {
      font-family: 'Arial, sans-serif', serif;

      &.Mui-focused fieldset {
        border-color: #000000;
        border-width: 1px;
      }
    }

    & .MuiInputLabel-root {
      font-size: 12px;
      transform: translate(14px, 12px) scale(1); // Adjust this value to center the label
      &.Mui-focused {
        color: #000000; // Change this to the color you want
        font-size: 12px;
      }
    }

    & .MuiInputLabel-outlined.MuiInputLabel-shrink {
      transform: translate(18px, -5px) scale(0.7); // Adjust this value to center the label
    }
  }
`
export const HiddenStyledTextField = styled(TextField)`
  && {
    //display: center; // 'centre' is not a valid value for display. I assume you meant 'center'.
    width: 350px;

    &:hover {
      background-color: #fff;
    }

    &:focus {
      background-color: #fff;
    }

    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: #000000;
        border-width: 1px;
      }
    }

    & .MuiInputLabel-root {
      font-size: 12px;
      transform: translate(14px, 12px) scale(1); // Adjust this value to center the label
      &:hover {
        background-color: #fff;
      }

      &.Mui-focused {
        color: #000000; // Change this to the color you want
      }
    }

    & .MuiInputLabel-outlined.MuiInputLabel-shrink {
      transform: translate(18px, -5px) scale(0.7); // Adjust this value to center the label
    }
  }
`
export const TogglePasswordVisibility = styled(IconButton)`
  && {
    & svg {
      font-size: 1rem; // Adjust this value to change the size of the icon
    }
  }
`
export const RememberMe = styled(Box)`
  && {
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    margin-left: 2.25rem;
  }
`
export const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    & .MuiTypography-root {
      // fontFamily: 'Arial, sans-serif',
      margin-top: 1px;
      font-size: 0.7rem;
      // Add other font styles as needed
    }
  }
`
export const RememberMeCheckBox = styled(CheckBox)<CheckboxProps>`
  && {
    & .MuiSvgIcon-root {
      font-size: 1rem;
    }

    &.Mui-checked {
      color: #008000; // This changes the checkmark color
    }

    & .MuiIconButton-root {
      border-width: 0.5px;
      border-color: #000;

      &:hover {
        border-color: #000;
      }
    }

    &.MuiCheckbox-colorSecondary.Mui-checked {
      color: #008000; // This changes the checkmark color
    }

    &.MuiCheckbox-colorSecondary.Mui-checked:hover {
      background-color: transparent; // This makes the checkbox transparent when checked and hovered
    }
  }
`;
export const ForgotPasswordCon = styled(Box)`
  && {
    margin-top: 1rem;
  }
`
export const Line = styled(Divider)`
  && {
    margin: 2rem 0;
    margin-right: 2rem;
    margin-left: 2rem;
    border-width: 0.1rem;
    border-color: #000000;
  }
`
export const RegisterLink = styled(Typography)`
  && {
    text-align: center;
  }
`
export const CustomerCenterText = styled.div`
    flex-grow: 1; // pozwala na rozciągnięcie tekstu, aby wypełnić dostępną przestrzeń
    text-align: left; // wyrównuje tekst do lewej strony
    padding-left: 20px; // dodaje trochę odstępu od lewej krawędzi
    font-size: 1.5rem; // możesz dostosować rozmiar czcionki według potrzeb
    font-weight: bold;
`
