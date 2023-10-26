import React, {useEffect, useState} from "react";
import {ProductType} from "../types/ProductType";
import {StorageContext} from "../context/StorageContext";
import {StorageType} from "../types/StorageType";

interface StorageProviderProps {
    children: React.ReactNode;
}

export const StorageProvider: React.FC<StorageProviderProps> = ({ children }) => {

    const [storages, setStorages] = useState<StorageType[]>(() => {
        const storedStorages = localStorage.getItem('wishListStorages');
        return storedStorages ? JSON.parse(storedStorages) : [];
    });

    const [storageProducts, setStorageProducts] = useState<ProductType[][]>(() => {
        const storedStorageProducts = localStorage.getItem('storageProducts');
        return storedStorageProducts ? JSON.parse(storedStorageProducts) : [];
    });

    const [, setSelectedStorage] = useState<string | null>(null);
    // ... the rest of the state

    // ... functions for storage manipulation
    const addNewStorage = (name: string) => {
        const newStorage = { name, date: new Date().toLocaleDateString() };
        setStorages(prevStorages => [...prevStorages, newStorage]);
    }


    const handleStorageClick = (index: number) => {
        setSelectedStorage(index.toString());
    };

    useEffect(() => {
        localStorage.setItem('wishListStorages', JSON.stringify(storages));
    }, [storages]);

    useEffect(() => {
        localStorage.setItem('storageProducts', JSON.stringify(storageProducts));
    }, [storageProducts]);



    return (
        <StorageContext.Provider value={{ storages, storageProducts, setStorages, setStorageProducts, addNewStorage, handleStorageClick }}>
            {children}
        </StorageContext.Provider>
    );
};