import React, {useContext, useEffect} from "react";
import NewStorage from "../tools/button/NewStorage";
import {StorageContainer} from "./WishList.styles";
import {StorageSubtitle, StorageTitle} from "../tools/drawer/Drawer.styles";
import {StorageType} from "../../models/types/StorageType";
import {StorageContext} from "../../models/context/StorageContext";
import {UserContext} from "../../models/context/UserContexts";

type StorageListProps = {
    storages: StorageType[];
    onStorageClick: (index: number) => void;
    addNewStorage: (newStorage: string) => void;
    handleStorageClick: (index: number) => void;
};


export const StorageList: React.FC<StorageListProps> = ({
                        storages,
                        onStorageClick,
                        addNewStorage }) => {

    const { currentUser } = useContext(UserContext);
    console.log('CurrentUser from StorageList: ', currentUser);
    const userId = currentUser?.id;
    console.log('User Id from StorageList: ', userId);

    const handleAddNewStorage = () => {
        addNewStorage(""); // Here we pass an empty argument
    };



    return (
        <>
            <NewStorage label={'Nowy'} onClick={handleAddNewStorage}/>
            {storages.map((storage, index) => (
                <StorageContainer key={index} onClick={() => onStorageClick(index)}>
                    <StorageTitle variant="h6">
                        Mój schowek z {storage.date}
                    </StorageTitle>
                    <StorageSubtitle variant="body2" style={{color: 'grey'}}>
                        brak produktów • Data ostatniej modyfikacji
                    </StorageSubtitle>
                    <StorageSubtitle variant="body2" style={{color: 'grey'}}>
                        {storage.createdAt} {storage.date}
                    </StorageSubtitle>
                </StorageContainer>
            ))}
        </>
    );
}