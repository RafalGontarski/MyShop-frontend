import React, {createContext, useEffect, useState} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import {LoginDrawer} from "./components/tools/drawer/LoginDrawer";
import {ProfileDrawer} from "./components/tools/drawer/ProfileDrawer";

import {RegistrationDrawer} from "./components/tools/drawer/RegistrationDrawer";
import {LeftProfileDrawer} from "./components/tools/drawer/LeftProfileDrawer"
import MainPage from "./components/mainPage/MainPage";

import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";

import {ProfileEditPanel} from "./components/editPages/profileEditPanel/ProfileEditPanel";
import {ProductEditPanel} from "./components/editPages/productEditPanel/ProductEditPanel";
import {EmployeeEditPanel} from "./components/editPages/employeeEditPanel/EmployeeEditPanel";
import {CategoriesEditPanel} from "./components/editPages/categoriesEditPanel/CategoriesEditPanel";
import {Graphics} from "./components/editPages/graphicEditPanel/GraphicEditPanel";
import {AddressBookEditPanel} from "./components/editPages/bookAdressEditPanel/AddressBookEditPanel";
import {UserApi} from "./api/UserApi";
import {CategoryNavbar} from "./components/categories/categoryNavbar/CategoryNavbar";
import { CategoryContext } from './models/context/CategoryContexts';
import CategoryType from "./models/types/CategoryType";

import {SelectedCategoryProvider} from "./models/providers/SelectedCategoryProvider";
import {Category} from "./components/categories/category/Category";
import {HotDeals} from "./components/navbar/linksComponents/sales/hotDeals/HotDeals";
import {Newest} from "./components/navbar/linksComponents/sales/newest/Newest";
import {TopSeller} from "./components/navbar/linksComponents/sales/topSeller/TopSeller";
import {Occasions} from "./components/navbar/linksComponents/sales/occasions/Occasions";
import {WishList} from "./components/navbar/iconComponents/WishList";
import {Basket} from "./components/navbar/iconComponents/Basket";
import {Contact} from "./components/helpDesk/Contact";
import {FreeShipping} from "./components/helpDesk/FreeShipping";
import {Example} from "./components/helpDesk/Example";
import {Guarantee} from "./components/helpDesk/Guarantee";
import {SubCategory} from "./components/categories/category/SubCategory";
import {Product} from "./components/products/Product";
import {AllCategories} from "./components/categories/category/AllCategories";
import {SecondFooter} from "./components/footer/SecondFooter";
import {FirstFooter} from "./components/footer/FirstFooter";

import './App.css';


const UserContext = createContext<{
    isLoggedIn: boolean,
    handleLogin: (
        userId: number,
        userName: string,
        userSurname: string,
        userAddress: string,
        userPostalCode: string,
        userCity: string,
        userCountry: string,
        userEmail: string,
        userPassword: string,
        userRole: string[]
    ) => void,
    updateUserEmail: (userId: number, newEmail: string) => Promise<void>;
    updatePassword: (userId: number, newPassword: string) => Promise<void>;
    updateFirstName: (userId: number, newFirstName: string) => Promise<void>;
    updateAddressBook: (
        userId: number,
        newFirstName: string,
        newLastName: string,
        newAddress: string,
        newPostalCode: string,
        newCity: string,
        newCountry: string
    ) => Promise<void>;
} | undefined>(undefined);




