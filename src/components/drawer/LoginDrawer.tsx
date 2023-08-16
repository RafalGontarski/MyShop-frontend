import React, {useCallback, useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

import {ACCESS_TOKEN} from "../../constants/constants";
import {UserContext} from "../../context/UserContexts";

import Drawer from '@mui/material/Drawer';
import CustomLink from '../link/CustomLink';
import CustomButton from "../button/Button";

import {toast} from 'react-toastify';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {AuthApi} from "../../api/AuthApi";

import GoogleLoginButton from '../button/GoogleLoginButton';

// styled component
import {
    Line,
    Welcome,
    IconClose,
    RememberMe,
    WelcomeText,
    ButtonClose,
    RegisterLink,
    MainContainer,
    StyledHandIcon,
    StyledTextField,
    ValidationError,
    StyledIconClose,
    ForgotPasswordCon,
    RememberMeCheckBox,
    LoginFormContainer,
    HiddenStyledTextField,
    StyledFormControlLabel,
    TogglePasswordVisibility,
}
    from "./Drawer.styles";


type DrawerProps = {
    open: boolean;
    onClose: () => void;
    onRegisterClick: () => void;
    handleLogin: () => void;
};

export const LoginDrawer: React.FC<DrawerProps> = ({open, onClose, onRegisterClick, handleLogin}) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const {t} = useTranslation();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
    const {userModifier} = useContext(UserContext);
    const navigate = useNavigate();


    const localHandleLogin = useCallback(async () => {
        try {
            const user = await AuthApi.signIn({
                email: email,
                password: password,
            });
            userModifier({
                email: user.data.email,
                roles: user.data.roles,
            });
            localStorage.setItem(ACCESS_TOKEN, user.data.token);
            navigate("/");
            onClose();
        } catch (error: any) {
            let errorMessage;

            if (error.response && error.response.status === 401) {
                errorMessage = "Podałeś błędne dane, spróbuj ponownie.";
            } else {
                errorMessage = "Wystąpił błąd podczas połączenia z serwerem.";
            }

            toast.error(errorMessage, {
                position: toast.POSITION.TOP_LEFT,
            });
        }
    }, [email, password, navigate]);

    useEffect(() => {
        setIsEmailValid(validateEmail(email));
    }, [email]);
    useEffect(() => {
        setIsPasswordValid(password.length > 0);
    }, [password]);
    const onEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const onPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleMouseDownPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword(true);
    };
    const handleMouseUpPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword(false);
    };

    return (
        <Drawer anchor={'right'} open={open} onClose={onClose}>
            <MainContainer role="presentation">
                <IconClose>
                    <ButtonClose
                        onClick={onClose}
                        disableRipple
                    >
                        <StyledIconClose/>
                    </ButtonClose>
                </IconClose>
                <LoginFormContainer>

                    <Welcome>
                        <WelcomeText variant="h4" gutterBottom>
                            {t('loginDrawer.greeting')}
                        </WelcomeText>
                        <StyledHandIcon/>
                    </Welcome>

                    <StyledTextField
                        size={"small"}
                        label={t('loginDrawer.email')}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={(e) => onEmailChange(e)}
                    />
                    {!isEmailValid && email.length !== 0 && (
                        <ValidationError>Podaj poprawny adres email</ValidationError>)}


                    <HiddenStyledTextField
                        size={"small"}
                        label={t('loginDrawer.password')}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => onPasswordChange(e)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <TogglePasswordVisibility
                                        aria-label="toggle password visibility"
                                        onMouseDown={handleMouseDownPassword} // Pokaż hasło
                                        onMouseUp={handleMouseUpPassword} // Ukryj hasło
                                        disableRipple
                                    >
                                        {showPassword ? <Visibility/> : <VisibilityOff/>}
                                    </TogglePasswordVisibility>
                                </InputAdornment>

                            ),
                        }}
                    />
                    {!isPasswordValid && password.length !== 0 && <ValidationError>Podaj hasło</ValidationError>}

                    <RememberMe>
                        <StyledFormControlLabel
                            control={
                                <RememberMeCheckBox
                                    disableRipple
                                />
                            }
                            label={t('loginDrawer.rememberMe')}
                        />
                    </RememberMe>

                    <CustomButton
                        label={t('loginDrawer.login')}
                        // disabled={!isEmailValid || !isPasswordValid}
                        onClick={localHandleLogin}
                    />

                </LoginFormContainer>
                <ForgotPasswordCon>
                    <CustomLink href={"#"} label={t('loginDrawer.forgotPassword')} onClick={undefined}/>
                </ForgotPasswordCon>
                <Line/>
                <RegisterLink variant="body1" gutterBottom>
                    {t('loginDrawer.newHere')}
                </RegisterLink>
                <CustomLink href={"#"} label={t('loginDrawer.register')} onClick={onRegisterClick}/>
            </MainContainer>
            <Box>
                {/*<GoogleLoginButton*/}
                {/*    clientId="YOUR_GOOGLE_CLIENT_ID"*/}
                {/*    onSuccess={handleSuccess}*/}
                {/*    onFailure={handleFailure}*/}
                {/*/>*/}
            </Box>
        </Drawer>
    );
}



