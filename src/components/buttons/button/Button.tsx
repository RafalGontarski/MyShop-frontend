import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
    label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            style={{ fontWeight: 'bold' }}
            sx={{
                marginTop: '1rem',
                backgroundColor: '#000',
                height: '40px',
                position: 'relative',
                borderRadius: '1.5rem',
                '&:hover': {
                    backgroundImage: 'linear-gradient(to right, blue, green)', // This sets the gradient background
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                    },
                },
            }}
        >
            {label}
        </Button>
    );
};

export default CustomButton;
