import React from 'react';
import {StyledNewStorageButton} from './buttons.styles';
import AddIcon from '@mui/icons-material/Add';

interface CustomButtonProps {
    label: string;
    onClick?: () => void;
}

const NewStorage: React.FC<CustomButtonProps & { as?: React.ElementType; to?: string }> = ({ label, onClick, ...props }) => {
    return (
        <StyledNewStorageButton
            variant="contained"
            color="primary"
            onClick={onClick}
            startIcon={<AddIcon style={{fontSize: '30'}}/>}
            {...props} // passes all other attributes to the StyledButton
        >
            {label}
        </StyledNewStorageButton>
    );
};

export default NewStorage;

