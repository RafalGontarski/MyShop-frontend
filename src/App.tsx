import React, {createContext, useContext, useEffect, useState} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import './App.css';

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
import {CategoryNavbar} from "./components/navbar/categoryNavbar/CategoryNavbar";
import { CategoryContext } from './models/context/CategoryContexts';
import CategoryType from "./models/types/CategoryType";

import {SelectedCategoryProvider} from "./models/providers/SelectedCategoryProvider";
import {HotDeals} from "./components/navbar/linksComponents/sales/hotDeals/HotDeals";
import {Newest} from "./components/navbar/linksComponents/sales/newest/Newest";
import {TopSeller} from "./components/navbar/linksComponents/sales/topSeller/TopSeller";
import {Occasions} from "./components/navbar/linksComponents/sales/occasions/Occasions";
import {WishList} from "./components/storage/WishList";
import {Basket} from "./components/navbar/iconComponents/Basket";
import {Contact} from "./components/helpDesk/Contact";
import {FreeShipping} from "./components/helpDesk/FreeShipping";
import {Guide} from "./components/helpDesk/Guide";
import {Guarantee} from "./components/helpDesk/Guarantee";

import {Product} from "./components/products/Product";
import {AllCategories} from "./components/categories/category/AllCategories";
import {SecondFooter} from "./components/footer/SecondFooter";
import {FirstFooter} from "./components/footer/FirstFooter";

import {Category} from "./components/categories/category/Category";
import {SubCategory} from "./components/categories/category/SubCategory";
import {SecondSubCategory} from "./components/categories/category/SecondSubCategory";

import {MoneyRefund} from "./components/helpDesk/MoneyRefund";
import {ThreeYearsGuarantee} from "./components/helpDesk/ThreeYearsGuarantee";
import {SecurePayments} from "./components/helpDesk/SecurePayments";
import {Warehouse} from "./components/helpDesk/Warehouse";
import {ProductRefund} from "./components/helpDesk/ProductRefund";
import {Service} from "./components/helpDesk/Service";
import {Delivery} from "./components/helpDesk/Delivery";
import {RepairService} from "./components/helpDesk/RepairService";
import {FrequentlyAskedQuestions} from "./components/helpDesk/FrequentlyAskedQuestions";
import {AnalitycalData} from "./components/editPages/AnalyticalData/AnalyticalData";
import { ClickProvider } from './models/providers/ClickProvider';
import {MenuProvider} from "./models/providers/MenuProvider";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/components/tools/Theme';
import {StorageDrawer} from "./components/tools/drawer/StorageDrawer/StorageDrawer";


import { UserType } from './models/types/UserType';
import {StorageType} from "./models/types/StorageType";
import { ProductType } from './models/types/ProductType';

import { UserContext } from "./models/context/UserContexts";
import {StorageContext} from "./models/context/StorageContext";

