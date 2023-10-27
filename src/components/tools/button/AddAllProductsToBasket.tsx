import React from 'react';
import {StyledAllProductsButton} from './buttons.styles';
import {StyledAddAllProductsIcon} from "../../storage/WishList.styles";

interface CustomButtonProps {
    label: string;
    onClick?: () => void;
}

const AddAllProductsToBasket: React.FC<CustomButtonProps & { as?: React.ElementType; to?: string }> = ({ label, onClick, ...props }) => {
    return (
        <StyledAllProductsButton
            variant="contained"
            color="primary"
            onClick={onClick}
            startIcon={<StyledAddAllProductsIcon style={{fontSize: '25'}}/>}
            {...props}
        >
            {label}
        </StyledAllProductsButton>
    );
};

export default AddAllProductsToBasket;

