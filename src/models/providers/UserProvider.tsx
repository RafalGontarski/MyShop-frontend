import React, {useState, useCallback, createContext, useEffect} from 'react';
import {UserType} from "../types/UserType";
import {UserContextType} from "../types/contextType/UserContextType";

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<UserType | null>(null);



    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    const userModifier = (user: UserType | null) => {
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    };

    const updateUserEmail = useCallback((userId: number, newEmail: string) => {
        // Update user email
    }, []);



    return (
        <UserContext.Provider value={{ currentUser, userModifier, updateUserEmail }}>
            {children}
        </UserContext.Provider>
    );
};