const AppUserContext = createContext<{
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
    const [isStorageDrawerOpen, setIsStorageDrawerOpen] = useState(false);

    const [currentUser, setCurrentUser] = useState<UserType | null>(null);
    console.log('CurrentUser from App.tsx under const: ', currentUser);
    const [, setIsExpanded] = useState(false);
    const location = useLocation();

    // categoriesEditPanel
    const [categories, setCategories] = useState<CategoryType[]>([]);

    // storage
    const { storages, setStorages, setStorageProducts, addNewStorage, handleStorageClick} = useContext(StorageContext);


    // Function to update currentUser
    const userModifierFunction = (user: UserType | null) => {
        setCurrentUser(user);
        console.log('User from App.tsx/ useModifier: ', user);
        // Also update localStorage if necessary
        localStorage.setItem('user', JSON.stringify(user));
    };

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
        console.log('User Id from server after login: ', userIdFromServer);
        setUserName(userNameFromServer);
        setUserSurname(userSurnameFromServer);
        setUserAddress(userAddressFromServer);
        setUserPostalCode(userPostalCodeFromServer);
        setUserCity(userCityFromServer);
        setUserCountry(userCountryFromServer);
        setUserEmail(userEmailFromServer);
        setUserPassword(userPasswordFromServer);
        setUserRole(userRoleFromServer);

        // Creating a new user object
        const newUser: UserType = {
            id: userIdFromServer,
            firstName: userNameFromServer,
            lastName: userSurnameFromServer,
            address: userAddressFromServer,
            postalCode: userPostalCodeFromServer,
            city: userCityFromServer,
            country: userCountryFromServer,
            email: userEmailFromServer,
            password: userPasswordFromServer,
            roles: userRoleFromServer
            // ... set the remaining fields of the UserType object
        };


        userModifierFunction(newUser);

        // Remaining status update
        setIsLoggedIn(true);
        setIsLoginDrawerOpen(false);
    }

    const updateUserState = (user: UserType) => {
        setUserId(user.id);
        setUserName(user.firstName);
        setUserSurname(user.lastName);
        setUserAddress(user.address);
        setUserPostalCode(user.postalCode);
        setUserCity(user.city);
        setUserCountry(user.country);
        setUserEmail(user.email);
        setUserPassword(user.password);
        setUserRole(user.roles);
        // ... update remaining states
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                // const user: UserType = JSON.parse(storedUser);
                if (user && user.id) { // Check if important fields are available
                    setIsLoggedIn(true);
                    updateUserState(user);
                    setCurrentUser(user);
                    console.log('current user from useEffect in app.tsx after set: ', user);

                    // Load user-specific clipboards
                    const userStoragesKey = `storages_${user.id}`;
                    const userStorageProductsKey = `storageProducts_${user.id}`;

                    const userStorages = localStorage.getItem(userStoragesKey);
                    if (userStorages) {
                        const parsedStorages: StorageType[] = JSON.parse(userStorages);
                        setStorages(parsedStorages);
                    }

                    const userStorageProducts = localStorage.getItem(userStorageProductsKey);
                    if (userStorageProducts) {
                        const parsedStorageProducts: ProductType[][] = JSON.parse(userStorageProducts);
                        setStorageProducts(parsedStorageProducts);
                    }
                }
            } catch (e) {
                console.error("Błąd podczas ładowania danych użytkownika", e);
            }
        }
    }, [setCurrentUser, setStorages, setStorageProducts]);


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

    function openStorageDrawer() {
        setIsStorageDrawerOpen(true);
    }

    const updateUserEmail = async (userId: number, newEmail: string) => {
        try {
            // We check whether userId exists
            if (!userId) {
                console.error("UserType ID is missing");
                return; // Return early if there's an error
            }
            // We use the appropriate endpoint in the API to update the email
            await UserApi.updateUserEmail(userId, newEmail);
            console.log('Email updated successfully');

            // We update the local state after a successful update
            setUserEmail(newEmail);
        } catch (error) {
            console.error("Błąd podczas aktualizacji e-maila:", error);
            // You can also display an error message to the user
        }
    }

    const addCategory = (category: CategoryType) => {
        setCategories(prevCategories => [...prevCategories, category]);
    };

    const updatePassword = async (userId: number, newPassword: string) => {
        try {
            // We check whether userId exists
            if (!userId) {
                console.error("UserType ID is missing");
                return; // Return early if there's an error
            }
            // We use the appropriate endpoint in the API to update the email
            await UserApi.updatePassword(userId, newPassword);
            console.log('Password updated successfully');

            // We update the local state after a successful update
            setUserPassword(newPassword);
        } catch (error) {
            console.error("Błąd podczas aktualizacji e-maila:", error);
            // You can also display an error message to the user
        }
    }

    const updateFirstName = async (userId: number, newFirstName: string) => {
        try {
            // We check whether userId exists
            if (!userId) {
                console.error("UserType ID is missing");
                return; // Return early if there's an error
            }
            // We use the appropriate endpoint in the API to update the email
            await UserApi.updateFirstName(userId, newFirstName);
            console.log('Password updated successfully');

            // We update the local state after a successful update
            setUserName(newFirstName);
        } catch (error) {
            console.error("Błąd podczas aktualizacji e-maila:", error);
            // You can also display an error message to the user
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
                console.error("UserType ID is missing");
                return; // Return early if there's an error
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
            // You can also display an error message to the user
        }
    }



    function handleLogout() {
        setIsLoggedIn(false);
        setIsProfileDrawerOpen(false);
        // Delete user data from localStorage
        localStorage.removeItem('user');
    }



    return (

        <UserContext.Provider
            value={{
                currentUser,
                userModifier: userModifierFunction,
                updateUserEmail,
            }}>
            <ThemeProvider theme={theme}>
                <ClickProvider>
                    <MenuProvider>
                        <div className="App">

                                    <AppUserContext.Provider
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
                                                        <Route path="/analytic-data" element={<AnalitycalData
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
                                                        <Route path="/categories/:categoryName/:subCategoryName" Component={SubCategory} />
                                                        <Route path="/categories/:categoryName/:subCategoryName/:secondSubCategoryName" element={<SecondSubCategory />} />
                                                        <Route path="/categories/:categoryName/:subCategoryName/:productName" element={<Product />} />
                                                        <Route path="/categories/:categoryName/:subCategoryName/:secondSubCategoryName/:productName" element={<Product />} />

                                                        <Route path={'helpDesk/service'} element={<Service />}/>
                                                        <Route path={'/helpDesk/contact'} element={<Contact />} />
                                                        <Route path={'helpDesk/questions'} element={<FrequentlyAskedQuestions />}/>
                                                        <Route path={'helpDesk/delivery'} element={<Delivery />}/>
                                                        <Route path={'helpDesk/repairService'} element={<RepairService />}/>
                                                        <Route path={'/helpDesk/productRefund'} element={<ProductRefund/>}/>
                                                        <Route path={'/helpDesk/moneyRefund'} element={<MoneyRefund/>}/>
                                                        <Route path={'helpDesk/threeYearsGuarantee'} element={<ThreeYearsGuarantee/>}/>
                                                        <Route path={'/helpDesk/freeShipping'} element={<FreeShipping/>}/>
                                                        <Route path={'/helpDesk/guarantee'} element={<Guarantee/>}/>
                                                        <Route path={'/helpDesk/securePayments'} element={<SecurePayments/>}/>
                                                        <Route path={'/helpDesk/warehouse'} element={<Warehouse />}/>

                                                        <Route path="/hotDeals" element={<HotDeals />}/>
                                                        <Route path="/newest" element={<Newest />}/>
                                                        <Route path="/topSeller" element={<TopSeller />}/>
                                                        <Route path="/occasions" element={<Occasions />}/>

                                                        <Route path={'/helpDesk/guide'} element={<Guide />}/>

                                                        <Route path="/wishList" element={
                                                            <WishList
                                                                openStorageDrawer={openStorageDrawer}
                                                            />
                                                        }/>
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

                                            {isStorageDrawerOpen &&
                                                <StorageDrawer
                                                    open={isStorageDrawerOpen}
                                                    onClose={() => setIsStorageDrawerOpen(false)}
                                                    storages={storages}
                                                    addNewStorage={addNewStorage}
                                                    handleStorageClick={handleStorageClick}
                                                />}
                                        </CategoryContext.Provider>

                                        <FirstFooter />
                                        <SecondFooter />
                                    </AppUserContext.Provider>

                        </div>
                    </MenuProvider>
                </ClickProvider>
            </ThemeProvider>

    </UserContext.Provider>

    );
}

export default withAxiosIntercepted(App);

