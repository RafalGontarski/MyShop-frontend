import React, {useEffect, useState} from "react";
import {UserProvider} from "./models/providers/UserProvider";
import {StorageProvider} from "./models/providers/StorageProvider";
import App from "./App";


export const AppWithProviders = () => {
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                if (user && user.id) {
                    // Ustawia flagę po załadowaniu danych użytkownika
                    setIsUserDataLoaded(true);
                }
            } catch (e) {
                console.error("Błąd podczas ładowania danych użytkownika", e);
            }
        }
    }, []);

    return (
        <UserProvider>
            <StorageProvider>
                <App />
            </StorageProvider>

            {/*{isUserDataLoaded ? (*/}
            {/*    <StorageProvider>*/}
            {/*        <App />*/}
            {/*    </StorageProvider>*/}
            {/*) : (*/}
            {/*    <div>Ładowanie...</div> // lub inna logika ładowania*/}
            {/*)}*/}
        </UserProvider>
    );
};
