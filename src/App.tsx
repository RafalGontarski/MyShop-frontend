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
    handleLogin: (
        userId: number,
        userName: string,
        userSurname: string,
        userEmail: string,
        userRole: string[]) => void;
    } | undefined>(undefined);

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState<number | null>(null);
    const [userName, setUserName] = useState<string | null>(null);
    const [userSurname, setUserSurname] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userRole, setUserRole] = useState<string[] | null>(null);
    const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
    const [isRegistrationDrawerOpen, setIsRegistrationDrawerOpen] = useState(false);

    function handleLogin(
        userIdFromServer: number,
        userNameFromServer: string,
        userSurnameFromServer: string,
        userEmailFromServer: string,
        userRoleFromServer: string[]
    ) {
        setIsLoggedIn(true);
        setIsLoginDrawerOpen(false);
        setIsProfileDrawerOpen(true);
        setUserId(userIdFromServer);
        setUserName(userNameFromServer);
        setUserSurname(userSurnameFromServer);
        setUserEmail(userEmailFromServer);
        setUserRole(userRoleFromServer);
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
                    handleLogin={(
                        userIdFromServer,
                        userNameFromServer,
                        userSurnameFromServer,
                        userEmailFromServer,
                        userRoleFromServer
                    ) => {
                        handleLogin(
                            userIdFromServer,
                            userNameFromServer,
                            userSurnameFromServer,
                            userEmailFromServer,
                            userRoleFromServer);
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
                    userId={userId}
                    userName={userName}
                    userSurname={userSurname}
                    userEmail={userEmail}
                    userRole={userRole}
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

