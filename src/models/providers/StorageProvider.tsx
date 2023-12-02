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
        if (context?.currentUser) {
            // LocalStorage key declaration
            const userId = context.currentUser.id;
            const storagesKey = `storages_${userId}`;
            const storageProductsKey = `storageProducts_${userId}`;

            console.log('user id from Storage Provider: ', userId);

            // Loading clipboard data for the logged in user
            const storedStorages = localStorage.getItem(storagesKey);
            if (storedStorages) {
                setStorages(JSON.parse(storedStorages));
            }

            const storedStorageProducts = localStorage.getItem(storageProductsKey);
            if (storedStorageProducts) {
                setStorageProducts(JSON.parse(storedStorageProducts));
            }
        }
    }, [context?.currentUser]);



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
                editedAt: formattedTime
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

    // Adding a product to a specific basket
    const addProductToStorage = (storageIndex: number, product: ProductType) => {
        setStorageProducts(prevProducts => {
            const updatedProducts = [...prevProducts];
            // Ensure there is an array to add the product to
            if (!updatedProducts[storageIndex]) {
                updatedProducts[storageIndex] = [];
            }
            updatedProducts[storageIndex] = [...updatedProducts[storageIndex], product];
            return updatedProducts;
        });
    };


    // Delete a product from a specific basket
    const removeProductFromStorage = (storageIndex: number, productId: number | string) => {
        setStorageProducts(prevProducts => {
            const updatedProducts = [...prevProducts];
            // Check if the storage at the specified index exists
            if (updatedProducts[storageIndex]) {
                updatedProducts[storageIndex] = updatedProducts[storageIndex].filter(p => p.id !== productId);
            }
            return updatedProducts;
        });
    };


    const handleStorageClick = (index: number) => {
        setSelectedStorage(index.toString());
    };


    useEffect(() => {
        if (userId) {
            const storedStorages = localStorage.getItem(storagesKey);
            if (storedStorages) {
                setStorages(JSON.parse(storedStorages));
            }

            const storedStorageProducts = localStorage.getItem(storageProductsKey);
            if (storedStorageProducts) {
                setStorageProducts(JSON.parse(storedStorageProducts));
            }
        }
    }, [userId, storagesKey, storageProductsKey]);

    useEffect(() => {
        if (userId) {
            localStorage.setItem(storagesKey, JSON.stringify(storages));
            localStorage.setItem(storageProductsKey, JSON.stringify(storageProducts));
        }
    }, [storages, storageProducts, userId]);


    useEffect(() => {
        if (userId) {
            const storedStorages = localStorage.getItem(`storages_${userId}`);
            console.log('Stored Storages from Storage Provider: ', storedStorages);
            if (storedStorages) {
                setStorages(JSON.parse(storedStorages));
            }

            const storedStorageProducts = localStorage.getItem(`storageProducts_${userId}`);
            console.log('Stored Storage Products from Storage Provider: ', storedStorageProducts);
            if (storedStorageProducts) {
                setStorageProducts(JSON.parse(storedStorageProducts));
            }
        }
    }, [userId]);


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