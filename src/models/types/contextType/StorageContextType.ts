import React from "react";
import {ProductType} from "../ProductType";
import {StorageType} from "../StorageType";



export type StorageContextType = {
    storages: StorageType[];
    storageProducts: ProductType[][];
    setStorages: React.Dispatch<React.SetStateAction<StorageType[]>>;
    setStorageProducts: React.Dispatch<React.SetStateAction<ProductType[][]>>;
    addNewStorage: (newStorage: string) => void;
    handleStorageClick: (index: number) => void;
    // ... the rest of the state and functions
};