import React from 'react';

import {
    StyledToolbar,
    NavbarContainer,


} from "./Navbar.styles";
import {NavWrapper} from "./NavWrapper";
import {DefaultNav} from "./DefaultNav";


type NavbarProps = {
    isLoggedIn: boolean;
    onLogin: (
        userId: number,
        userName: string,
        userSurname: string,
        userAddress: string,
        userPostalCode: string,
        userCity: string,
        userCountry: string,
        userEmail: string,
        userPassword: string,
        userRole: string[]) => void;
    onLogout: () => void;
    openProfileDrawer: () => void;
    openLoginDrawer: () => void;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setIsProfileDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar: React.FC<NavbarProps> = (props) => {


    return (
        <>
            <NavbarContainer position="static" elevation={0}>
                <StyledToolbar >
                    <DefaultNav
                        isLoggedIn={props.isLoggedIn}
                        openProfileDrawer={props.openProfileDrawer}
                        openLoginDrawer={props.openLoginDrawer}
                    />

                    <NavWrapper
                        isLoggedIn={props.isLoggedIn}
                        openProfileDrawer={props.openProfileDrawer}
                        openLoginDrawer={props.openLoginDrawer}
                    />
                </StyledToolbar>
            </NavbarContainer>
        </>
    );
}

export default Navbar;




