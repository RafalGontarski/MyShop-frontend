import React from 'react';
import {StyledAddToBasketButton} from './buttons.styles';

interface CustomButtonProps {
    label: string;
    onClick?: () => void;
}

const AddToBasketButton: React.FC<CustomButtonProps & { as?: React.ElementType; to?: string }> = ({ label, onClick, ...props }) => {
    return (
        <StyledAddToBasketButton
            variant="contained"
            color="primary"
            onClick={onClick}
            {...props} // przekazuje wszystkie pozostałe atrybuty do StyledButton
        >
            {label}
        </StyledAddToBasketButton>
    );
};

export default AddToBasketButton;

