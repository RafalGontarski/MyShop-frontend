import NewStorage from "../tools/button/NewStorage";
import {StorageContainer} from "./WishList.styles";
import {StorageSubtitle, StorageTitle} from "../tools/drawer/Drawer.styles";
import React from "react";
import {StorageType} from "../../models/types/StorageType";

type StorageListProps = {
    storages: StorageType[];
    onStorageClick: (index: number) => void;
    addNewStorage: (newStorage: string) => void;
    handleStorageClick: (index: number) => void;
};


export const StorageList: React.FC<StorageListProps> = ({ storages, onStorageClick, addNewStorage }) => {

    const handleAddNewStorage = () => {
        addNewStorage(""); // Tutaj przekazujemy pusty argument
    };

    return (
        <>
            <NewStorage label={'Nowy'} onClick={handleAddNewStorage}/>
            {storages.map((storageDate, index) => (
                <StorageContainer key={storageDate.name} onClick={() => onStorageClick(index)}>
                    <StorageTitle variant="h6">
                        Mój schowek z {storageDate.date}
                    </StorageTitle>
                    <StorageSubtitle variant="body2" style={{color: 'grey'}}>
                        brak produktów • Data ostatniej modyfikacji
                    </StorageSubtitle>
                    <StorageSubtitle variant="body2" style={{color: 'grey'}}>
                        {storageDate.date}
                    </StorageSubtitle>
                </StorageContainer>
            ))}
        </>
    );
}
