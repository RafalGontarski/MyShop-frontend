import React from 'react';
import {StyledWhiteButton} from './buttons.styles';

interface CustomButtonProps {
    label: string;
    onClick?: () => void;
}

const WhiteButton: React.FC<CustomButtonProps & { as?: React.ElementType; to?: string }> = ({ label, onClick, ...props }) => {
    return (
        <StyledWhiteButton
            variant="contained"
            color="primary"
            onClick={onClick}
            {...props} // przekazuje wszystkie pozostałe atrybuty do StyledButton
        >
            {label}
        </StyledWhiteButton>
    );
};

export default WhiteButton;

