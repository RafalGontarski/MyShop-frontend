import React, {createContext, useState} from 'react';
import Navbar from './components/navbar/Navbar';
import {LoginDrawer} from "./components/drawer/LoginDrawer";
import {ProfileDrawer} from "./components/drawer/ProfileDrawer";
import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";
import {RegistrationDrawer} from "./components/drawer/RegistrationDrawer";
import {MyComponent} from "./api/TestApi";

const UserContext =
    createContext<{
    isLoggedIn: boolean,
        handleLogin: (userName: string) => void;
    } | undefined>(undefined);

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState<string | null>(null);
    const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
    const [isRegistrationDrawerOpen, setIsRegistrationDrawerOpen] = useState(false);

    function handleLogin(userNameFromServer: string) {
    // function handleLogin() {
        setIsLoggedIn(true);
        setIsLoginDrawerOpen(false);
        setIsProfileDrawerOpen(true);
        setUserName(userNameFromServer);
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
                    handleLogin={(userNameFromServer) => {
                    // handleLogin={() => {
                        handleLogin(userNameFromServer);
                        // handleLogin();
                    }}
                    onRegisterClick={() => {
                        console.log("register");
                        setIsLoginDrawerOpen(false);
                        setIsRegistrationDrawerOpen(true);
                    }}
                />}
            {isProfileDrawerOpen &&
                <ProfileDrawer
                    open={isProfileDrawerOpen}
                    onClose={() => setIsProfileDrawerOpen(false)}
                    onLogoutClick={handleLogout}
                    userName={userName}
                />}
            {isRegistrationDrawerOpen &&
                <RegistrationDrawer
                    open={isRegistrationDrawerOpen}
                    onClose={() => setIsRegistrationDrawerOpen(false)}
                    onLoginClick={() => {
                        console.log("zaloguj");
                        setIsLoginDrawerOpen(true);
                        setIsRegistrationDrawerOpen(false);
                    }}
                />}
        </UserContext.Provider>
    );
}

export default withAxiosIntercepted(App);

