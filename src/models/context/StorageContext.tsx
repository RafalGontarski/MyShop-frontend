import {StorageContextType} from "../types/contextType/StorageContextType";
import {createContext} from "react";


export const StorageContext = createContext<StorageContextType | undefined>(undefined);

if (!StorageContext) {
    throw new Error("useStorage must be used within a StorageProvider");
}