import React, {createContext, useState} from 'react';
import Navbar from './components/navbar/Navbar';
import {LoginDrawer} from "./components/drawer/LoginDrawer";
import {ProfileDrawer} from "./components/drawer/ProfileDrawer";
import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";

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

    function handleIconClick() {
        if (isLoggedIn) {
            setIsProfileDrawerOpen(true);
        } else {
            setIsLoginDrawerOpen(true);
        }
    }
    function openProfileDrawer() {
        setIsProfileDrawerOpen(true);
    }

    function openLoginDrawer() {
        setIsLoginDrawerOpen(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
        setIsProfileDrawerOpen(false);
    }

    return (
        <UserContext.Provider value={{ isLoggedIn, handleLogin }}>
            <Navbar
                isLoggedIn={isLoggedIn}
                onLogin={handleLogin}
                onLogout={handleLogout}
                openProfileDrawer={openProfileDrawer}
                openLoginDrawer={openLoginDrawer}
                setIsLoggedIn={setIsLoggedIn}
                setIsProfileDrawerOpen={setIsProfileDrawerOpen}
                />
            {isLoginDrawerOpen &&
                <LoginDrawer
                    open={isLoginDrawerOpen}
                    onClose={() => setIsLoginDrawerOpen(false)}
                    handleLogin={() => {
                        handleLogin();
                    }}
                    onRegisterClick={() => {
                        // handleLogin();
                        console.log("login");
                    }}
                />}
            {isProfileDrawerOpen &&
                <ProfileDrawer
                    open={isProfileDrawerOpen}
                    onClose={() => setIsProfileDrawerOpen(false)}
                    onLogoutClick={handleLogout}
                />}
        </UserContext.Provider>

        // <div>
        //     <Navbar />
        // </div>

    );
}

export default withAxiosIntercepted(App);

