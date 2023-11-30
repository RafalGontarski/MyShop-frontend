import {UserType} from "../types/UserType";
import {createContext} from "react";
import {UserContextType} from "../types/contextType/UserContextType";



const defaultSettings: UserContextType = {
    currentUser: null,
    userModifier: (user: UserType | null) => {},
    updateUserEmail: async (userId: number, email: string) => {},
};

export const UserContext =
    createContext<UserContextType>(defaultSettings);
