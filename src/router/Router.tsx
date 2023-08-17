import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileEdit from '../components/ProfileEdit';
import PrivateRoute from "./PrivateRoute"; // Zaimportuj nowy komponent
import MainPage from '../pages/MainPage'; // Importuj MainPage

// ... inne importy komponentów ...

const AppRouter: React.FC = () => {
    const isLoggedIn = true; // Tutaj powinieneś pobrać stan zalogowania z kontekstu lub z Reduxa

    return (
        <Router>
            <Routes>
                {/* ... inne ścieżki ... */}

                <Route path="/" element={<MainPage />} /> {/* Dodaj ścieżkę dla MainPage */}

                <PrivateRoute
                    path="/edit-profile"
                    element={<ProfileEdit />}
                    isLoggedIn={isLoggedIn}
                />

                {/* ... inne ścieżki ... */}
            </Routes>
        </Router>
    );
}

export default AppRouter;
