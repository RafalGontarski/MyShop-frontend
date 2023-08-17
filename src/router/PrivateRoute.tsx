import React from 'react';
import { Navigate, Route } from 'react-router-dom';

type PrivateRouteProps = {
    isLoggedIn: boolean;
    path: string;
    element: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isLoggedIn, path, element }) => {
    if (!isLoggedIn) {
        // Jeśli użytkownik nie jest zalogowany, przekieruj go na stronę logowania (lub inną stronę startową)
        return <Navigate to="/login" />;
    }

    // Jeśli użytkownik jest zalogowany, pozwól mu na dostęp do strony
    return <Route path={path} element={element} />;
};

export default PrivateRoute;
