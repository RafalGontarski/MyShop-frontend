import * as React from 'react';

import {IconClose, StyledDrawer, StyledDrawerBox, StyledIconButton, StyledIconClose} from "../Drawer.styles";
import {MyStoragesListContainer, StorageDrawerLeftTitle} from "./StorageDrawer.styles";
import {StorageList} from "../../../storage/StorageList";
import {StorageType} from "../../../../models/types/StorageType";



type DrawerProps = {
    open: boolean;
    onClose: () => void;
    storages: StorageType[];
    addNewStorage: (newStorage: string) => void;
    handleStorageClick: (index: number) => void;
};


export const StorageDrawer: React.FC<DrawerProps> = ({
     open, onClose, storages, addNewStorage, handleStorageClick
    }) => {

    console.log("Logi z StorageDrawer: ", storages);

    return (
        <StyledDrawer
            anchor={'left'}
            open={open}
            onClose={onClose}
        >
            <StyledDrawerBox role="presentation">
                <IconClose>
                    <StorageDrawerLeftTitle>Lista życzeń</StorageDrawerLeftTitle>
                    <StyledIconButton
                        onClick={onClose} disableRipple>
                        <StyledIconClose />
                    </StyledIconButton>
                </IconClose>
            </StyledDrawerBox>

            <MyStoragesListContainer>
                <StorageList
                    storages={storages}
                    onStorageClick={handleStorageClick}
                    addNewStorage={addNewStorage}
                    handleStorageClick={handleStorageClick}
                />
            </MyStoragesListContainer>
        </StyledDrawer>
    );
}
