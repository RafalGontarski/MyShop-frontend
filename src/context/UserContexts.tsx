import {User} from "../models/User";
import {createContext} from "react";
import {UserContextType} from "../models/context/UserContextType";



const defaultSettings: UserContextType = {
    currentUser: null,
    userModifier: (user: User | null) => {},
    updateUserEmail: async (userId: number, email: string) => {},
};

export const UserContext =
    createContext<UserContextType>(defaultSettings);
