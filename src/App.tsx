import React, {createContext, useState} from 'react';
import Navbar from './components/navbar/Navbar';
import {LoginDrawer} from "./components/drawer/LoginDrawer";
import {ProfileDrawer} from "./components/drawer/ProfileDrawer";
import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";
import {AccountCircle} from "@mui/icons-material";

const UserContext = createContext<{ isLoggedIn: boolean; handleLogin: () => void } | undefined>(undefined);

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

    function handleLogin() {
        setIsLoggedIn(true);
        setIsLoginDrawerOpen(false);
        setIsProfileDrawerOpen(true);
    }


    function handleLogout() {
        setIsLoggedIn(false);
        setIsProfileDrawerOpen(false);
    }

    function openProfileDrawer() {
        if (isLoggedIn) {
            setIsProfileDrawerOpen(true);
        }
    }

    return (
        <UserContext.Provider value={{ isLoggedIn, handleLogin }}>
            <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
            {isLoginDrawerOpen &&
                <LoginDrawer
                    open={isLoginDrawerOpen}
                    onClose={() => setIsLoginDrawerOpen(false)}
                    onRegisterClick={() => {
                        handleLogin();
                    }}
                />}
            {isProfileDrawerOpen &&
                <ProfileDrawer
                    open={isProfileDrawerOpen}
                    onClose={() => setIsProfileDrawerOpen(false)}
                    onLogoutClick={() => handleLogout()}
                />}
            <AccountCircle onClick={openProfileDrawer} />
        </UserContext.Provider>

        // <div>
        //     <Navbar />
        // </div>

    );
}

export default withAxiosIntercepted(App);

