import React from "react";
import { StorageType } from "../../../models/types/StorageType";
import {StyledStorageSelector, StyledStorageSelectorOption} from "./selectors.styles";
import {ProductType} from "../../../models/types/ProductType";

interface StorageSelectorProps {
    storages: StorageType[];
    selectedProduct: ProductType;
    onSelectStorage: (index: number, product: ProductType) => void;

}
export const StorageSelector: React.FC<StorageSelectorProps> = ({
                    storages,
                    selectedProduct,
                    onSelectStorage }) => {


    return (
        <StyledStorageSelector onChange={(e) => onSelectStorage(parseInt(e.target.value, 10), selectedProduct)}>
            {storages.map((storage, index) => (
                <StyledStorageSelectorOption key={index} value={index}>
                    {storage.name || `Schowek z dnia ${storage.date}`}
                </StyledStorageSelectorOption>
            ))}
        </StyledStorageSelector>
    );
};