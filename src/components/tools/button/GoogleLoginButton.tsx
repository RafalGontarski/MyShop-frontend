import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { GoogleStyledButton } from './buttons.styles';

import {useTranslation} from "react-i18next";
import GoogleIcon from '@mui/icons-material/Google';


interface GoogleLoginButtonProps {
    clientId: string;
    onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
    onFailure: (error: any) => void;
}


const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ clientId, onSuccess, onFailure }) => {
    const { t } = useTranslation();

    return (
        <GoogleLogin
            clientId={clientId}
            render={renderProps => (
                <GoogleStyledButton
                    variant="contained"
                    // color="primary"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                >
                    <GoogleIcon />
                    {t('profileDrawer.googleLogin')}
                </GoogleStyledButton>
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
        />
    );
};

export default GoogleLoginButton;
