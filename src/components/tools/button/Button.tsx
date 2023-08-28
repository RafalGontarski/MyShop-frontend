import React from 'react';
import { StyledButton } from './buttons.styles';

interface CustomButtonProps {
    label: string;
    onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps & { as?: React.ElementType; to?: string }> = ({ label, onClick, ...props }) => {
    return (
        <StyledButton
            variant="contained"
            color="primary"
            onClick={onClick}
            {...props} // przekazuje wszystkie pozostałe atrybuty do StyledButton
        >
            {label}
        </StyledButton>
    );
};

export default CustomButton;

