import React, {useContext} from "react";

import {
    CloseButton,
    TextContainer,
    HeaderContainer,
    SelectorContainer,
    SuccessfullyToastCont
    } from "./toast.styles";

import {ProductType} from "../../../models/types/ProductType";
import {StorageSelector} from "../selectors/StorageSelector";
import {StorageContext} from "../../../models/context/StorageContext";


interface SuccessfullyToastProps {
    closeToast: (id?: number | string) => void;
    toastId?: number | string;
    children?: React.ReactNode;
    selectedProduct: ProductType;
}


export const SuccessfullyToast: React.FC<SuccessfullyToastProps> = ({
    closeToast,
    toastId,
    children ,
    selectedProduct}) => {

    const { storages, addProductToStorage } = useContext(StorageContext);


    const handleSelectStorage = (index: number) => {
        // Dodaj produkt do wybranego schowka
        addProductToStorage(index, selectedProduct);
        // closeToast(toastId); // Zamknij toast po wykonaniu akcji
    };

    const handleClose = () => {
        if (toastId) {
            closeToast(toastId);
        } else {
            closeToast();
        }
    };

    return (
        <SuccessfullyToastCont>
            <HeaderContainer>
                <TextContainer>
                    {children}
                </TextContainer>
                <CloseButton onClick={handleClose}>X</CloseButton>
            </HeaderContainer>
            <SelectorContainer>
                <StorageSelector storages={storages} selectedProduct={selectedProduct} onSelectStorage={handleSelectStorage}/>
            </SelectorContainer>
        </SuccessfullyToastCont>
    );
};