const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState<number | null>(null);
    const [userName, setUserName] = useState<string | null>(null);
    const [userSurname, setUserSurname] = useState<string | null>(null);
    const [userAddress, setUserAddress] = useState<string | null>(null);
    const [userPostalCode, setUserPostalCode] = useState<string | null>(null);
    const [userCity, setUserCity] = useState<string | null>(null);
    const [userCountry, setUserCountry] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userPassword, setUserPassword] = useState<string | null>(null);
    const [userRole, setUserRole] = useState<string[] | null>(null);
    const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
    const [isLeftProfileDrawerOpen, setIsLeftProfileDrawerOpen] = useState(false);
    const [isRegistrationDrawerOpen, setIsRegistrationDrawerOpen] = useState(false);

    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();

    // categoriesEditPanel
    const [categories, setCategories] = useState<CategoryType[]>([]);

    function handleLogin(
        userIdFromServer: number,
        userNameFromServer: string,
        userSurnameFromServer: string,
        userAddressFromServer: string,
        userPostalCodeFromServer: string,
        userCityFromServer: string,
        userCountryFromServer: string,
        userEmailFromServer: string,
        userPasswordFromServer: string,
        userRoleFromServer: string[]
    ) {
        setIsLoggedIn(true);
        setIsLoginDrawerOpen(false);
        setUserId(userIdFromServer);
        setUserName(userNameFromServer);
        setUserSurname(userSurnameFromServer);
        setUserAddress(userAddressFromServer);
        setUserPostalCode(userPostalCodeFromServer);
        setUserCity(userCityFromServer);
        setUserCountry(userCountryFromServer);
        setUserEmail(userEmailFromServer);
        setUserPassword(userPasswordFromServer);
        setUserRole(userRoleFromServer);

        // Zapisz dane użytkownika w localStorage
        localStorage.setItem('user', JSON.stringify({
            userId: userIdFromServer,
            userName: userNameFromServer,
            userSurname: userSurnameFromServer,
            userAddress: userAddressFromServer,
            userPostalCode: userPostalCodeFromServer,
            userCity: userCityFromServer,
            userCountry: userCountryFromServer,
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
            setUserAddress(user.userAddress);
            setUserSurname(user.userSurname);
            setUserPostalCode(user.userPostalCode);
            setUserCity(user.userCity);
            setUserCountry(user.userCountry);
            setUserEmail(user.userEmail);
            setUserPassword(user.userPassword);
            setUserRole(user.userRole);
        }
    }, []);

    useEffect(() => {
        if (location.pathname === '/helpDesk/freeShipping' || location.pathname === '/helpDesk/guarantee') {
            setIsExpanded(true);
        } else {
            setIsExpanded(false);
        }
    }, [location.pathname]);

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
                throw new Error("UserType ID is missing");
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

    const addCategory = (category: CategoryType) => {
        setCategories(prevCategories => [...prevCategories, category]);
    };

    const updatePassword = async (userId: number, newPassword: string) => {
        try {
            // Sprawdzamy, czy userId istnieje
            if (!userId) {
                throw new Error("UserType ID is missing");
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

    const updateFirstName = async (userId: number, newFirstName: string) => {
        try {
            // Sprawdzamy, czy userId istnieje
            if (!userId) {
                throw new Error("UserType ID is missing");
            }
            // Używamy odpowiedniego endpointu w API do aktualizacji e-maila
            await UserApi.updateFirstName(userId, newFirstName);
            console.log('Password updated successfully');

            // Aktualizujemy stan lokalny po pomyślnej aktualizacji
            setUserName(newFirstName);
        } catch (error) {
            console.error("Błąd podczas aktualizacji e-maila:", error);
            // Możesz również wyświetlić komunikat o błędzie dla użytkownika
        }
    }

    const updateAddressBook = async (
        userId: number,
        newFirstName: string,
        newLastName: string,
        newAddress: string,
        newPostalCode: string,
        newCity: string,
        newCountry: string)=> {
        try {
            if (!userId) {
                throw new Error("UserType ID is missing");
            }
            await UserApi
                .updateAddressBook(
                    userId,
                    newFirstName,
                    newLastName,
                    newAddress,
                    newPostalCode,
                    newCity,
                    newCountry
                );
            console.log('AddressBookEditPanel updated successfully');
            setUserName(newFirstName);
            setUserSurname(newLastName);
            setUserAddress(newAddress);
            setUserPostalCode(newPostalCode);
            setUserCity(newCity);
            setUserCountry(newCountry);


        }
        catch (error) {
            console.error("Błąd podczas aktualizacji książki adresowej:", error);
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
        <div className="App">
            <UserContext.Provider
                value={{
                isLoggedIn,
                handleLogin,
                updateUserEmail,
                updatePassword,
                updateFirstName,
                updateAddressBook
            }}>
                <CategoryContext.Provider value={{ categories, addCategory, setCategories }}>
                    <Navbar
                        isLoggedIn={isLoggedIn}
                        onLogin={handleLogin}
                        onLogout={handleLogout}
                        openProfileDrawer={openProfileDrawer}
                        openLoginDrawer={openLoginDrawer}
                        setIsLoggedIn={setIsLoggedIn}
                        setIsProfileDrawerOpen={setIsProfileDrawerOpen}
                    />
                    <SelectedCategoryProvider>
                        <CategoryNavbar />

                        <div className="content">
                            <Routes>
                                <Route path="/" element={<MainPage
                                            userName={userName}
                                />} />
                                <Route path="/address-book"
                                       element={<AddressBookEditPanel
                                           open={isProfileDrawerOpen}
                                           onClose={() => setIsProfileDrawerOpen(false)}
                                           onLogoutClick={handleLogout}
                                           openLeftProfileDrawer={openLeftProfileDrawer}
                                           updateAddressBook={updateAddressBook}
                                           userId={userId}
                                           userName={userName}
                                           userSurname={userSurname}
                                           userAddress={userAddress}
                                           userPostalCode={userPostalCode}
                                           userCity={userCity}
                                           userCountry={userCountry}
                                           userEmail={userEmail}
                                           userRole={userRole}
                                       />} />
                                <Route path="/edit-profile"
                                       element={<ProfileEditPanel
                                            open={isProfileDrawerOpen}
                                            onClose={() => setIsProfileDrawerOpen(false)}
                                            onLogoutClick={handleLogout}
                                            openLeftProfileDrawer={openLeftProfileDrawer}
                                            updateUserEmail={updateUserEmail}
                                            updatePassword={updatePassword}
                                            updateFirstName={updateFirstName}
                                            userId={userId}
                                            userName={userName}
                                            userSurname={userSurname}
                                            userEmail={userEmail}
                                            userPassword={userPassword}
                                            userRole={userRole}
                                />} />
                                <Route path="/product-center" element={<ProductEditPanel
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
                                <Route path="/employee-center" element={<EmployeeEditPanel
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
                                <Route path="/categories-center" element={<CategoriesEditPanel
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
                                <Route path="/categories" element={<AllCategories />}/>
                                <Route path="/categories/:categoryName" element={<Category />} />
                                <Route path="/categories/:categoryName/:subCategoryName" element={<SubCategory />} />
                                <Route path="/categories/:categoryName/:subCategoryName/:productName" element={<Product />} />
                                <Route path={'/helpDesk/contact'} element={<Contact />} />
                                <Route path={'/helpDesk/freeShipping'}
                                       element={
                                    <FreeShipping
                                        isExpanded={isExpanded}
                                        toggleExpanded={() => setIsExpanded(!isExpanded)}
                                    />}/>
                                <Route path={'/helpDesk/guarantee'}
                                       element={<Guarantee
                                           isExpanded={isExpanded}
                                           toggleExpanded={() => setIsExpanded(!isExpanded)}
                                       />}/>
                                <Route path={'/helpDesk/example'} element={<Example />}/>

                                <Route path="/hotDeals" element={<HotDeals />}/>
                                <Route path="/newest" element={<Newest />}/>
                                <Route path="/topSeller" element={<TopSeller />}/>
                                <Route path="/occasions" element={<Occasions />}/>
                                <Route path="/wishList" element={<WishList />}/>
                                <Route path="/basket" element={<Basket />}/>
                            </Routes>
                        </div>
                    </SelectedCategoryProvider>

                    {isLoginDrawerOpen &&
                        <LoginDrawer
                            open={isLoginDrawerOpen}
                            onClose={() => setIsLoginDrawerOpen(false)}
                            handleLogin={(
                                userIdFromServer,
                                userNameFromServer,
                                userSurnameFromServer,
                                userAddressFromServer,
                                userPostalCodeFromServer,
                                userCityFromServer,
                                userCountryFromServer,
                                userEmailFromServer,
                                userPasswordFromServer,
                                userRoleFromServer
                            ) => {
                                handleLogin(
                                    userIdFromServer,
                                    userNameFromServer,
                                    userSurnameFromServer,
                                    userAddressFromServer,
                                    userPostalCodeFromServer,
                                    userCityFromServer,
                                    userCountryFromServer,
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


                </CategoryContext.Provider>

                <FirstFooter />
                <SecondFooter />
            </UserContext.Provider>
        </div>
    );
}

export default withAxiosIntercepted(App);

