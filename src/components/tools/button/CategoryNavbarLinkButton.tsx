import React from 'react';
import {StyledCategoryNavbarLinkButton} from './buttons.styles';

interface CustomButtonProps {
    label: string;
    onClick?: () => void;
}

const CategoryNavbarLinkButton: React.FC<CustomButtonProps & { as?: React.ElementType; to?: string }> = ({ label, onClick, ...props }) => {
    return (
        <StyledCategoryNavbarLinkButton
            variant="contained"
            color="primary"
            onClick={onClick}
            {...props} // przekazuje wszystkie pozostałe atrybuty do StyledButton
        >
            {label}
        </StyledCategoryNavbarLinkButton>
    );
};

export default CategoryNavbarLinkButton;

