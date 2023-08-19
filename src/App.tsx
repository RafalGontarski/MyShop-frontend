import React, {createContext, useEffect, useState} from 'react';
import Navbar from './components/navbar/Navbar';
import {LoginDrawer} from "./components/drawer/LoginDrawer";
import {ProfileDrawer} from "./components/drawer/ProfileDrawer";
import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";
import {RegistrationDrawer} from "./components/drawer/RegistrationDrawer";
import {LeftProfileDrawer} from "./components/drawer/LeftProfileDrawer"
import MainPage from "./pages/main/MainPage";
import {Route, Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import {EditProfile} from "./pages/editProfile/EditProfile";
import {Product} from "./pages/product/Product";
import {Employee} from "./pages/employee/Employee";
import {Categories} from "./pages/categories/Categories";
import {Graphics} from "./pages/graphic/Graphic";
import {Address} from "./pages/adress/Address";


const UserContext =
    createContext<{
    isLoggedIn: boolean,
    handleLogin: (
        userId: number,
        userName: string,
        userSurname: string,
        userEmail: string,
        userPassword: string,
        userRole: string[]) => void;
    } | undefined>(undefined);

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState<number | null>(null);
    const [userName, setUserName] = useState<string | null>(null);
    const [userSurname, setUserSurname] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userPassword, setUserPassword] = useState<string | null>(null);
    const [userRole, setUserRole] = useState<string[] | null>(null);
    const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
    const [isLeftProfileDrawerOpen, setIsLeftProfileDrawerOpen] = useState(false);
    const [isRegistrationDrawerOpen, setIsRegistrationDrawerOpen] = useState(false);

    function handleLogin(
        userIdFromServer: number,
        userNameFromServer: string,
        userSurnameFromServer: string,
        userEmailFromServer: string,
        userPasswordFromServer: string,
        userRoleFromServer: string[]
    ) {
        setIsLoggedIn(true);
        setIsLoginDrawerOpen(false);
        // setIsProfileDrawerOpen(true);
        // setIsLeftProfileDrawerOpen(true);
        setUserId(userIdFromServer);
        setUserName(userNameFromServer);
        setUserSurname(userSurnameFromServer);
        setUserEmail(userEmailFromServer);
        setUserPassword(userPasswordFromServer);
        setUserRole(userRoleFromServer);

        // Zapisz dane użytkownika w localStorage
        localStorage.setItem('user', JSON.stringify({
            userId: userIdFromServer,
            userName: userNameFromServer,
            userSurname: userSurnameFromServer,
            userEmail: userEmailFromServer,
            userPassword: userPasswordFromServer,
            userRole: userRoleFromServer
        }))

        console.log(userPasswordFromServer);
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setIsLoggedIn(true);
            setUserId(user.userId);
            setUserName(user.userName);
            setUserSurname(user.userSurname);
            setUserEmail(user.userEmail);
            setUserPassword(user.userPassword);
            setUserRole(user.userRole);
        }
    }, []);
    function openProfileDrawer() {
        setIsProfileDrawerOpen(true);
    }
    function openLoginDrawer() {
        setIsLoginDrawerOpen(true);
    }
    function openLeftProfileDrawer(){
        setIsLeftProfileDrawerOpen(true);
    }
    function handleLogout() {
        setIsLoggedIn(false);
        setIsProfileDrawerOpen(false);
        // Usuń dane użytkownika z localStorage
        localStorage.removeItem('user');
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

            <Routes>
                <Route path="/" element={<MainPage
                            userName={userName}
                />} />
                <Route path="/address-book"
                       element={<Address
                           open={isProfileDrawerOpen}
                           onClose={() => setIsProfileDrawerOpen(false)}
                           onLogoutClick={handleLogout}
                           openLeftProfileDrawer={openLeftProfileDrawer}
                           userId={userId}
                           userName={userName}
                           userSurname={userSurname}
                           userEmail={userEmail}
                           userRole={userRole}
                       />} />
                <Route path="/edit-profile"
                       element={<EditProfile
                            open={isProfileDrawerOpen}
                            onClose={() => setIsProfileDrawerOpen(false)}
                            onLogoutClick={handleLogout}
                            openLeftProfileDrawer={openLeftProfileDrawer}
                            userId={userId}
                            userName={userName}
                            userSurname={userSurname}
                            userEmail={userEmail}
                            userPassword={userPassword}
                            userRole={userRole}
                />} />
                <Route path="/product-center" element={<Product
                            open={isProfileDrawerOpen}
                            onClose={() => setIsProfileDrawerOpen(false)}
                            onLogoutClick={handleLogout}
                            openLeftProfileDrawer={openLeftProfileDrawer}
                            userId={userId}
                            userName={userName}
                            userSurname={userSurname}
                            userEmail={userEmail}
                            userRole={userRole}
                />} />
                <Route path="/employee-center" element={<Employee
                            open={isProfileDrawerOpen}
                            onClose={() => setIsProfileDrawerOpen(false)}
                            onLogoutClick={handleLogout}
                            openLeftProfileDrawer={openLeftProfileDrawer}
                            userId={userId}
                            userName={userName}
                            userSurname={userSurname}
                            userEmail={userEmail}
                            userRole={userRole}
                />} />
                <Route path="/categories-center" element={<Categories
                            open={isProfileDrawerOpen}
                            onClose={() => setIsProfileDrawerOpen(false)}
                            onLogoutClick={handleLogout}
                            openLeftProfileDrawer={openLeftProfileDrawer}
                            userId={userId}
                            userName={userName}
                            userSurname={userSurname}
                            userEmail={userEmail}
                            userRole={userRole}
                />} />
                <Route path="/graphic" element={<Graphics
                            open={isProfileDrawerOpen}
                            onClose={() => setIsProfileDrawerOpen(false)}
                            onLogoutClick={handleLogout}
                            openLeftProfileDrawer={openLeftProfileDrawer}
                            userId={userId}
                            userName={userName}
                            userSurname={userSurname}
                            userEmail={userEmail}
                            userRole={userRole}
                />} />
            </Routes>

            {isLoginDrawerOpen &&
                <LoginDrawer
                    open={isLoginDrawerOpen}
                    onClose={() => setIsLoginDrawerOpen(false)}
                    handleLogin={(
                        userIdFromServer,
                        userNameFromServer,
                        userSurnameFromServer,
                        userEmailFromServer,
                        userPasswordFromServer,
                        userRoleFromServer
                    ) => {
                        handleLogin(
                            userIdFromServer,
                            userNameFromServer,
                            userSurnameFromServer,
                            userEmailFromServer,
                            userPasswordFromServer,
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
            {isLeftProfileDrawerOpen &&
                <LeftProfileDrawer
                    open={isLeftProfileDrawerOpen}
                    onClose={() => setIsLeftProfileDrawerOpen(false)}
                    onLogoutClick={handleLogout}
                    userId={userId}
                    userName={userName}
                    userSurname={userSurname}
                    userEmail={userEmail}
                    userRole={userRole}

                />}
        </UserContext.Provider>

    );
}

export default withAxiosIntercepted(App);

