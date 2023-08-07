import React from 'react';
import { StyledButton } from './buttons.styles';

interface CustomButtonProps {
    label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label }) => {
    return (
        <StyledButton variant="contained" color="primary">
            {label}
        </StyledButton>
    );
};

export default CustomButton;
