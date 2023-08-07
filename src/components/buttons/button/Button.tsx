import React from 'react';
import { StyledButton } from './buttons.styles';

interface CustomButtonProps {
    label: string;
    onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
    return (
        <StyledButton variant="contained" color="primary" onClick={onClick}>
            {label}
        </StyledButton>
    );
};

export default CustomButton;

