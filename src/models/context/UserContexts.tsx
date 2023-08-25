import {UserType} from "../../models/types/UserType";
import {createContext} from "react";
import {UserContextType} from "../../models/types/contextType/UserContextType";



const defaultSettings: UserContextType = {
    currentUser: null,
    userModifier: (user: UserType | null) => {},
    updateUserEmail: async (userId: number, email: string) => {},
};

export const UserContext =
    createContext<UserContextType>(defaultSettings);
