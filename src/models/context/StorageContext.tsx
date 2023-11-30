import {StorageContextType} from "../types/contextType/StorageContextType";
import {createContext} from "react";




const defaultSettings: StorageContextType = {
    userId: null,
    storages: [],
    storageProducts: [],
    setStorages: () => {},
    setStorageProducts: () => {},
    addNewStorage: () => {},
    addProductToStorage: () => {},
    removeProductFromStorage: () => {},
    handleStorageClick: () => {},
    selectedStorage: null,
    setSelectedStorage: () => {}
};

export const StorageContext = createContext<StorageContextType>(defaultSettings);

if (!StorageContext) {
    throw new Error("useStorage must be used within a StorageProvider");
}