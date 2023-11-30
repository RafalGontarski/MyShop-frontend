import React, {useContext} from "react";
import {CloseButton, HeaderContainer, SelectorContainer, SuccessfullyToastCont, TextContainer} from "./toast.styles";
import {StorageSelector} from "../selectors/StorageSelector";
import {StorageContext} from "../../../models/context/StorageContext";

interface SuccessfullyToastProps {
    closeToast: (id?: number | string) => void;
    toastId?: number | string;
    children?: React.ReactNode;
}


export const SuccessfullyToast: React.FC<SuccessfullyToastProps> = ({ closeToast, toastId, children }) => {

    const { storages, setSelectedStorage } = useContext(StorageContext);

    const handleSelectStorage = (index: number) => {
        setSelectedStorage(storages[index].name);
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
                <StorageSelector storages={storages} onSelectStorage={handleSelectStorage}/>
            </SelectorContainer>
        </SuccessfullyToastCont>
    );
};


