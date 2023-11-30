import React, { useState, useCallback, createContext, useContext } from 'react';
import {UserContextType} from "../types/contextType/UserContextType";
import {UserType} from "../types/UserType";

const UserContext = createContext<UserContextType | null>(null);


export const useUserState = () => {
    const [currentUser, setCurrentUser] = useState<UserType | null>(null);

    const userModifier = useCallback((user: UserType | null) => {
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }, []);

    const updateUserEmail = useCallback((userId: number, newEmail: string) => {
        // Update user email
    }, []);

    return {
        currentUser,
        userModifier,
        updateUserEmail
    };
};

export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const userState = useUserState();

    return (
        <UserContext.Provider value={userState}>
            {children}
        </UserContext.Provider>
    );
};