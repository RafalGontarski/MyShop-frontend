import React from 'react';
import {StyledLinkButton} from './buttons.styles';

interface CustomButtonProps {
    label: string;
    onClick?: () => void;
}

const LinkButton: React.FC<CustomButtonProps & { as?: React.ElementType; to?: string }> = ({ label, onClick, ...props }) => {
    return (
        <StyledLinkButton
            variant="contained"
            color="primary"
            onClick={onClick}
            {...props} // przekazuje wszystkie pozostałe atrybuty do StyledButton
        >
            {label}
        </StyledLinkButton>
    );
};

export default LinkButton;

