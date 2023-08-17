import React, {createContext, useCallback, useContext, useEffect, useState} from "react";
import {User} from "../models/User";
import {UserContextType} from "../models/context/UserContextType";
import {useNavigate} from "react-router-dom";
import {NavbarContext} from "./NavbarContext";
import {UserApi} from "../api/UserApi";
import {UnLoginPages} from "../models/pages/UnLoginPages";
import {ACCESS_TOKEN} from "../constants/constants";
import jwt_decode from "jwt-decode";



const defaultSettings: UserContextType = {
    currentUser: null,
    userModifier: (user: User | null) => {},
};

export const UserContext =
    createContext<UserContextType>(defaultSettings);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const { pagesModifier } = useContext(NavbarContext);
    const navigate = useNavigate();

    const userModifier = (user: User | null) => {
        setCurrentUser(user);
    };

    const fetchUser = useCallback(async () => {
        const user = await UserApi.getUser();
        userModifier({
            id: user.data.id,
            firstName: user.data.firstName,
            lastName: user.data.lastName,
            email: user.data.email,
            roles: user.data.roles,
        });
    }, []);

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token && !currentUser) {
            const decodedToken = jwt_decode(token) as any;
            const tokenExp = decodedToken.exp as number;
            const currentTimestamp = Math.round(Date.now() / 1000);

            if (tokenExp > currentTimestamp) {
                fetchUser();
            }
            else{
                userModifier(null);
                localStorage.removeItem(ACCESS_TOKEN)
                pagesModifier(UnLoginPages);
                navigate("/login")
            }
        }
    }, [fetchUser, currentUser,pagesModifier,navigate]);

    return (
        <UserContext.Provider value={{ currentUser, userModifier }}>
            {children}
        </UserContext.Provider>
    );
};

