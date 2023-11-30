import React, {useContext, useEffect, useState} from "react";
import {ProductType} from "../types/ProductType";
import {StorageContext} from "../context/StorageContext";
import {StorageType} from "../types/StorageType";
import {UserContext} from "../context/UserContexts";

interface StorageProviderProps {
    children: React.ReactNode;
}

export const StorageProvider: React.FC<StorageProviderProps> = ({ children }) => {
    const { currentUser } = useContext(UserContext);
    console.log("Current User:", currentUser);
    const userId = currentUser?.id || null || undefined;
    console.log("User ID:", userId);

    const wishListStoragesKey = `wishListStorages_${userId}`;
    const storagesKey = `storages_${userId}`;
    const storageProductsKey = `storageProducts_${userId}`;

    const [storages, setStorages] = useState<StorageType[]>(() => {
        const storedStorages = localStorage.getItem(wishListStoragesKey);
        return storedStorages ? JSON.parse(storedStorages) : [];
    });

    const [storageProducts, setStorageProducts] = useState<ProductType[][]>(() => {
        const storedStorageProducts = localStorage.getItem(storageProductsKey);
        return storedStorageProducts ? JSON.parse(storedStorageProducts) : [];
    });

    const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
    //... the rest of the state




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

            return [...prevStorages, newStorage];
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
            localStorage.setItem(storagesKey, JSON.stringify(storages));
            localStorage.setItem(storageProductsKey, JSON.stringify(storageProducts));
        }
    }, [storages, storageProducts, userId, storagesKey, storageProductsKey]);

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