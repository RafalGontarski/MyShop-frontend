import React from 'react';
import {StyledDeleteStorageButton} from './buttons.styles';
import DeleteIcon from '@mui/icons-material/Delete';

interface CustomButtonProps {
    label: string;
    onClick?: () => void;
}

const DeleteStorage: React.FC<CustomButtonProps & { as?: React.ElementType; to?: string }> = ({ label, onClick, ...props }) => {
    return (
        <StyledDeleteStorageButton
            variant="contained"
            color="primary"
            onClick={onClick}
            startIcon={<DeleteIcon style={{fontSize: '30'}}/>}
            {...props} // przekazuje wszystkie pozostałe atrybuty do StyledButton
        >
            {label}
        </StyledDeleteStorageButton>
    );
};

export default DeleteStorage;

