import React from "react";
import { StorageType } from "../../../models/types/StorageType";
import {StyledStorageSelector, StyledStorageSelectorOption} from "./selectors.styles";

interface StorageSelectorProps {
    storages: StorageType[];
    onSelectStorage: (index: number) => void;
}
export const StorageSelector: React.FC<StorageSelectorProps> = ({ storages, onSelectStorage }) => {


    return (
        <StyledStorageSelector onChange={(e) => onSelectStorage(parseInt(e.target.value, 10))}>
            {storages.map((storage, index) => (
                <StyledStorageSelectorOption key={index} value={index}>
                    {storage.name || `Schowek z dnia ${storage.date}`}
                </StyledStorageSelectorOption>
            ))}
        </StyledStorageSelector>
    );
};