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

    const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
    // ... the rest of the state



    // ... functions for storage manipulation
    const addNewStorage = (name: string) => {
        console.log("Adding new storage...");
        setStorages(prevStorages => {
            const updatedStorages = [...prevStorages, { name, date: new Date().toLocaleDateString() }];
            console.log("New storages list:", updatedStorages);
            setSelectedStorage(String(updatedStorages.length - 1));
            return updatedStorages;
        });
    };


    const handleStorageClick = (index: number) => {
        setSelectedStorage(index.toString());
    };

    useEffect(() => {
        localStorage.setItem('wishListStorages', JSON.stringify(storages));
        localStorage.setItem('storageProducts', JSON.stringify(storageProducts));
    }, [storages, storageProducts]);




    return (
        <StorageContext.Provider
            value={{
                storages,
                storageProducts,
                setStorages,
                setStorageProducts,
                addNewStorage,
                handleStorageClick,
                selectedStorage,
                setSelectedStorage
            }}>
            {children}
        </StorageContext.Provider>
    );
};