import { Drawer } from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
import CustomButton from "../button/Button";

// styled component
import {
    Welcome,
    IconClose,
    RememberMe,
    WelcomeText,
    ButtonClose,
    MainContainer,
    StyledHandIcon,
    StyledIconClose,
    RememberMeCheckBox,
    LoginFormContainer,
    StyledFormControlLabel,

}
    from "./Drawer.styles";




type DrawerProps = {
    open: boolean;
    onClose: () => void;
    onLogoutClick: () => void;
};

export const ProfileDrawer: React.FC<DrawerProps> = ({ open, onClose, onLogoutClick }) => {
    const { t } = useTranslation();

    function handleLogout() {
        console.log("logout")
    }

    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={onClose}
        >
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
                        label={t('profileDrawer.logout')}
                        // disabled={!isEmailValid || !isPasswordValid}
                        onClick={handleLogout}
                    />

                </LoginFormContainer>
            </MainContainer>
        </Drawer>
    )

}