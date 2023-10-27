import React from "react";
import {CloseButton, SuccessfullyToastCont} from "./toast.styles";

interface SuccessfullyToastProps {
    closeToast: (id?: number | string) => void;
    toastId?: number | string;
    children?: React.ReactNode;
}


export const SuccessfullyToast: React.FC<SuccessfullyToastProps> = ({ closeToast, toastId, children }) => {
    const handleClose = () => {
        if (toastId) {
            closeToast(toastId);
        } else {
            closeToast();
        }
    };

    return (
        <SuccessfullyToastCont>
            {children}
            <CloseButton onClick={handleClose}>X</CloseButton>
        </SuccessfullyToastCont>
    );
};


