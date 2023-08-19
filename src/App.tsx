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
import {UserApi} from "./api/UserApi";


const UserContext = createContext<{
    isLoggedIn: boolean,
    handleLogin: (
        userId: number,
        userName: string,
        userSurname: string,
        userEmail: string,
        userPassword: string,
        userRole: string[]
    ) => void,
    updateUserEmail: (userId: number, newEmail: string) => Promise<void>;
    updatePassword: (userId: number, newPassword: string) => Promise<void>;
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

    const updateUserEmail = async (userId: number, newEmail: string) => {
        try {
            // Sprawdzamy, czy userId istnieje
            if (!userId) {
                throw new Error("User ID is missing");
            }
            // Używamy odpowiedniego endpointu w API do aktualizacji e-maila
            await UserApi.updateUserEmail(userId, newEmail);
            console.log('Email updated successfully');

            // Aktualizujemy stan lokalny po pomyślnej aktualizacji
            setUserEmail(newEmail);
        } catch (error) {
            console.error("Błąd podczas aktualizacji e-maila:", error);
            // Możesz również wyświetlić komunikat o błędzie dla użytkownika
        }
    }

    const updatePassword = async (userId: number, newPassword: string) => {
        try {
            // Sprawdzamy, czy userId istnieje
            if (!userId) {
                throw new Error("User ID is missing");
            }
            // Używamy odpowiedniego endpointu w API do aktualizacji e-maila
            await UserApi.updatePassword(userId, newPassword);
            console.log('Password updated successfully');

            // Aktualizujemy stan lokalny po pomyślnej aktualizacji
            setUserPassword(newPassword);
        } catch (error) {
            console.error("Błąd podczas aktualizacji e-maila:", error);
            // Możesz również wyświetlić komunikat o błędzie dla użytkownika
        }
    }



    function handleLogout() {
        setIsLoggedIn(false);
        setIsProfileDrawerOpen(false);
        // Usuń dane użytkownika z localStorage
        localStorage.removeItem('user');
    }



    return (
            <UserContext.Provider
                value={{
                isLoggedIn,
                handleLogin,
                updateUserEmail,
                updatePassword }}>
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
                                updateUserEmail={updateUserEmail}
                                updatePassword={updatePassword}
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

