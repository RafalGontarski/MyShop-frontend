import React, {useContext, useEffect, useState} from "react";
import {ProductType} from "../types/ProductType";
import {StorageContext} from "../context/StorageContext";
import {StorageType} from "../types/StorageType";
import { UserContext } from "./UserProvider";
interface StorageProviderProps {
    children: React.ReactNode;
}

export const StorageProvider: React.FC<StorageProviderProps> = ({ children }) => {

    const context = useContext(UserContext);

    // Condition of storage compartments
    const [storages, setStorages] = useState<StorageType[]>([]);
    const [storageProducts, setStorageProducts] = useState<ProductType[][]>([]);
    const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
    // //... the rest of the state

    // Declaration of userId, storagesKey and storageProductsKey
    const userId = context?.currentUser?.id;
    console.log('user id from Storage Provider: ', userId);
    const storagesKey = `storages_${userId}`;
    const storageProductsKey = `storageProducts_${userId}`;

    // Conditional logic inside useEffect
    useEffect(() => {
        if (userId) {
            // Ładowanie schowków
            const storedStorages = localStorage.getItem(storagesKey);
            if (storedStorages) {
                const loadedStorages: StorageType[] = JSON.parse(storedStorages);
                // Aktualizacja productCount dla każdego schowka
                loadedStorages.forEach((storage, index) => {
                    storage.productCount = storageProducts[index]?.length || 0;
                });
                setStorages(loadedStorages);
            }

            // Ładowanie produktów schowków
            const storedStorageProducts = localStorage.getItem(storageProductsKey);
            if (storedStorageProducts) {
                setStorageProducts(JSON.parse(storedStorageProducts));
            }
        }
    }, [userId, storageProducts]);



    //... functions for storage manipulation
    const addNewStorage = (name: string) => {
        if (userId === null && typeof userId === "undefined") {
            console.error("addNewStorage: No user ID available");
            return;
        }

        console.log("Adding new storage...");
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        setStorages(prevStorages => {
            const newStorage: StorageType = {
                name: name,
                date: formattedDate,
                createdAt: formattedTime,
                editedAt: formattedTime,
                productCount: 0
            };

            const updatedStorages = [...prevStorages, newStorage];
            if (userId) {
                localStorage.setItem(storagesKey, JSON.stringify(updatedStorages));
            }
            return updatedStorages;
        });

        // Add an empty product list for a new basket
        setStorageProducts(prevProducts => [...prevProducts, []]);

        // Make the newly added clipboard selected
        setSelectedStorage(prevStorages => prevStorages ? String(prevStorages.length) : "0");

    };

    // Dodaj tę funkcję w StorageProvider
    const removeProductFromAllStorages = (product: ProductType) => {
        setStorageProducts(prevProducts => prevProducts.map(storage =>
            storage.filter(p => p.id !== product.id)
        ));
    };

    // Adding a product to a specific basket
    const addProductToStorage = (storageIndex: number, product: ProductType) => {
        removeProductFromAllStorages(product); // Usuń produkt ze wszystkich schowków
        setStorages(prevStorages => {
            const updatedStorages = [...prevStorages];
            if (updatedStorages[storageIndex]) {
                updatedStorages[storageIndex].productCount = (updatedStorages[storageIndex].productCount || 0) + 1;
            }
            localStorage.setItem(storagesKey, JSON.stringify(updatedStorages));
            return updatedStorages;
        });
    };


    // Delete a product from a specific basket
    const removeProductFromStorage = (storageIndex: number, productId: number | string) => {
        setStorages(prevStorages => {
            const updatedStorages = [...prevStorages];
            if (updatedStorages[storageIndex]) {
                updatedStorages[storageIndex].productCount = Math.max(0, (updatedStorages[storageIndex].productCount || 0) - 1);
            }
            localStorage.setItem(storagesKey, JSON.stringify(updatedStorages));
            return updatedStorages;
        });
    };


    const handleStorageClick = (index: number) => {
        setSelectedStorage(index.toString());
    };


    return (
        <StorageContext.Provider
            value={{
                userId,
                storages,
                storageProducts,
                setStorages,
                setStorageProducts,
                addNewStorage,
                addProductToStorage,
                removeProductFromStorage,
                handleStorageClick,
                selectedStorage,
                setSelectedStorage
            }}
        >
            {children}
        </StorageContext.Provider>
    );
};